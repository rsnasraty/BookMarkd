import React, { useState, useEffect } from "react";
import UserManager from "../modules/UserManager";
import MarkedForLaterCard from "./MarkedForLaterCard";

//use props to pass in setUser from Login/AppViews
const MarkedForLaterList = props => {
  const [markedRMs, setMarkedRMs] = useState([]);

  useEffect(() => {
    const userId = sessionStorage.getItem("credentials");
    UserManager.getMarkedFL(userId).then(MFLRMs => {
      setMarkedRMs(MFLRMs);
    });
  }, []);

  const deleteMFLRead = id => {
    UserManager.delete(id)
      .then(() => UserManager.getAll().then(setMarkedRMs));
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
