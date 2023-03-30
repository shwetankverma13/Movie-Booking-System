package core

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	data "movie/backend/Go/database"
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

func fetchMovies(c *gin.Context) {
	db := data.setupDB()

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
