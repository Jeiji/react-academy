import React, { Component } from 'react';
import logo from './logo.svg';
import UserInput from './UserInput.js'
import TaskItem from './TaskItem.js'
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      show: true,
    };
  }

  pushTask(data){
    let newTasks = this.state.tasks.slice();
    newTasks.push(data);
    this.setState({tasks:newTasks})
  }

  show_hide(){
    // alert(this.state.show);
    this.state.show = !this.state.show;
    this.setState({})

  }

  renderTasks() {

    let taskList = [];
    for (let i = 0; i < this.state.tasks.length; i++) {
      taskList.push(
        <TaskItem title={this.state.tasks[i]} />
      )
    }
    return this.state.show ? taskList : '';
  }

  render() {
    return (
      <div className="App">
        <UserInput show_hide={()=>{this.show_hide()}} handleSubmit={(data)=>{this.pushTask(data);}} />
        {this.renderTasks()}
      </div>
    );
  }
}

export default App;
