import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Todo from './components/todo-list';
import Data from './tododata'
import TodoMaping from './components/todo-list'
 
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const todotasks = Data.map(task=> <TodoMaping  key ={task.id} description={task.description} deadline={task.deadline} />)
    return (
       
        
       
     
        <div>
        {/* <ul>
          <li><Todo todoItem='Get out of bed, Wed Sep 13 2017'/></li>
          <li><Todo todoItem='Brush teeth, Thu Sep 14 2017'/></li>
          <li><Todo todoItem='Eat breakfast, Fri Sep 15 2017'/></li>
        </ul> */}

          {todotasks}


        </div>
      
    );
  }
}

export default App;
