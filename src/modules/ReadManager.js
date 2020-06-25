const remoteURL = "http://localhost:5000";

export default {
  get(id) {
    return fetch(`${remoteURL}/readingMaterials/${id}`).then(result =>
      result.json()
    );
  },
  getAll() {
    return fetch(`${remoteURL}/readingMaterials`).then(result => result.json());
  },
  post(newRead) {
    return fetch(`${remoteURL}/readingMaterials`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newRead)
    }).then(data => data.json());
    //Posts new Read object to json
  },
  delete(id) {
    return fetch(`${remoteURL}/readingMaterials/${id}`, {
      method: "DELETE"
    }).then(result => result.json());
  },
  //update all updates to have this formating 
  update(editedIPObject) {
    return fetch(
      `${remoteURL}/readingMaterials/${editedIPObject.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedIPObject)
      }
    ).then(data => data.json());
  }
};
