import React, { Component } from 'react';
import {Form, Container,Row, Col, Button} from 'react-bootstrap'
import './TodoForm.css'
import {BiPlusMedical} from "react-icons/bi";

class TodoForm extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            value: ''
        }
    }

    changeValue = newValue => this.setState({value: newValue})

    submitHandler = e => {
        e.preventDefault()
        this.props.setNewInput(this.state.value)
        this.setState({value: ''})
    }

    selectHandler = e => this.props.setStausList(e.target.value)

    render() {
        return (
            <Container className='my-5'>
                <Row >
                    <Col>
                        <Form className='d-flex align-items-center justify-content-between form-media'>
                            <div className='w-100 py-2 px-3 bg-white d-flex align-items-center'>
                                <Form.Group className="w-100" controlId="formInputTodo">
                                    <Form.Control 
                                        className='border-0 outline-0 p-0 newInput'
                                        value={this.state.value} 
                                        type="text" 
                                        placeholder="کار جدید ..." 
                                        onChange={e => this.changeValue(e.target.value)}/>
                                </Form.Group>
                                <Button 
                                    className='d-flex align-items-center p-2 addBtn'
                                    variant="primary" 
                                    type="submit" 
                                    onClick={e => this.submitHandler(e)}>
                                    <BiPlusMedical />
                                </Button>
                            </div>
                            <Form.Select 
                                aria-label="Default select example"
                                className='filter-media border-0 outline-0'
                                onChange={e => this.selectHandler(e)}>
                                <option value="all">همه</option>
                                <option value="active">در جریان</option>
                                <option value="completed">پایان یافته</option>
                            </Form.Select>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TodoForm;
