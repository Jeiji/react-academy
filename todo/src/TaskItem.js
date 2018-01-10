import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TaskItem extends Component {
  constructor(props){
    super(props);

    this.check = this.check.bind(this);
  }

  checked = false;
  title = '';
  check(){
    this.checked = this.checked? false : true;
    this.setState({});
  }
  render() {
    return (
      <div className="TaskItem">
          <div><label onClick={this.check}><input type="checkbox" checked={this.checked}></input>{this.props.title}</label></div>
      </div>
    );
  }
}

export default TaskItem;
