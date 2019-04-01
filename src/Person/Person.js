import React from "react";

const person = (prop) => {
    return (
        <div onClick={prop.click}>
            <p>I am a person! I'm {prop.age} years old. My name is {prop.name} </p>
            <p>{prop.children}</p>
            <input type="text" onChange={prop.change} value={prop.name} />
        </div>
    )
};

export default person;
