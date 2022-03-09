import React, { Component } from 'react';
import {Form, ListGroup, Button} from 'react-bootstrap'
import './TodoItem.css'
import {FaCheck, FaTrash} from "react-icons/fa";

class TodoItem extends Component {
    render() {
        let completeClass = this.props.completeValue ? 'completed' : 'unCompleted'
        return (
            <div className='d-flex mb-2 bg-white py-2 px-3 align-items-center'>
                <ListGroup.Item as="li" className='p-0 border-0 w-100'>
                    <Form.Control 
                        className={`border-0 outline-0 p-0 bg-white todoInput
                        ${completeClass}`}
                        value={this.props.text}
                        type="text" 
                        onChange={e => this.props.changeText(e.target.value)}/>
                </ListGroup.Item>
                <div className='btns d-flex'>
                    <Button 
                        className='completedBtn ms-2 d-flex align-items-center p-2 border-0' 
                        onClick = {this.props.complete}>
                    <FaCheck /></Button>
                    <Button 
                        className='deleteBtn d-flex align-items-center p-2 border-0' 
                        onClick = {this.props.delete}>
                    <FaTrash /></Button>
                </div>
            </div>
        );
    }
}

export default TodoItem;
