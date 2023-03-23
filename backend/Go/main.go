package main

import (
	"database/sql"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/lib/pq"
)

// the tag is json:"id", which indicates that the field should be marshaled to and unmarshaled from JSON using the key "id".
type movie struct {
	Id          string `json:"id"`
	Title       string `json:"title"`
	Image       string `json:"image"`
	Language    string `json:"language"`
	Genre       string `json:"genre"`
	Description string `json:"description"`
	Duration    string `json:"duration"`
	Year        string `json:"year"`
}
type theatre struct {
	Id       string         `json:"id"`
	Title    string         `json:"title"`
	Image    string         `json:"image"`
	Location string         `json:"location"`
	Timings  pq.StringArray `json:"timings"`
}

// tom and finalDT are of the same thing, finalDT is the map combining the theatres with timings array to avoid redundancy
type tom struct {
	TheatreTitle string `json:"theatreName"`
	Time         string `json:"time"`
	MovieTitle   string `json:"movieName"`
	Location     string `json:"location"`
}
type finalDT struct {
	TheatreName string   `json:"theatreName"`
	Timing      []string `json:"time"`
}

type Seat struct {
	MovieID   string `json:"movieId"`
	TheatreId string `json:"theatreId"`
	SeatNum   string `json:"seatNum"`
	Time      string `json:"time"`
}

const (
	DB_USER     = "ShwetankVerma"
	DB_PASSWORD = "1234"
	DB_NAME     = "test"
)

// DB set up
func setupDB() *sql.DB {
	dbinfo := fmt.Sprintf("user=%s password=%s dbname=%s sslmode=disable", DB_USER, DB_PASSWORD, DB_NAME)
	db, err := sql.Open("postgres", dbinfo)

	checkErr(err)

	return db
}

func GetMovies(c *gin.Context) {
	db := setupDB()

	printMessage("Getting movies...")

	// Get all movies from movies table
	rows, err := db.Query(`SELECT * FROM "Movies"`)

	// check errors
	checkErr(err)

	// var response []JsonResponse
	var movies []movie

	// Foreach movie
	for rows.Next() {
		var id string
		var title string
		var image string
		var language string
		var genre string
		var description string
		var duration string
		var year string

		//The Scan method is used to read the values from the current row into the specified variables
		err = rows.Scan(&id, &title, &image, &language, &genre, &description, &duration, &year)

		// check errors
		checkErr(err)

		movies = append(movies, movie{Id: id, Title: title, Image: image, Language: language, Genre: genre, Description: description, Duration: duration, Year: year})
	}

	c.IndentedJSON(http.StatusOK, movies)

}

func GetTheatre(c *gin.Context) {
	db := setupDB()

	printMessage("Getting Theatres...")

	// Get all theatres from theatres table
	rows, err := db.Query(`SELECT * FROM "Theatre"`)

	// check errors
	checkErr(err)

	// var response []JsonResponse
	var theatres []theatre

	// For each movie
	for rows.Next() {
		var id string
		var title string
		var image string
		var location string
		// var timings pq.StringArray

		// err = rows.Scan(&id, &title, &image, &location, &timings)
		err = rows.Scan(&id, &title, &image, &location)

		// check errors
		checkErr(err)

		// theatres = append(theatres, theatre{Id: id, Title: title, Image: image, Location: location, Timings: timings})
		theatres = append(theatres, theatre{Id: id, Title: title, Image: image, Location: location})
	}

	c.IndentedJSON(http.StatusOK, theatres)

}

// for the movie detail page we need only the movie name,theatre name, location and the time . Hence I connected all the table and fetched these values from theatre movie time and bookings table.
func GetTheatreOfMovies(c *gin.Context) {
	db := setupDB()
	movies_name := c.Param("movieName")
	fmt.Println(movies_name)
	rows, err := db.Query(`select DISTINCT th.title,th.location, t.time,m.title from "Booking" b,"Movies" m,"Theatre" th, "Timings" t where b.mid=m.mid and b.thid=th.thid and b.tid=t.tid and m.title=$1`, movies_name)
	checkErr(err)
	var toms []tom
	for rows.Next() {
		var theatreName string
		var time string
		var movieName string
		var location string
		err = rows.Scan(&theatreName, &location, &time, &movieName)
		checkErr(err)
		toms = append(toms, tom{TheatreTitle: theatreName, Location: location, Time: time, MovieTitle: movieName})
	}
	mp := make(map[string][]string)
	for _, dt := range toms {
		mp[dt.TheatreTitle+", "+dt.Location] = append(mp[dt.TheatreTitle+", "+dt.Location], dt.Time)
	}
	var finalData []finalDT
	for k, v := range mp {
		finalData = append(finalData, finalDT{TheatreName: k, Timing: v})
	}
	fmt.Println(finalData)
	c.IndentedJSON(http.StatusOK, finalData)
}

func PostSeat(c *gin.Context) {
	db := setupDB()
	var seats []Seat
	var seat Seat
	if err := c.ShouldBindJSON(&seat); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	_, err1 := db.Query("insert into seats values ($1,$2,$3,$4)", seat.MovieID, seat.TheatreId, seat.SeatNum, seat.Time) //insert query

	checkErr(err1)
	seats = append(seats, seat)
	//c.JSON(http.StatusCreated, seat)
	c.IndentedJSON(http.StatusOK, seats)

}

func getSeats(c *gin.Context) {
	db := setupDB()
	movie_id := c.Param("mid")
	theatre_name := c.Param("thname")
	timeShow := c.Param("time")
	var seats []Seat
	rows, err := db.Query(`select seatnum from "seats" where mid=$1 and thname=$2 and time=$3`, movie_id, theatre_name, timeShow)
	checkErr(err)
	for rows.Next() {
		var selectedSeats string
		err = rows.Scan(&selectedSeats)
		checkErr(err)
		seats = append(seats, Seat{SeatNum: selectedSeats})
	}
	fmt.Println(seats)
	c.IndentedJSON(http.StatusOK, seats)
}
func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
func printMessage(message string) {
	fmt.Println("")
	fmt.Println(message)
	fmt.Println("")
}

func main() {

	router := gin.Default()
	router.GET("/movies", GetMovies)
	router.GET("/theatres", GetTheatre)
	router.GET("/toms/:movieName", GetTheatreOfMovies)
	router.POST("/seats", PostSeat)
	router.GET("/seats/:mid/:thname/:time", getSeats)
	router.Run("localhost:9090")

	// router := mux.NewRouter()
	// router.HandleFunc("/movies", GetMovies).Methods("GET")
	// fmt.Println("Server at 9090")
	// log.Fatal(http.ListenAndServe(":9090", router))
}
