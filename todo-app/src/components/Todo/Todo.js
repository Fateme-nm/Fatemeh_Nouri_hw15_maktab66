import React, { Component } from 'react';
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'
import {Container, Row, Col} from 'react-bootstrap'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newInput : '',
            newTodoObj : {},
            filter : 'all'
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.newInput !== prevState.newInput 
            && this.state.newInput.length !== 0) { 
            this.createTodoObj(this.state.newInput, () => this.setState({newInput: ''}))
        }
    }

    createTodoObj = (newTodo, setEmpty) => {
        let todoObj = {
            id: Math.random() * 1000, 
            text: newTodo, 
            completed: false,
        }
        this.setState({newTodoObj: todoObj})
        setEmpty()
    }

    render() {
        return (
            <Container className='pt-5' fluid>
                <Row>
                    <Col lg={9} className='mx-auto'>
                        <TodoForm 
                            setNewInput = {input => this.setState({newInput: input})}
                            setStausList = {filter => this.setState({filter: filter})}/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={9} className='mx-auto'>
                        <TodoList 
                            newTodoObj = {this.state.newTodoObj}
                            filter = {this.state.filter}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Todo;
