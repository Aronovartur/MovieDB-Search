import React from "react";
import Card from "react-bootstrap/cjs/Card";
import ListGroup from "react-bootstrap/cjs/ListGroup";
import ListGroupItem from "react-bootstrap/cjs/ListGroupItem";

const MovieDetail = ({movie}) => {
    if (!movie) {
        return <div>Select a Movie...</div>
    } else {
        const genreList = movie.genres.map((genre) => {
            return `${genre.name} `;
        });
        const posterPath = () => {

            if(!movie.poster_path) {
                return 'https://via.placeholder.com/450'
            }
            else {
                return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            }
        };
            return <Card style={{width: '100%'}}>
                <Card.Img variant="top" src={posterPath()}/>
                <Card.Body>
                    <Card.Title>{movie.title} </Card.Title>
                    <Card.Text>
                        {movie.overview}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">

                    <ListGroupItem><b>Genres:</b> {genreList}</ListGroupItem>
                    <ListGroupItem><b>Tagline:</b> {movie.tagline}</ListGroupItem>
                    <ListGroupItem><b>Runtime:</b> {movie.runtime} minutes</ListGroupItem>

                </ListGroup>

            </Card>
        }
    };

    export default MovieDetail;