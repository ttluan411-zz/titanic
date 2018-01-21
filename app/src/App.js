import React, { Component } from 'react';
import PassengerList  from './Components/PassengerList/PassengerList';
import './App.css';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';


class App extends Component {
  state ={
    data: [],
    filteredList: [],
    searchString: ''
  }

  //Fetch data
  componentWillMount() {
    axios.get('/passenger')
    .then(response => {
      console.log(response.data)
      this.setState({
        data: response.data
      })
      console.log(this.state)
    })
    .catch(err => console.log(err))
  }

  filterList = (value) => {
    let searchValue = value.toLowerCase();
    let filteredList = this.state.data;

    filteredList = filteredList.filter(item => {
      return item.name.toLowerCase().search(searchValue) !== -1;
    })
    this.setState({
      filteredList: filteredList,
      searchString: value
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar value={this.state.searchString} update={this.filterList} />
        <PassengerList passengerData={this.state.filteredList}/>
      </div>
    );
  }
}

export default App;
