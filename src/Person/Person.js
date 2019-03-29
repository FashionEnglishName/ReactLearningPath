import React from "react";

const person = (Prop) => {
    return (
        <div>
            <p>I am a person! I'm {Prop.age} years old. My name is {Prop.name} </p>
            {Prop.children}
        </div>
    )
}

export default person;