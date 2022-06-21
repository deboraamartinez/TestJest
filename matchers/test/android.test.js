const android = require('../android')

it('should work', () => {
  expect(() => android()).toThrow(Error)
  expect(() => android()).toThrow('ta usando errado')
  //regex
  expect(() => android()).toThrow(/errado/)
})