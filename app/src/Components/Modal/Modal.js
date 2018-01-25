import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {

    render() {
        return (
            <div className ="outer-area" style={{display: this.props.isModalOpen ? 'block' : 'none'}}>
                <div className="over-lay">
                    <div className="modal">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}