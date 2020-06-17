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
  getWithReadingMaterials(id) {
    return fetch(`${remoteURL}/readingMaterials?userId=${id}`)
            .then(result => result.json())
            //get specific users reading materials only
}




}