import React, { Component } from 'react';
import './App.css';
import Nav from './comps/nav/Nav';
import SearchBox from './comps/searchbox/SearchBox';
import Default from './comps/default/Default';
import Card from './comps/card/Card';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

// HANDLE SEARCH INPUT VALUE
  handleSearchChange(event) {
    this.setState({ query: event.target.value });
  }

// HANDLE FORM SUBMIT EVENT
  handleSubmit(event) {
    event.preventDefault();
    console.log('searchinggg');
  }

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

        <Default />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default App;
