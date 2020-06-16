import React, { useState } from 'react';
import UserManager from "../modules/UserManager"

const UserForm = props => {
  const [user, setUser] = useState({ email: "", password: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...user };
    stateToChange[evt.target.id] = evt.target.value;
    setUser(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create User      object, invoke the UserManager post method, and redirect to the full User list
  */
  const constructNewUser = evt => {
    evt.preventDefault();
    if (user.username === "" || user.password === "" || user.email === "") {
      window.alert("Please input user name,password, and email ");
    } else {
      setIsLoading(true);
      // Create the user and redirect user to user list
      UserManager.post(user)
        .then(() => props.history.push("/users"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">

          <label htmlFor="email">Email</label>
          <input
              type="email"
              required
              onChange={handleFieldChange}
              id="email"
              placeholder="Email"
            />
           
           <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              onChange={handleFieldChange}
              id="password"
              placeholder="Password"
            />
            
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewUser}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default UserForm