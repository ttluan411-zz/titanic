import React, { Component } from 'react';
import axios from 'axios';
import './PassengerList.css';
import Modal from '../Modal/Modal';



export default class Table extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isModalOpen: false,
      selectedId: null
    }
  }

  openModal = (id) => {
   console.log(id)
   this.setState({
     isModalOpen: true,
     selectedId: id
    })
    console.log(this.state)
  };

  closeModal = () =>{
   this.setState({
     isModalOpen: false,
   })
   console.log(this.state)
   
  } 
  
  
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
              onClick={() => this.openModal(id)}
            >Add Note</button>
          </div>
        </div>
      );
      const rows = this.props.passengerData.map((rowData, i) => <Row {...rowData} key={i}/>);

      return (
          <div className="table">
            <div className="header">
              <div>ID</div>
              <div>NAME</div>
              <div>SEX</div>
              <div>AGE</div>
              <div>TICKET FARE</div>
              <div>TICKET NUMBER</div>
              <div>TICKET TYPE</div>
              <div>SURVIVED</div>
              <div>NOTE</div>
            </div>
            <div className="body">
              {rows}
            </div>
            <Modal 
              isModalOpen = {this.state.isModalOpen}
              >
              <button className="close-button" onClick ={this.closeModal}>Close</button>
              </Modal>
          </div>
      );
      
    }
}