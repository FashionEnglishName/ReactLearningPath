class Human {
    // constructor() {
    //     this.gender = "male";
    // }
    //
    // printGender() {
    //     console.log(this.gender);
    // }

    gender = "male";

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human{
    // constructor() {
    //     super();
    //     this.name = "Miller";
    // }
    //
    // printMyName() {
    //     console.log(this.name);
    //     // console.log(name) will show nothing
    // }

    name = "Miller";

    printMyName = () => {
        console.log(this.name);
    }
}


const person = new Person();
person.printMyName();
console.log(person.name);
person.printGender();

person.gender = "female";
console.log(person.gender);
person.printGender();



