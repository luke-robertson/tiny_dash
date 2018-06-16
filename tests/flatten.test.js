const assert = require('assert')
const { flatten } = require('../index.js')

describe('flatten()', () => {
  it('should flatten to one level', () => {
    const base = [[1, 2, [3], [4]]]
    const calc = base.map(flatten)
    const expected = [[1, 2, 3, 4]]
    assert.deepEqual(calc, expected)
  })
  it('should return undefined if not reducable', () => {
    const base = ['123', null, undefined, 123]
    const calc = base.map(flatten)
    const expected = [undefined, undefined, undefined, undefined]
    assert.deepEqual(calc, expected)
  })
})
