package database

import (
	"database/sql"
	"fmt"
)

const (
	DB_USER     = "ShwetankVerma"
	DB_PASSWORD = "1234"
	DB_NAME     = "test"
)

func SetupDB() *sql.DB {
	dbinfo := fmt.Sprintf("user=%s password=%s dbname=%s sslmode=disable", DB_USER, DB_PASSWORD, DB_NAME)
	db, err := sql.Open("postgres", dbinfo)

	checkErr(err)

	return db
}
func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
