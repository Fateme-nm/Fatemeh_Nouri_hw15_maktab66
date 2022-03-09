import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css'
import {Container, Row, Col, ListGroup, Button} from 'react-bootstrap'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoList : []
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.newTodoObj !== prevProps.newTodoObj){
            if (this.state.todoList.find(todo => todo.text === this.props.newTodoObj.text)) {
                alert('The task you entered, already exists!')
            }
            else {
                this.setState({todoList: [...this.state.todoList, this.props.newTodoObj]})
            }
        }
    }

    completeTodo = todoID => {
        let todoList_copy = this.state.todoList
        this.setState({todoList: todoList_copy.map(todo => {
            return todo.id === todoID ? {...todo,completed: !todo.completed} : todo
        })})
    }

    deleteTodo = todoID => {
        let newTodoList = this.state.todoList.filter(todo => todo.id !== todoID)
        this.setState({todoList: newTodoList})
    }

    changeTodoTxt = (todoID, newTitle) => {
        let todoList_copy = this.state.todoList
        this.setState({todoList: todoList_copy.map(todo => {
            return todo.id === todoID ? {...todo,text: newTitle} : todo
        })})
    }

    filterHadler = () => {
        if (this.props.filter === 'all') {
            return this.state.todoList
        }
        let completed = this.props.filter === 'completed' ? true : false
        let todoList_copy = this.state.todoList
        return this.state.todoList.filter(todo => todo.completed === completed)
    }

    render() {
        let list = this.filterHadler()
        return (
            <Container>
                <Row>
                    <Col>
                        <ListGroup as="ul" className='p-0'>{list.map((todo, i) => {
                            return (
                                <TodoItem 
                                    text = {todo.text} 
                                    number = {i + 1}
                                    completeValue = {todo.completed}
                                    complete = {() => this.completeTodo(todo.id)}
                                    delete = {() => this.deleteTodo(todo.id)}
                                    edite = {() => this.editeTodo(todo.id)}
                                    changeText = {text => this.changeTodoTxt(todo.id, text)}
                                    id = {todo.id}
                                    key = {todo.id} />
                            )
                        })}</ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button 
                            className='clear p-3 text-center text-white w-100 border-0'
                            onClick={() => this.setState({todoList: []})}>
                            پاک کردن همه</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TodoList;
