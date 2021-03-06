const remoteURL = "http://localhost:5000";

export default {
  get(id) {
    return fetch(`${remoteURL}/users/${id}`).then(result => result.json());
  },
  getAll() {
    return fetch(`${remoteURL}/users`).then(result => result.json());
  },
  //Filters the users collection by the email property of the users in the database, makes sure it matches
  getByEmail(email) {
    return fetch(`${remoteURL}/users?email=${email}`).then(result =>
      result.json()
    );
    //ex: users?email=${email}&statusId=${statusId} then get by would take both as arguments
  },
  post(newUser) {
    return fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(data => data.json());
  },
  updateUser(editedUserObject) {
    return fetch(`${remoteURL}/users/${editedUserObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedUserObject)
    }).then(data => data.json());
  }
  
};
