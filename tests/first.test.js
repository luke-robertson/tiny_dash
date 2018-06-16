const assert = require('assert')
const { first } = require('../index.js')

describe('first()', () => {
  it('should return the first item in the array', () => {
    const base = [
      [1, 5, 7, 9],
      [5, 8, 9, 1],
      ['test', 'data', 'lol', 'face'],
      [1, 're', 3, '76']
    ]
    const calc = base.map(first)
    const expected = [1, 5, 'test', 1]
    assert.deepEqual(calc, expected)
  })
  it('should return undefined if empty', () => {
    const base = [[], [], [], []]
    const calc = base.map(first)
    const expected = [undefined, undefined, undefined, undefined]
    assert.deepEqual(calc, expected)
  })
  it('should return last char of int', () => {
    const base = ['long string', 'test', 'props', '532']
    const calc = base.map(first)
    const expected = ['l', 't', 'p', '5']
    assert.deepEqual(calc, expected)
  })
  it('should return last char of int', () => {
    const base = [124, 555, 765, 10935]
    const calc = base.map(first)
    const expected = [1, 5, 7, 1]
    assert.deepEqual(calc, expected)
  })
})
