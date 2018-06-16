const assert = require('assert')
const { random } = require('../index.js')

describe('random()', () => {
  it('should return a random number up to 1 with no props', () => {
    const base = random()
    const expected = base > 0 && base < 1
    assert(expected)
  })
  it('should return a random number between props', () => {
    const base = random(5, 10)
    const expected = base > 5 && base < 10
    assert(expected)
  })
  it('should return a negative random number between negative props', () => {
    const base = random(-5, -10)
    const expected = base < -5 && base > -10
    assert(expected)
  })
})
