import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class UserInput extends Component {
  render() {
    return (
      <div className="UserInput">
        <form>
          <input type="text" name="user-input" placeholder="Add a new task!"></input>
          <input class="invisibutton" type="submit" />
        </form>
      </div>
    );
  }
}

export default UserInput;
