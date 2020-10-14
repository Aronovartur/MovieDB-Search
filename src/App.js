import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Button from "react-bootstrap/cjs/Button";

import MovieDB from "./api/MovieDB";
import Search from './components/Search';
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

class App extends React.Component {
    onSearchTermSubmit = (searchTerm) => {

        console.log(searchTerm)
    };

    state = {
        pageNumber: 1,
        movies: [],
        hasMore: false,
        loading: true,
        selectedMovie: null
};

componentDidMount = async () => {
    // get some data
    for (let i = 1; i <= 20; i++) {

        this.setState({pageNumber: i});
        const response = await MovieDB.get('/discover/movie', {
                params: {

                    sort_by: 'primary_release_date.asc',
                    include_adult: 'false',
                    include_video: 'false',
                    primary_release_year: 2020,
                    page: this.state.pageNumber
                }
            }
        );
        this.setState({movies: this.state.movies.concat(response.data.results.filter(movie => movie.popularity > 10))});
    }
};
getMovieDetails = async movie =>{
    const response =  await MovieDB.get(`/movie/${movie.id}`, {});


    this.setState({selectedMovie: response.data})
        };



    fetchMoreData = async () => {

//get 5 more pages
    let currentPage = this.state.pageNumber;

    const limitPage = currentPage + 5;

    for (currentPage; currentPage <= limitPage; currentPage++) {

        this.setState({pageNumber: currentPage});
        const response = await MovieDB.get('/discover/movie', {
                params: {

                    sort_by: 'primary_release_date.asc',
                    include_adult: 'false',
                    include_video: 'false',
                    primary_release_year: 2020,
                    page: this.state.pageNumber
                }
            }
        );
        this.setState({movies: this.state.movies.concat(response.data.results.filter(movie => movie.popularity > 10))});

    }
};

render()
{
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={12}>
                        <Jumbotron>



                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col sm={5}><MovieDetail movie={this.state.selectedMovie}/> </Col>
                    <Col sm={7} className={'overflow-auto'} style={{maxHeight:'1100px'}}>

                        <MovieList movies={this.state.movies} onMovieSelect={this.getMovieDetails} >

                        </MovieList>
                        <Row>
                            <Button onClick={this.fetchMoreData}>Load More</Button>
                        </Row>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}
}

export default App;
