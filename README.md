* [Section 2](#section-2)

* [Section 3](#section-3)

## Section 2 

ES6 has some features that aren't widely used. By using compiler like **Babel**, we can translate the next generation js code to ES5 code, which is supported by most of popular browsers.

New features included:

* let & const

* import and export. 

  ```javascript
  export default ...; // default
  export const someData = ...; // named
  
  import someName from 'somePath'; // default import
  import {someData} from 'somePath'; // named import
  import * as someOtherName from 'somePath'; // import all; alias
  ```

- arrow function

  ```javascript
  const func = (paremeter1, parameter2) => {
      console.log("I'm an arrow function.");
  }
  ```

- class

  ```javascript
  class Person {
      name = 'Miller Dong';
      printName = () => {
  		console.log(this.name);
      }
  }
  ```

- spread and rest operation (...)

  ```javascript
  const filter = (...args) => {
      args.filter(el => el === 1);
  }
  
  const array = [1,2,3];
  const newArray = [...array, 4];
  
  const person = {
      name: "Miller Dong",
  }
  
  const newPerson = {
      ...person,
      age: 22,
  }
  ```

* destructuring

  ~~~javascript
  const numbers = [1,2,3];
  [number1, , number3] = numbers;
  console.log(number1);
  
  const dog = {
      name: "foo",
      age: 2,
  }
  {name} = dog;
  console.log(name); // foo
  console.log(age);  // undefined
  ~~~

Below are not new features, but some recalls to important things.

* number, string, and string* are primitive type, whereas *object and array* are reference type, they have different performance when copying.

  * using **spread operation** to make a deep copy

* map()

  ~~~javascript
  const numbers = [1,2,3];
  
  const newNumbers = numbers.map((num) => {
      return num * 2;
  });
  
  console.log(newNumbers); // 2, 4, 6
  ~~~

  

## Section 3

* initialize react project

  ```shell
  sudo npm install create-react-app -g
  
  create-react-app folder-name
  cd folder-name
  npm start
  ```

* render() compile *jsx* code to *html*. Jsx looks like html, but it's not.

  ~~~javascript
  render() {
      return (
      	<div className="App">
  			<h1>Hi, I'm a React App'</h1>
          </div>
      );
      // above is equivelent to below
      return React.createElement('div', {className="App"},
                                React.createElement('h1', null, "Hi, I'm a React App"));
  }
  ~~~

* To add css class: class => className

* return should have one root

* React is all about **components**

  * A typical React app could be depicted as a **component tree** - having one root component ("App") and then an potentially infinite amount of nested child components

  * In simplest form, a component is a js function returning jsx

  * Below is how we create a component called Person.js

    ~~~javascript
    import React from 'react';
    
    const person = () => {
        return (
        	<p>I'm a person!</p>
        );
    };
    
    export default Person;
    
    /*------------ OR ------------*/
    import React, {Component} from 'react';
    
    class Person extends Component{
        render() {
            return (
            	<p>I am a person!</p>
            );
        }
    }
    
    export default Person;
    ~~~

    In the App.js, you can use Person by

    ~~~javascript
    import Person from "SomePath/Person.js";
    
    // in the jsx, add
    <Person /> // as the name you choose when you import
    ~~~

* To use js function in js code, use curly braces to wrap it.

  ~~~javascript
  return <p> I am a person. My age is {Math.floor(Math.random())}. </p>
  ~~~

* Use props

  ~~~javascript
  // in App.js JSX
  <Person name="Miller" age=28>Hobby is basketball</Person>
  
  
  import React from 'react';
  
  const person = (props) => {
      return (
          <div>
          	<p>I am a person! Name is {props.name}. Age is {props.age}.</p>
  			<p>{props.children}</p>
          </div>
      );
  };
  
  export default Person;
  
  /*------------ OR ------------*/
  import React, {Component} from 'react';
  
  class Person extends Component{
      render() {
          return (
  	    <div>
          	<p>I am a person! Name is {props.name}. Age is {props.age}.</p>
  			<p>{props.children}</p>
          </div>
          );
      }
  }
  
  export default Person;
  ~~~

* Special property --``state`` can only be used inside those class based component which extends Component. (In newer React after version 16.8, function based components can also use state, using hook).

  * Use state with care. More state in different components, more hard to manipulate and manage. If allowed, use more functional components as possible

  * ~~~javascript
    state = {
        persons: [
        	{name: "Miller", age: 22},
        	{name: "Flora", age: 18},
    	]
    };
    
    <Person name={this.state.person[0].name} />
    <Person name={this.state.person[1].name} />
    ~~~

  * If the state changes, it *leads react to re-render/update the DOM*. Props changes will also lead to that.

  * Don't change state directly by =. Instead, use ``setState()``, which is extended from Component. 

  * ```javascript
    state = {
          person : [
             {name: "Miller", age: 22},
        	 {name: "Flora", age: 18},
          ],
          someOther: 'otherThings',
    };
    
    switchNameHandler = () => {
          this.setState(
              {
                  person : [
                      {name : "aaa", age : 22},
                      {name : "bbb", age : 19},
                  ],
                  // someOther will not be touched
              }
          )
    };
    
    /* don't do this.switchNameHandler(), it leads React to execute this function at    ** once.
    ** Instead, just send a reference.
    */
    <button onClick={this.switchNameHandler}></button> 
    ```

  * More stateless dumb components, less stateful components.

  * How do function based components use state (16.8 or newer) *Not recommended way*

    1. Change import. Instead importing `Component`, import `useState` from 'react'.
    2. Call `useState()` inside your function(based component). It returns an array with exactly two elements. The first element is the state object, and the second one is a function which allow us to change state object.
    3. That function you get from return value to set state, is not able to merge what you change to the old state. Namely, you **overwrite** the state. Compare with setState in class based component.
    4. Use many times that function to separate each property in state object.

* Use the same way we pass properties, we can pass functions between components

  * To pass parameters, we need to use ``bind()``.

  * ```javascript
    switchNameHandler = (newName) => {
        this.setState(
            {
                person: [
                    {name: newName, age: 20},
                   	...
                ]
            }
        );
    };
            
    render() {
        return (
          <div className="App">
              <Person 
            	name={this.state.person[0].name} 
        		age={this.state.person[0].age}
    		  />
              <Person 
    			name={this.state.person[1].name} 
                age={this.state.person[1].age} 
                click={this.switchNameHandler.bind(this, "Dong")}
                // can change this in bind to null
              />
              <Person 
    			name={this.state.person[2].name} 
                age={this.state.person[2].age}
              />
          </div>
        );
      }
    ```

* Two-way binding

  * Make sure you have both ``onChanged`` and `value` set in the input field. React will report an error, that makes no sense. Ignore it.

  ```javascript
  // App.js
    nameChangeHandler = (event) => {
        this.setState(
            {
                person : [
                    {name : "max", age : 28},
                    {name : event.target.value, age : 29},
                    {name : "average", age : 30}
                ]
            }
        )
    };
  
  <Person 
  	name={this.state.person[1].name}
      age={this.state.person[1].age}
      click={this.switchNameHandler.bind(this, "Dong")}
      change = {this.nameChangeHandler}
  />
          
  // Person.js
  const person = (prop) => {
      return (
          <div onClick={prop.click}>
              <p>I am a person! I'm {prop.age} years old. My name is {prop.name} </p>
              <p>{prop.children}</p>
              <input type="text" onChange={prop.change} value={prop.name} />
          </div>
      )
  };
  
  
  ```

  * ***Question***

    Say, I want to give every name two way binding, how can I do that? Below doesn't work.

    ```javascript
     nameChangeHandler = (event) => {
          this.setState(
              {
                  person : [
                      {name : event.target.value, age : 28},
                      {name : event.target.value, age : 29},
                      {name : event.target.value, age : 30}
                  ]
              }
          )
      };
    
    // If I type in one input field, all names are changed. 
    
    ```

    

* Use import to include css

* ```javascript
  import 'Person.css';
  ```

* inline stylesheet

* ```javascript
  render() {
      const style = {
      	background: 1px solid white;
  	};
  
  	return (
          <div>
              <p style={style}>some text</p>
          </div>
  	);
  }
  ```