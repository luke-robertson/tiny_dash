const assert = require('assert')
const { isFalsy } = require('../index.js')

describe('isFalsy()', () => {
  it('should return true if false', () => {
    const base = [false, null, 0, '']
    const calc = base.map(isFalsy)
    const expected = [true, true, true, true]
    assert.deepEqual(calc, expected)
  })
  it('should return false if not false', () => {
    const base = [123, '123', {}, []]
    const calc = base.map(isFalsy)
    const expected = [false, false, false, false]
    assert.deepEqual(calc, expected)
  })
})
