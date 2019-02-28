import React, { Component } from 'react';
import './App.css';
import Nav from './comps/nav/Nav';
import SearchBox from './comps/searchbox/SearchBox';
import Default from './comps/default/Default';
import Card from './comps/card/Card';
// import CardsList from './comps/cardslist/CardsList';


// const api_key = process.env.GBOOKS_API_KEY;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      api_url: 'https://www.googleapis.com/books/v1/volumes?libraryRestrict=no-restrict&orderBy=relevance&printType=books&q=',
      isLoaded: false,
      results: {
        items: [],
        kind: '',
        totalItems: 0
      }
    }

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({isLoaded: !this.state.isLoaded})
  }

// HANDLE SEARCH INPUT VALUE
  handleSearchChange(event) {
    this.setState({ query: event.target.value });
  }

// HANDLE FORM SUBMIT EVENT
  handleSubmit(event) {
    event.preventDefault();
    const { api_url, query } = this.state;
    const regex = /\s/g;
    const parsedQuery = query.replace(regex, "+");

    if (event.target.elements.searchfield.value.length > 0) {
      fetch(`${api_url}${parsedQuery}&maxResults=25`)
        .then(resp => resp.json())
        .then(json_data => this.setState({results: json_data}))
    }
  }

// FETCH FROM API


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>BookWorm</h1>
          <Nav />
        </header>

        <SearchBox
          onSearchChange={this.handleSearchChange}
          onBtnSubmit={this.handleSubmit}
          query={this.state.query}
        />

        {/* check for input */}
        {this.state.query.length <= 0 ? <Default /> : null}

        {/* check for valid input results */}
        {this.state.results.totalItems === 0 && !this.state.results.items
          ? <h3 className="noresults">No matches found. Please try another search term =(</h3>
          : null
        }

        {/* render cards based on input results */}
        {this.state.results.items ? <Card data={this.state.results}/> : null}

        {/* <footer>
          <p></p>
        </footer> */}
      </div>
    );
  }
}

export default App;