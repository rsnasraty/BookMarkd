import React, { useState, useEffect } from "react";
import UserManager from "../modules/UserManager";
import InProgressCard from "./InProgressCard"


//use props to pass in setUser from Login/AppViews
const InProgressList = props => {
  const [IPRMs, setIPRMs] = useState([]);

//1) Working on this to get logged in UserId
  //gets userId
  

//In state, I have an empty array named IPRM, then I am setting the array with what I get back from the IPReads fetch call 
//Now the array will be filled with every object I get back from the fetch call 
  useEffect(() => {
    const userId = sessionStorage.getItem("credentials")
    UserManager.getInProgress(userId)
      .then(IPReads => {
        setIPRMs(IPReads)
        console.log(IPReads)
      });
  }, []);



  return (
    <div>
    {/* passing props to IPCard so we can let it know what readObject is, need to tell it things so it knows what they mean on the card ex: delete. ...props lets you use props.history etc.  */}
  {IPRMs.map(readObject => <InProgressCard key={readObject.id} readObject={readObject} {...props} />  )}

      
    </div>
  );
  };


export default InProgressList;
