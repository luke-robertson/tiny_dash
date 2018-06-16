const assert = require('assert')
const { keys } = require('../index.js')

describe('keys()', () => {
    it('should return keys of object', () => {
        const base = [{ 123: 'test', data: '123' }]
        const calc = base.map(keys)
        const expected = [['123', 'data']]
        assert.deepEqual(calc, expected)
    })
})
