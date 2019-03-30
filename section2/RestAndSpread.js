const filter = (...args) => {
    args.filter(el => el === 1);
};


const array = [1,2,3];
const newArray = [...array, 4];

const person1 = {
    name: "Miller Dong",
};

const newPerson = {
    ...person1,
    age: 22,
};

console.log(array);
console.log(newArray);

console.log(filter(array));

console.log(newPerson);
//
// const numbers = [1,2,3];
// [number1, , number3] = numbers;
// console.log(number1);

// const dog = {
//     name: "foo",
//     age: 2,
// }
// {name} = dog;
// console.log(name); // foo
// console.log(age);  // undefined

const numbers = [1,2,3];

const newNumbers = numbers.map((num) => {
    return num * 2;
});

console.log(newNumbers); // 2, 4, 6