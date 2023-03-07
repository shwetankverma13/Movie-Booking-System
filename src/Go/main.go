package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
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

var movies = []movie{
	{
		Id:          "1",
		Title:       "Matrix",
		Image:       "../images/matrix.png",
		Language:    "English",
		Genre:       "Action/SciFi",
		Description: "To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he's learned anything, it's that choice, while an illusion...",
		Duration:    "2h 28min",
		Year:        "2021",
	},
	{
		Id:          "2",
		Title:       "83",
		Image:       "../images/kd83.png",
		Language:    "Hindi",
		Genre:       "Sports",
		Description: "On June 25, 1983, the Lord's Cricket Ground witnessed 14 men beat the two times World Champions West Indies, putting India back onto the cricket world stage.",
		Duration:    "2h 40min",
		Year:        "2022",
	},
	{
		Id:          "3",
		Title:       "Sammayanaydu",
		Image:       "../images/saamanyudu.png",
		Language:    "Telugu",
		Genre:       "Action/Thriller",
		Description: "A young man aspires to follow in his father's footsteps and become a police officer. However, when his sister is killed, he takes matters into his own hands to catch the culprits.",
		Duration:    "2h 50min",
		Year:        "2022",
	},
	{
		Id:          "4",
		Title:       "Pushpa",
		Image:       "../images/Pushpa.png",
		Language:    "Telugu",
		Genre:       "LoveStory/Drama",
		Description: "A labourer named Pushpa makes enemies as he rises in the world of red sandalwood smuggling. However, violence erupts when the police attempt to bring down his illegal business.",
		Duration:    "2h 59min",
		Year:        "2022",
	},
	{
		Id:          "5",
		Title:       "Movie1",
		Image:       "../images/no_img.png",
		Language:    "English",
		Genre:       "Action/SciFi",
		Description: "To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he's learned anything, it's that choice, while an illusion...",
		Duration:    "2h 28min",
		Year:        "2023",
	},
}

func getMovies(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, movies)
}

func main() {
	router := gin.Default()
	router.GET("/movies", getMovies)
	router.Run("localhost:9090")
}
