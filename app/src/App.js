import React, { Component } from 'react';
import PassengerList  from './Components/PassengerList/PassengerList';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css';
import axios from 'axios';


class App extends Component {
  state ={
    data: []
  }

  //Fetch data
  componentWillMount() {
    axios.get('/passenger')
    .then(response => {
      console.log(response.data)
      this.setState({
        data: response.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <PassengerList passengerData={this.state.data}/>
        <SearchBar passengerData={this.state.data}/>
      </div>
    );
  }
}

export default App;
