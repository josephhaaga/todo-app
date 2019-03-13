import React, { Component } from 'react';
import './App.css';
import { List, ListItem } from './Components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import * as todoActions from './actions/todoActions';
import * as eventActions from './actions/eventActions';


const styles = {
  root: {
    flexGrow: 1,
  },
};




class App extends Component {
  render() {
    console.log(this.props)
    const todos = this.props.todos.map(x =>
      <ListItem key={x.id}>{x.title}</ListItem>
      )

    const events = this.props.events.map((x, idx) => 
      <ListItem key={idx}>{x.celebrations[0].title}</ListItem>
      )
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={16}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" color="inherit">
              Todos
            </Typography>
            <Button onClick={e => this.props.todoActions.fetchTodos()}>Load</Button>
            <Button onClick={e => this.props.todoActions.clearTodos()}>Clear</Button>
            <List>
              {todos}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" color="inherit">
              Calendar
            </Typography>
            <Button onClick={e => this.props.eventActions.fetchEvents()}>Load</Button>
            <Button onClick={e => this.props.eventActions.clearEvents()}>Clear</Button>
            <List>
              {events}
            </List>
          </Grid>
        </Grid>
          
      </div>
    );
  }
}

App.propTypes = {
  todoActions: PropTypes.object,
  todos: PropTypes.array,
  eventActions: PropTypes.object,
  events: PropTypes.array,
}

function mapStateToProps(state){
  // hydrate component props from application state
  return {
    todos: state.todo,
    events: state.event
  }
}

function mapDispatchToProps(dispatch){
  // ensure actions have access to Redux's dispatch
  return {
    todoActions: bindActionCreators(todoActions, dispatch),
    eventActions: bindActionCreators(eventActions, dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
