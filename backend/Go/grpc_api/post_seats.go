package grpcapi

import (
	"backend/Go/database"
	"backend/Go/pb"
	"context"
)

type Service struct {
	pb.UnimplementedPostSeatsServer
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
func (s *Service) PostSeats(ctx context.Context, req *pb.SeatRequest) (*pb.SeatResponse, error) {
	db := database.SetupDB()
	//var seat pb.SeatRequest

	_, err1 := db.Query("insert into seats values ($1,$2,$3,$4)", req.Mid, req.Thid, req.Seat, req.Time) //insert query

	checkErr(err1)
	res := pb.SeatResponse{Status: "added to DB"}
	return &res, nil
}
