const fetchData = require('../async')

it("should return the correct todo", async () => {
  const data = await fetchData(2);
  expect(data.title).toBe('quis ut nam facilis et officia qui')
})