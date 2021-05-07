import React, { Component } from 'react';

class Search extends Component {
    constructor(){
        super()
    }

    // function to grab user input
    searchMovies = async(event) =>{
        // event.preventDefault() stops the whole page from refreshing when the function is called
        event.preventDefault()

        // check to see that the function is firing when form is submitted
        console.log("submitting");

        const query = "Jurassic Park"

        // variable for URL
        const url = `https://api.themoviedb.org/3/search/movie?api_key=2f3ba6c35b4aec2ea0bec98575461609&language=en-US&query=${query}&page=1&include_adult=false`

        // tell the function to wait for data using await/fetch
        const response = await fetch(url)

        // turn the data into JSON format
        const data = await response.json()

        // checking data is being received
        console.log(data);
    }

    render() {
        return (
            <div>
                {/* Because the BUTTON inside the FORM has a type of submit, you can call the search function inside the FORM tag using onSubmit */}
                <form action="" className="form" onSubmit={this.searchMovies}>

                    <label className="label" htmlFor="query">Movie Name</label>
                    <input type="text" name="query" className="input" />
                    <button className="button" type="submit">Search</button>

                </form>
            </div>
        );
    }
}

export default Search;

// ---------Pseudo Code---------
// Create a FORM for the user to be able to search.
// Form inputs should correspond with using the API
// Display user info