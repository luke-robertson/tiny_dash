const assert = require('assert')
const { isArray } = require('../index.js')

describe('isArray()', () => {
  it('should return true if array', () => {
    const base = [[], [123], [{}, {}], [[]]]
    const calc = base.map(isArray)
    const expected = [true, true, true, true]
    assert.deepEqual(calc, expected)
  })
  it('should return false if not array', () => {
    const base = [{}, null, undefined, '123']
    const calc = base.map(isArray)
    const expected = [false, false, false, false]
    assert.deepEqual(calc, expected)
  })
})
