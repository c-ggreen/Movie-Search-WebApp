import React, { Component } from 'react';
import Result from './Result';

class Search extends Component {
    constructor(){
        super()
        this.state ={
            userInput:'',
            data: ''
        }
    }
    
    
    // function to grab user input
    searchMovies = async(event) =>{
        // event.preventDefault() stops the whole page from refreshing when the function is called
        event.preventDefault()

        // check to see that the function is firing when form is submitted
        console.log("submitting");

        const query = this.state.userInput

        // variable for URL
        const url = `https://api.themoviedb.org/3/search/movie?api_key=2f3ba6c35b4aec2ea0bec98575461609&language=en-US&query=${query}&page=1&include_adult=false`


        // The try...catch statement marks a block of statements to try (try) and specifies a response (catch) should an exception be thrown
        // Similar to IF and ELSE statements
        try{
            // tell the function to wait for data using await/fetch
            const response = await fetch(url)

            // turn the data into JSON format
            const data = await response.json()

            // checking data is being received
            console.log(data.results[0]);

            // grab the data using setState
            this.setState({
                data: data.results[0]
            })

        }
        catch(err){
            console.log(err);
        }
    }

    handleChange = (event) =>{
        this.setState({userInput: event.target.value})
    }

    render() {
        return (
            <div>
                {/* Because the BUTTON inside the FORM has a type of submit, you can call the search function inside the FORM tag using onSubmit */}
                <form action="" className="form" onSubmit={this.searchMovies}>

                    <label className="label" htmlFor="query">Movie Name</label>
                    <input type="text" name="query" className="input" value={this.state.userInput} onChange={this.handleChange}/>
                    <button className="button" type="submit">Search</button>

                </form>
                
                {/* making a prop that accesses the state */}
                <Result data={this.state.data}/>
            </div>
        );
    }
}

export default Search;

// ---------Pseudo Code---------
// Create a FORM for the user to be able to search.
// Form inputs should correspond with using the API
// Display user info