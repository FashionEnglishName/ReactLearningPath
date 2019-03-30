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