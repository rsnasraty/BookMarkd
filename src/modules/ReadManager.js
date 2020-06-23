const remoteURL = "http://localhost:5000"

export default {
  get(id) {
    return fetch(`${remoteURL}/readingMaterials/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/readingMaterials`).then(result => result.json())
  },
  post(newRead) {
    return fetch(`${remoteURL}/readingMaterials`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newRead)
    }).then(data => data.json())
    //Posts new Read object to json
},
delete(id) {
  return fetch(`${remoteURL}/readingMaterials/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
},
update(editedIP,userId) {
  return fetch(`${remoteURL}/readingMaterials?userId=${userId}&${editedIP.id}&statusId=In-Progress`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedIP,userId)
  }).then(data => data.json());
}



}