const assert = require('assert')
const { isObject } = require('../index.js')

describe('isObject()', () => {
  it('should return true if object', () => {
    const base = [{ test: 'data' }, { 123: 123 }, {}, { data: {}, more: {} }]
    const calc = base.map(isObject)
    const expected = [true, true, true, true]
    assert.deepEqual(calc, expected)
  })
  it('should return false if not object', () => {
    const base = [[], null, undefined, 123]
    const calc = base.map(isObject)
    const expected = [false, false, false, false]
    assert.deepEqual(calc, expected)
  })
})
