import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


function Whatever(props){
  return (<div>{props.name}</div>)
}
class App extends Component {

  constructor() {
    super();

    this.state = {
      name: 'World',
    }
  }

  handleChange(value) {
    this.setState({ 
      name:value 
    });
  }

  render() {
    return (
      <div>
        <div className="App">
          Hello {this.state.name} 
          React Component Call<Whatever name={this.state.name}/>
          Function Call {Whatever(this.state)}
        </div>
        
        <div>
          <input value={this.state.name} 
            onChange={({ target }) => this.handleChange(target.value)}/>
        </div>
      </div>
    );
  }
}
export default App;
