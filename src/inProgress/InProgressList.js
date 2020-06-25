import React, { useState, useEffect } from "react";
import UserManager from "../modules/UserManager";
import ReadManager from "../modules/ReadManager"
import InProgressCard from "./InProgressCard";

//use props to pass in setUser from Login/AppViews
//State is how react knows what to show on the DOM
const InProgressList = props => {
  const [IPRMs, setIPRMs] = useState([]);
  const userId = sessionStorage.getItem("credentials");

  //1) Working on this to get logged in UserId
  //gets userId

  //The function argument to useEffect tells React to call the getItem() function (that will fetch data from our API). The empty array argument tells React to call the function on the first render of the component.
  //.then is a function that is being executed, .getInProgress is as well. they are methods on promises.
  //when the promise resolves, call .then
  //anonymous functions are used because our code will call it for us
  //functions only run when the function is invoked (executed)
  useEffect(() => {
    ReadManager.getInProgress(userId).then(IPReads => {
      setIPRMs(IPReads);
    });
  }, []);
  //doesn't have values so it will only run once
  //second argument of the dependency array (empty array) tells useEffect when to run it, when the values change. useEffect knows to only call the first argument once
  //it knows to call the argument when the page runs, aka the contents of the function will be called 

  //named so I can execute deleteIPRead when the function is invoked
  const deleteIPRead = id => {
    ReadManager.delete(id)
      .then(() => ReadManager.getInProgress(userId).then(setIPRMs));
  };

  return (
    <div>
      {/* passing props to IPCard so we can let it know what readObject is, need to tell it things so it knows what they mean on the card ex: delete. ...props lets you use props.history etc. 
      react will automatically do this every time IPRMs changes
      Map is a loop that loops over the array of objects and for every obj in the array it creates the InProgressCard  */}
      {IPRMs.map((readObject) => (
        <InProgressCard
        //key is for when u need to make multiples
        //these assignments get turned into key/value pairs on an object
          foo="hello"
          // {} brackets asks code to evaluate js obj and return that value
          key={readObject.id}
          readObject={readObject}
          deleteIPRead={deleteIPRead}
          {...props}
        />
      ))}
    </div>
  );
};

export default InProgressList;
