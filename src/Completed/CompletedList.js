import React, { useState, useEffect } from "react";
import UserManager from "../modules/UserManager";
import ReadManager from "../modules/ReadManager"
import CompletedCard from "./CompletedCard";

//use props to pass in setUser from Login/AppViews
const CompletedList = props => {
  const [completedRMs, setCompletedRMs] = useState([]);

//The function argument to useEffect tells React to call the getItem() function (that will fetch data from our API). The empty array argument tells React to call the function on the first render of the component.
  useEffect(() => {
    const userId = sessionStorage.getItem("credentials");
    UserManager.getCompleted(userId).then(CompletedReads => {
      setCompletedRMs(CompletedReads);
    });
  }, []);

  //The component where state lives is the only place state can change
  //every time setCRMS is invoked, it changes state of the CL component and forces react to re-render it
  const deleteCompletedRead = id => {
    ReadManager.delete(id)
      .then(() => UserManager.getCompleted().then(setCompletedRMs));
  };

  //Pass the deleteCompletedRead function to the child component (CCard)
  //This gives the child component the ability to invoke the function found on the parent (CList)
  //CC receives two props: r
  return (
    <div>
      {completedRMs.map(readObject => (
        <CompletedCard key={readObject.id} readObject={readObject} deleteCompletedRead={deleteCompletedRead} {...props} />
      ))}
    </div>
  );
};

export default CompletedList;
