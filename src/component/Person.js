import React from 'react';
let Person =(props)=>{
    return(
      <div>
        <h3>Name: {props.name} Age: {props.age} </h3>
      </div>
    );
    //return React.createElement("div", null, React.createElement("h1", null, "I am Person Component"));
  }
  export default Person;