package main

import (
	"database/sql"
	// "encoding/json"
	"fmt"
	// "log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/lib/pq"

	// "github.com/gin-gonic/gin"
	// "github.com/gorilla/mux"
	_ "github.com/lib/pq"
)

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

	// Get all movies from movies table that don't have movieID = "1"
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

		err = rows.Scan(&id, &title, &image, &language, &genre, &description, &duration, &year)

		// check errors
		checkErr(err)

		movies = append(movies, movie{Id: id, Title: title, Image: image, Language: language, Genre: genre, Description: description, Duration: duration, Year: year})
	}

	c.IndentedJSON(http.StatusOK, movies)

	// var response = JsonResponse{Type: "success", Data: movies}

	// json.NewEncoder(w).Encode(response)
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

	// Foreach movie
	for rows.Next() {
		var id string
		var title string
		var image string
		var location string
		var timings pq.StringArray

		err = rows.Scan(&id, &title, &image, &location, &timings)

		// check errors
		checkErr(err)

		theatres = append(theatres, theatre{Id: id, Title: title, Image: image, Location: location, Timings: timings})
	}

	c.IndentedJSON(http.StatusOK, theatres)

	// var response = JsonResponse{Type: "success", Data: movies}

	// json.NewEncoder(w).Encode(response)
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

	router.Run(":9090")

	// router := mux.NewRouter()
	// router.HandleFunc("/movies", GetMovies).Methods("GET")
	// fmt.Println("Server at 9090")
	// log.Fatal(http.ListenAndServe(":9090", router))
}
