####[Section 2](#section-2)

####[Section 3](#section-3)

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

* 