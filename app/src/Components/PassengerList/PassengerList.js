import React, { Component } from 'react';
import axios from 'axios';
import './PassengerList.css';
import Modal from '../Modal/Modal';



export default class Table extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isModalOpen: false,
      selectedId: null,
      inputValue: '',
      passengerNote: []
    }
  }

  openModal = (id) => {
   this.setState({
     isModalOpen: true,
     selectedId: id
    })
    //FETCH PASSENGER'S NOTES BY ID
    axios.get(`/passenger/${id}/note`)
      .then(res => {
        this.setState({
          passengerNote: res.data
        })
      })
      .catch(err => console.log(err))
  };

  closeModal = () =>{
   this.setState({
     isModalOpen: false,
   })
   console.log(this.state)
   axios.post(`/passenger/${this.state.selectedId}/note`, 
      {message:this.state.inputValue}
    )
    .then(response => {
      console.log(response)
      this.setState({inputValue:''})
    })
    .catch(error => {
      console.log(error)
    })
  }; 
  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  };
  
  
  render() {
    const Row = ({id, name, sex , age, ticket_fare, ticket_number, ticket_type, survived }) => (
        <div className="row">
          <div>{id}</div>
          <div>{name}</div>
          <div>{sex}</div>
          <div>{age}</div>
          <div>{ticket_fare}</div>
          <div>{ticket_number}</div>
          <div>{ticket_type}</div>
          <div>{survived ? 'Yes' : 'No'}</div>
          <div>
            <button
              className="view-note-button"
              onClick={() => this.openModal(id)}
            >View Notes</button>
          </div>
        </div>
      );
      const rows = this.props.passengerData.map((rowData, i) => <Row {...rowData} key={i}/>);
      const notes = this.state.passengerNote.map(note => <li className="note-list">{note.message}</li>)
      return (
          <div className="table">
            <div className="header">
              <div>ID</div>
              <div>NAME</div>
              <div>SEX</div>
              <div>AGE</div>
              <div>FARE</div>
              <div>TICKET</div>
              <div>TYPE</div>
              <div>SURVIVED</div>
              <div>NOTE</div>
            </div>
            <div className="body">
              {rows}
            </div>
            <Modal 
              isModalOpen = {this.state.isModalOpen}
              >
              <input 
                className="note-input"
                type="text"
                placeholder="Type note here..."
                value={this.state.inputValue}
                onChange={this.handleInputChange}
              />
              <button 
                className="add-note-button" 
                onClick ={this.closeModal}
              >
              Add Note
              </button>
              <ul>
              {this.state.passengerNote !== [] ? notes : <span>loading</span>}
              </ul>
              </Modal>
          </div>
      );
      
    }
}