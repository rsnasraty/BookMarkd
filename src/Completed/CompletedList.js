import React, { useState, useEffect } from "react";
import UserManager from "../modules/UserManager";
import CompletedCard from "./CompletedCard";

//use props to pass in setUser from Login/AppViews
const CompletedList = props => {
  const [completedRMs, setCompletedRMs] = useState([]);

  useEffect(() => {
    const userId = sessionStorage.getItem("credentials");
    UserManager.getCompleted(userId).then(CompletedReads => {
      setCompletedRMs(CompletedReads);
    });
  }, []);

  return (
    <div>
      {completedRMs.map(readObject => (
        <CompletedCard key={readObject.id} readObject={readObject} {...props} />
      ))}
    </div>
  );
};

export default CompletedList;
