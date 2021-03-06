import React, { useState, useEffect } from "react";
import ReadManager from "../modules/ReadManager"
import CompletedCard from "./CompletedCard";

//parent component for all my Completed stuff
//use props to pass in setUser from Login/AppViews
const CompletedList = props => {
  const [completedRMs, setCompletedRMs] = useState([]);
  const userId = sessionStorage.getItem("credentials");

//The function argument to useEffect tells React to call the getItem() function (that will fetch data from our API). The empty array argument tells React to call the function on the first render of the component.
  useEffect(() => {
    ReadManager.getCompleted(userId).then(CompletedReads => {
      setCompletedRMs(CompletedReads);
    });
  }, []);

  //The component where state lives is the only place state can change
  //every time setCRMS is invoked, it changes state of the CL component and forces react to re-render it
  //deletes CR object
  const deleteCompletedRead = id => {
    ReadManager.delete(id)
      .then(() => ReadManager.getCompleted(userId).then(setCompletedRMs));
  };

  //Pass the deleteCompletedRead function to the child component (CCard)
  //This gives the child component the ability to invoke the function found on the parent (CList)
  //CC receives two props: r
  //Completed Card utilizes this information in order to use buttons/paths
  return (
    <div>
      {completedRMs.map(readObject => (
        <CompletedCard key={readObject.id} readObject={readObject} deleteCompletedRead={deleteCompletedRead} {...props} />
      ))}
    </div>
  );
};

export default CompletedList;
