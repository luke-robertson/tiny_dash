const assert = require('assert')
const { sample } = require('../index.js')

describe('sample()', () => {
  it('should get a random sample', () => {
    let base = ['1', '5', '9']
    const calc = sample(base)
    const expected = calc === '1' || calc === '5' || calc === '9'
    assert(expected)
  })
  it('should get a random sample', () => {
    let base = ['1', '5', '9']
    const calc = JSON.stringify(sample(base, 2))
    const expected =
      calc === JSON.stringify(['1', '5']) ||
      calc === JSON.stringify(['1', '9']) ||
      calc === JSON.stringify(['5', '1']) ||
      calc === JSON.stringify(['5', '9']) ||
      calc === JSON.stringify(['9', '1']) ||
      calc === JSON.stringify(['9', '5'])
    assert(expected)
  })
})
