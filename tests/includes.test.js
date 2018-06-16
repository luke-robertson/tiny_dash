const assert = require('assert')
const { includes } = require('../index.js')

describe('includes()', () => {
  it('should return true if string includes', () => {
    const base = [
      ['face bob date', 'date'],
      ['fate mate rate', 'fate'],
      ['smite light fight', 'light']
    ]
    const calc = base.map(item => includes(item[0], item[1]))
    const expected = [true, true, true]
    assert.deepEqual(calc, expected)
  })
  it('should return false if not in string', () => {
    const base = [
      ['face bob date', 'night'],
      ['fate mate rate', 'sight'],
      ['smite light fight', 'date']
    ]
    const calc = base.map(item => includes(item[0], item[1]))
    const expected = [false, false, false]
    assert.deepEqual(calc, expected)
  })
  it('should return true if array includes', () => {
    const base = [
      [['face', 'bob', 'date'], 'date'],
      [['fate', 'mate', 'rate'], 'fate'],
      [['smite', 'light', 'fight'], 'light']
    ]
    const calc = base.map(item => includes(item[0], item[1]))
    const expected = [true, true, true]
    assert.deepEqual(calc, expected)
  })
  it('should return false if not in array', () => {
    const base = [
      [['face', 'bob', 'date'], 'night'],
      [['fate', 'mate', 'rate'], 'sight'],
      [['smite', 'light', 'fight'], 'date']
    ]
    const calc = base.map(item => includes(item[0], item[1]))
    const expected = [false, false, false]
    assert.deepEqual(calc, expected)
  })
})
