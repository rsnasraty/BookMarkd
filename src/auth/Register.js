import React, { useState } from 'react';
import UserManager from '../../modules/UserManager';
import './UserForm.css'

const Register = props => {
  const [user, setUser] = useState({ name: "", color: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...user };
    stateToChange[evt.target.id] = evt.target.value;
    setUser(stateToChange);
  };

  const UserList = (props) => {
    // The initial state is an empty array
    const [users, setUsers] = useState([]);
  
    const getUsers = () => {
      // After the data comes back from the API, we
      //  use the setUsers function to update state
      return UserManager.getAll().then(usersFromAPI => {
        setUsers(usersFromAPI)
      });
    };

  /*  Local method for validation, set loadingStatus, create User      object, invoke the UserManager post method, and redirect to the full User list
  */
  const constructNewUser = evt => {
    evt.preventDefault();
    if (user.name === "" || user.color === "") {
      window.alert("Please input an user name and color");
    } else {
      setIsLoading(true);
      // Create the user and redirect user to user list
      UserManager.post(user)
        .then(() => props.history.push("/login"));
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="User name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="color"
              placeholder="Color"
            />
            <label htmlFor="color">Color</label>
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







  // got the Users from the API on the component's first render
  

  
  return (
    <>
    <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {props.history.push("/Users/new")}}>
      Admit User
  </button>
  </section>
    <div className="container-cards">
      {users.map(user => <UserCard key={user.id} user={user} {...props}/>)}
    </div>
    </>
  );
};
export default Register


