import React from "react";
import Movie from "./Movie";
import Table from "react-bootstrap/Table";

const MovieList = ({movies, onMovieSelect}) => {
    const renderedList = movies.map((movie) => {
        return <Movie movie={movie} onMovieSelect={onMovieSelect} selectedMovie/>
    });

    return (
        <Table className={'striped bordered hover'}>
            Total Movies: {movies.length}
            <thead>
            <tr>
                <th>Release Date</th>
                <th>Title</th>
                <th>Popularity</th>

            </tr>
            </thead>
            <tbody>

            {renderedList}</tbody>
        </Table>
    );

}

export default MovieList