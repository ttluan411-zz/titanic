import React, { Component } from 'react';
import './PassengerList.css';

const Row = ({id, name, sex , age, survived, }) => (
    <div className="row">
      <div>{id}</div>
      <div>{name}</div>
      <div>{sex}</div>
      <div>{age}</div>
      <div>{survived ? 'Yes' : 'No'}</div>
      
    </div>
  );


export default class Table extends Component {
    constructor(props) {
      super(props);
      
      this.compareBy.bind(this);
      this.sortBy.bind(this);
    }


    
    compareBy(key) {
      return function (a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      };
    }
   
    sortBy(key) {
      let arrayCopy = [...this.props.passengerData];
      arrayCopy.sort(this.compareBy(key));
      this.setState({data: arrayCopy});
    }
      
    render() {
      const rows = this.props.passengerData.map((rowData) => <Row {...rowData} />);
      return (
        <div className="table">
          <div className="header">
            <div onClick={() => this.sortBy('id')} >ID</div>
            <div onClick={() => this.sortBy('name')}>NAME</div>
            <div onClick={() => this.sortBy('sex')}>SEX</div>
            <div onClick={() => this.sortBy('age')}>AGE</div>
            <div onClick={() => this.sortBy('survived')}>SURVIVED</div>
          </div>
          <div className="body">
            {rows}
          </div>
        </div>
      );
      
    }
}