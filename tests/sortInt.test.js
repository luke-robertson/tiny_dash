const assert = require('assert')
const { sortInt } = require('../index.js')

describe('sortInt()', () => {
  it('should short array of ints', () => {
    let base = [9, 3, 2, 5]
    const calc = sortInt(base)
    const expected = [2, 3, 5, 9]
    assert.deepEqual(calc, expected)
  })
})
