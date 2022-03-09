import React, {Component} from 'react'
import Todo from './components/Todo/Todo';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
class App extends Component {
  render() {
    return (
      <Container>
        <Todo />
      </Container>
    )
  }
}

export default App;
