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
  update(editedIPObject, userId) {
    return fetch(
      `${remoteURL}/readingMaterials?userId=${userId}&${editedIPObject.id}&statusId=In-Progress`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedIPObject, userId)
      }
    ).then(data => data.json());
  },
  update(editedCRObject, userId) {
    return fetch(
      `${remoteURL}/readingMaterials?userId=${userId}&${editedCRObject.id}&statusId=In-Progress`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedCRObject, userId)
      }
    ).then(data => data.json());
  },

  update(editedMFLObject, userId) {
    return fetch(
      `${remoteURL}/readingMaterials?userId=${userId}&${editedMFLObject.id}&statusId=In-Progress`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedMFLObject, userId)
      }
    ).then(data => data.json());
  }
};
