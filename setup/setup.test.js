let animals = ['elephant', 'zebra', 'bear', 'tiger']


//utiliza para que consiga fazer com que "animals" retorne ao que era antes, sem que os testes modifiquem o array
beforeEach(() => {
  animals = ['elephant', 'zebra', 'bear', 'tiger']
})

describe('animals array', () => {
  beforeEach(() => {
    animals = ['elephant', 'zebra', 'bear', 'tiger']
  })
  it('should add animal to end of array', () => {
    animals.push('aligator')
    expect(animals[animals.length - 1]).toBe('aligator')
  })
  it('should add animal to the beginning of array', () => {
    animals.unshift('dog')
    expect(animals[0]).toBe('dog')
  })
  it('should have initial length of 4', () => {
    expect(animals.length).toBe(4)
  })

})

