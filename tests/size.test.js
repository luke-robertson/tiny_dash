const assert = require('assert')
const { size } = require('../index.js')

describe('size()', () => {
  it('should return size of array', () => {
    const base = [[1, 2, 3, 4], [], [[]], [{}, {}]]
    const calc = base.map(size)
    const expected = [4, 0, 1, 2]
    assert.deepEqual(calc, expected)
  })
  it('should return 0 if no size', () => {
    const base = [undefined, null, [], '']
    const calc = base.map(size)
    const expected = [0, 0, 0, 0]
    assert.deepEqual(calc, expected)
  })
})
