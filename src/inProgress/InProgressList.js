import React, { useState, useEffect } from "react";
import UserManager from "../modules/UserManager";
import ReadManager from "../modules/ReadManager"
import InProgressCard from "./InProgressCard";

//use props to pass in setUser from Login/AppViews
const InProgressList = props => {
  const [IPRMs, setIPRMs] = useState([]);
  const userId = sessionStorage.getItem("credentials");

  //1) Working on this to get logged in UserId
  //gets userId

  //The function argument to useEffect tells React to call the getItem() function (that will fetch data from our API). The empty array argument tells React to call the function on the first render of the component.
  useEffect(() => {
    ReadManager.getInProgress(userId).then(IPReads => {
      setIPRMs(IPReads);
    });
  }, []);

  const deleteIPRead = id => {
    ReadManager.delete(id)
      .then(() => ReadManager.getInProgress(userId).then(setIPRMs));
  };

  return (
    <div>
      {/* passing props to IPCard so we can let it know what readObject is, need to tell it things so it knows what they mean on the card ex: delete. ...props lets you use props.history etc.  */}
      {IPRMs.map(readObject => (
        <InProgressCard
        //key is for when u need to make multiples
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
