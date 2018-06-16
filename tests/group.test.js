const assert = require('assert')
const { group } = require('../index.js')

describe('group()', () => {
  it('should group array by key', () => {
    let base = [
      { color: 'red', type: 'audi' },
      { color: 'blue', type: 'audi' },
      { color: 'red', type: 'ford' },
      { color: 'blue', type: 'ford' }
    ]
    const calc = group(base, 'type')
    const expected = {
      audi: [{ color: 'red', type: 'audi' }, { color: 'blue', type: 'audi' }],
      ford: [{ color: 'red', type: 'ford' }, { color: 'blue', type: 'ford' }]
    }
    assert.deepEqual(calc, expected)
  })
})
