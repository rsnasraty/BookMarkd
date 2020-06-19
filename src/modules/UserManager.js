const remoteURL = "http://localhost:5000"

export default {
  get(id) {
    return fetch(`${remoteURL}/users/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/users`).then(result => result.json())
  },
  post(newUser) {
    return fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(data => data.json())
  },
  getWithReadingMaterials(id) {
    return fetch(`${remoteURL}/users/${id}?_embed=readingMaterials`)
            .then(result => result.json())
}


}