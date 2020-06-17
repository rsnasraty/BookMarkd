const remoteURL = "http://localhost:5000"

export default {
  get(id) {
    return fetch(`${remoteURL}/readingMaterials/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/readingMaterials`).then(result => result.json())
  },
  post(newUser) {
    return fetch(`${remoteURL}/readingMaterials`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(data => data.json())
},
  getWithReadingMaterials(id) {
    return fetch(`${remoteURL}/readingMaterials?userId=${id}`)
            .then(result => result.json())
            //get specific users reading materials only
}




}