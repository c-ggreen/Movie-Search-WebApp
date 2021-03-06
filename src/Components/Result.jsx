import React, { Component } from 'react';

class Result extends Component {
    render() {
        return (
            <div>
                <h1>Title: {this.props.data.title}</h1>
                <h1>Release Date: {this.props.data.release_date}</h1>
                <h1>Plot: {this.props.data.overview}</h1>
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`} alt="" />
            </div>
        );
    }
}

export default Result;