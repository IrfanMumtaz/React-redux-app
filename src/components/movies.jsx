import React, { Component } from "react";
import axios from "axios";
import Movie from "./movie";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import { setMoviesCount } from "../actions";
class Movies extends Component {
    constructor() {
        super();
        this.state = {
            activePage: 1,
            itemPerPage: 10,
            moviesList: [],
            movies: []
        };
    }

    componentDidMount() {
        this.getMovies();
    }

    getMovies = async () => {
        const res = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );

        this.setState({ moviesList: res.data });
        this.moviesPaginate(0, this.state.itemPerPage * 1);
        this.props.setMoviesCount(this.state.moviesList.length);
    };

    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
        const listIndex = pageNumber * this.state.itemPerPage;
        this.moviesPaginate(listIndex - this.state.itemPerPage, listIndex);
    }

    moviesPaginate(from, to) {
        const movies = this.state.moviesList.slice(from, to);
        this.setState({ movies });
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <h6 className="text-muted">List Group with Images</h6>
                    <ul className="list-group">
                        {this.state.movies.map(movie => (
                            <Movie key={movie.id} movie={movie} />
                        ))}
                    </ul>
                </div>
                <div>
                    <Pagination
                        className="mt-4"
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemPerPage}
                        totalItemsCount={100}
                        pageRangeDisplayed={10}
                        onChange={this.handlePageChange.bind(this)}
                        itemClass="page-item"
                        linkClass="page-link"
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default connect(null, { setMoviesCount })(Movies);
