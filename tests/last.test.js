const assert = require('assert')
const { last } = require('../index.js')

describe('last()', () => {
  it('should return the last item in the array', () => {
    const base = [
      [1, 5, 7, 9],
      [5, 8, 9, 1],
      ['test', 'data', 'lol', 'face'],
      [1, 're', 3, '76']
    ]
    const calc = base.map(last)
    const expected = [9, 1, 'face', '76']
    assert.deepEqual(calc, expected)
  })
  it('should return undefined if empty', () => {
    const base = [null, undefined, [], []]
    const calc = base.map(last)
    const expected = [undefined, null, undefined, undefined]
    assert.deepEqual(calc, expected)
  })
  it('should return last char of string', () => {
    const base = ['long string', 'test', 'props', '532']
    const calc = base.map(last)
    const expected = ['g', 't', 's', '2']
    assert.deepEqual(calc, expected)
  })
  it('should return last char of int', () => {
    const base = [124, 555, 765, 10935]
    const calc = base.map(last)
    const expected = [4, 5, 5, 5]
    assert.deepEqual(calc, expected)
  })
})
