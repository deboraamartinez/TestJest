const axios = require("axios")

module.exports = fetchData = async (id) => {
  const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
  console.log(results)
  return results.data

}

