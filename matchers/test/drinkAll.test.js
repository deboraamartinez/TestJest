const drinkAll = require('../drinkAll')

describe('drinkAll', () => {
  it('drinks something lemonfleavor', () => {
    const drink = jest.fn()
    drinkAll(drink, 'lemon')
    expect(drink).toHaveBeenCalled()
  })
  it('drinks not drink somethint octopus-flavoured', () => {
    const drink = jest.fn()
    drinkAll(drink, 'octopus')
    expect(drink).not.toHaveBeenCalled()
  })
})