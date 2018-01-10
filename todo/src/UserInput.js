import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class UserInput extends Component {



  constructor(props) {
    super(props);
    this.onInput = this.onInput.bind(this);

    this.state = {
      title: '',
      input:''
    };
  }

  onInput(e){
    this.setState({input:e.target.value})
  }

  onSubmit(e){
    this.props.handleSubmit(this.state.input);
    this.state.input = ''
    e.preventDefault()
  }

  render() {
    return (
      <div className="UserInput">
        <form onChange={this.onInput} onSubmit={(e)=>{this.onSubmit(e);}}>          
          <div onClick={this.props.show_hide} class="show-hide-btn">V</div>
          <input type="text" value={this.state.input} name="user-input" placeholder="Add a new task!"></input>
          <input class="invisibutton" type="submit" />
        </form>
      </div>
    );
  }
}

export default UserInput;
