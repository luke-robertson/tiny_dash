const assert = require('assert')
const { isNumber } = require('../index.js')

describe('isNumber()', () => {
  it('should return true if number', () => {
    const base = [123, 555, 777, 0]
    const calc = base.map(isNumber)
    const expected = [true, true, true, true]
    assert.deepEqual(calc, expected)
  })
  it('should return false if not number', () => {
    const base = [[], null, undefined, '123']
    const calc = base.map(isNumber)
    const expected = [false, false, false, false]
    assert.deepEqual(calc, expected)
  })
})
