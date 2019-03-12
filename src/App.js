import React, { Component } from 'react';
import './App.css';
import { Button, List, ListItem } from './Components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from './actions/todoActions';
import PropTypes from 'prop-types';



class App extends Component {
  render() {
    const todos = this.props.todos.map(x =>
      <ListItem key={x.id}>{x.title}</ListItem>
      )
      return (
        <div className="App">
        <Button onClick={e => this.props.todoActions.fetchTodos()}>Load</Button>
        <List>
          {todos}
        </List>
      </div>
    );
  }
}

App.propTypes = {
  todoActions: PropTypes.object,
  todos: PropTypes.array
}

function mapStateToProps(state){
  // hydrate component props from application state
  return {
    todos: state.todo
  }
}

function mapDispatchToProps(dispatch){
  // ensure action shave access to Redux's dispatch
  return {
    todoActions: bindActionCreators(todoActions, dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
