const assert = require('assert')
const { isString } = require('../index.js')

describe('isString()', () => {
  it('should return true if string', () => {
    const base = ['123', 'test', 'face', '']
    const calc = base.map(isString)
    const expected = [true, true, true, true]
    assert.deepEqual(calc, expected)
  })
  it('should return false if not string', () => {
    const base = [123, {}, undefined, []]
    const calc = base.map(isString)
    const expected = [false, false, false, false]
    assert.deepEqual(calc, expected)
  })
})
