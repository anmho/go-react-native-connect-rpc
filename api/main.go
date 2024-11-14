package main

import (
	"errors"
	"fmt"
	"happenedapi/gen/protos/v1/happenedv1connect"
	"log/slog"
	"net/http"
	"os"

	_ "github.com/jackc/pgx/v5/stdlib" // Import the pgx driver for database/sql
)

type Config struct {
	DbHost string `env:"DB_HOST"`
	DbUser string `env:"DB_USER"`
	DbPass string `env:"DB_PASS"`
	DbName string `env:"DB_NAME"`
	DbPort int    `env:"DB_PORT"`
}

const (
	Port = 8080
)


func main() {
	logger := slog.Default()
	var err error
	api := New(nil)
	mux := http.NewServeMux()

	// Create server
	path, handler := happenedv1connect.NewHappenedServiceHandler(api)
	mux.Handle(path, handler)

	logger.Info("server listening", slog.Int("port", Port))
	err = http.ListenAndServe(
		fmt.Sprintf("localhost:%d", Port),
		mux,
	)

	if err != nil {
		if errors.Is(err, http.ErrServerClosed) {
			slog.Info("shutting down server")
			os.Exit(0)
		} else {
			slog.Error("unexpected error", slog.Any("error", err))
			os.Exit(1)
		}
	}
}
