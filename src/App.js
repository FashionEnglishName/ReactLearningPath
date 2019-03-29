import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
      person : [
          {name : "max", age : 28},
          {name : "min", age : 29},
          {name : "average", age : 30}
      ]
  }

  switchNameHandler = () => {
      this.setState(
          {
              person : [
                  {name : "bbb", age : 28},
                  {name : "ccc", age : 29},
                  {name : "ddd", age : 30}
              ]
          }
      )
    }

  render() {
    return (
      <div className="App">
        <h1>hello world!</h1>
          <button onClick={this.switchNameHandler}>re-render</button>
          <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
          <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
          <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
      </div>
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'hello world!'))
    );
  }
}

export default App;
