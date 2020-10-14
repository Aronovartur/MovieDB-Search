import React from "react";
import Moment from 'react-moment';


const Movie =({movie,onMovieSelect}) => {


    return <tr key={movie.id}>
        <td onClick={()=>onMovieSelect(movie)} ><Moment format={"MMMM DD, YYYY"}>{movie.release_date}</Moment></td>
        <td onClick={()=>onMovieSelect(movie)}>{movie.title}</td>
        <td onClick={()=>onMovieSelect(movie)}>{movie.popularity} </td>
    </tr>

};
export default Movie;