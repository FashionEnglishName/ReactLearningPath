1. [Section 2](#section-2)

## Section 2 

ES6 has some features that aren't widely used. By using compiler like **Babel**, we can translate the next generation js code to ES5 code, which is supported by most of popular browsers.

New features included:

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