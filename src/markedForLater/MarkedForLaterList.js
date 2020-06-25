import React, { useState, useEffect } from "react";
import UserManager from "../modules/UserManager";
import ReadManager from "../modules/ReadManager"
import MarkedForLaterCard from "./MarkedForLaterCard";

//use props to pass in setUser from Login/AppViews
const MarkedForLaterList = props => {
  const [markedRMs, setMarkedRMs] = useState([]);
  const userId = sessionStorage.getItem("credentials");

  //The function argument to useEffect tells React to call the getItem() function (that will fetch data from our API). 
  //The empty array argument tells React to call the function on the first render of the component.
  useEffect(() => {
    ReadManager.getMarkedFL(userId).then(MFLRMs => {
      setMarkedRMs(MFLRMs);
    });
  }, []);

  const deleteMFLRead = id => {
    ReadManager.delete(id)
      .then(() => ReadManager.getMarkedFL().then(setMarkedRMs));
  };

  return (
    <div>
      {/* passing props to IPCard so we can let it know what readObject is, need to tell it things so it knows what they mean on the card ex: delete. ...props lets you use props.history etc.  */}
      {markedRMs.map(readObject => (
        <MarkedForLaterCard
          key={readObject.id}
          readObject={readObject}
          deleteMFLRead={deleteMFLRead}
          {...props}
        />
      ))}
    </div>
  );
};

export default MarkedForLaterList;
