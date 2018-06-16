const assert = require('assert')
const { sum } = require('../index.js')

describe('sum()', () => {
  it('should sum array of ints', () => {
    let base = [9, 3, 2, 5]
    const calc = sum(base)
    const expected = 19
    assert.deepEqual(calc, expected)
  })
})
