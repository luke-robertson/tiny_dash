const assert = require('assert')
const { sortStr } = require('../index.js')

describe('sortStr()', () => {
  it('should short array of str', () => {
    let base = ['b', 'e', 'z', 'a']
    const calc = sortStr(base)
    const expected = ['a', 'b', 'e', 'z']
    assert.deepEqual(calc, expected)
  })
})
