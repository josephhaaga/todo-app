import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: pink;
  color: white;
  border: 2px solid white;
`

const List = styled.ul`
  list-style-type: none;
  margin: 0;
`

const ListItem = styled.li`
  color: dodgerblue;
  padding-bottom: 1rem;
`

class Window extends Component {
  constructor(props){
    super(props)
    this.state = {todos: []}
  }
  loadData () {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(x => x.json())
      .then(x => this.setState({todos: x}))
      .catch(er => console.log(er))
  };
  render(){
    const todos = this.state.todos.map(x =>
      <ListItem key={x.id}>{x.title}</ListItem>
    )
    return (
      <div>

        <Button onClick={e => this.loadData()}>Load</Button>
        <List>
          {todos}
        </List>

      </div>
    )
  }
}
class App extends Component {
  render() {

    return (
      <div className="App">
        <Window />
      </div>
    );
  }
}

export default App;
