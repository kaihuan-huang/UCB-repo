import React from 'react';

// TODO: Create a `name` variable
const name = 'kaihuan';
const thoughts = 'My thought is good';
const nameLen = name.length;
console.log(nameLen);
console.log(thoughts);

// TODO: Create a `thoughts` variable
// This should be a string regarding what you think of React

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          {/* TODO: Add your name variable */}
          <h1>Hi! My name is {name}</h1>
          {/* TODO: Add your number of letters variable */}
          <h2>My name has {nameLen} letters</h2>
          {/* TODO: Add your thoughts variable */}
          <h2>I think React {thoughts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;