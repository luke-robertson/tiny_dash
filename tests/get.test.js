const assert = require('assert')
const { get } = require('../index.js')

describe('get()', () => {
  it('should return value of key in object', () => {
    const base = [
      [{ data: { value: '1' } }, 'data.value'],
      [{ face: { value: 'yes' } }, 'face.value'],
      [{ face: { value: 'data' } }, ['face', 'value']]
    ]
    const calc = base.map(item => get(item[0], item[1]))
    const expected = ['1', 'yes', 'data']
    assert.deepEqual(calc, expected)
  })

  it('should return value of key in array', () => {
    const base = [
      [[1, 2, 3, 4], '0'],
      [[100, 200, 300], [1]],
      [[55, 66, 77], '2']
    ]
    const calc = base.map(item => get(item[0], item[1]))
    const expected = [1, 200, 77]
    assert.deepEqual(calc, expected)
  })
})
