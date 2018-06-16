const assert = require('assert')
const { flattenDeep } = require('../index.js')

describe('flattenDeep()', () => {
  it('should flatten to one level', () => {
    const base = [[1, 2, [3, [5]], [4]]]
    const calc = base.map(flattenDeep)
    const expected = [[1, 2, 3, 5, 4]]
    assert.deepEqual(calc, expected)
  })
  it('should return undefined if not reducable', () => {
    const base = ['123', null, undefined, 123]
    const calc = base.map(flattenDeep)
    const expected = [undefined, undefined, undefined, undefined]
    assert.deepEqual(calc, expected)
  })
})
