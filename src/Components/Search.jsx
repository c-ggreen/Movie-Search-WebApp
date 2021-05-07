import React, { Component } from 'react';

class Search extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div>
                <form action="" className="form">
                    <label className="label" htmlFor="query">Movie Name</label>
                    <input type="text" name="query" className="input" />
                    <button className="button" type="submit">Search</button>


                </form>
            </div>
        );
    }
}

export default Search;

// Create a FORM for the user to be able to search.
// Form inputs should correspond with using the API
// Display user info