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
getInProgress() {
  return fetch(`${remoteURL}/readingMaterials?userId=${userId}&${"In-Progress"}=${"In-Progress"}`)
  .then(result => result.json())
  //ex: users?email=${email}&statusId=${statusId} then get by would take both as arguments
}



}