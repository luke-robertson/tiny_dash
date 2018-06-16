const clone = data => (data ? Object.assign({}, data) : undefined)

const cloneDeep = data => (data ? JSON.parse(JSON.stringify(data)) : undefined)

const first = data => {
  if (isFalsy(data)) {
    return undefined
  }

  if (isNumber(data)) {
    return Number(getIndex(data.toString()))
  }

  if (isObject(data)) {
    return getIndex(keys(data))
  }

  return getIndex(data)
}

const flatten = data =>
  isArray(data) ? data.reduce((acc, val) => acc.concat(val), []) : undefined

const flattenDeep = data =>
  isArray(data)
    ? data.reduce(
        (acc, val) =>
          isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
        []
      )
    : undefined

const get = (data, target) => {
  if (isFalsy(data)) {
    return undefined
  }
  if (isArray(data)) {
    return getIndex(data, target)
  }
  const path = isString(target) ? target.split('.') : target
  return path.reduce((acc, key) => (acc && acc[key] ? acc[key] : null), data)
}

const group = (data, key) =>
  isArray(data)
    ? data.reduce(
        (acc, item) =>
          Object.assign(acc, {
            [item[key]]: (acc[item[key]] || []).concat(item)
          }),
        {}
      )
    : undefined

const includes = (data = [], string = '') => data.indexOf(string) !== -1

const isArray = data => Array.isArray(data)

const isFalsy = data =>
  data === null ||
  data === undefined ||
  data === false ||
  data === 0 ||
  data === ''

const isNumber = data => Number.isInteger(data)

const isObject = data =>
  typeof data === 'object' && !isArray(data) && !isFalsy(data)

const isString = data => typeof data === 'string' || data instanceof String

const keys = item => (item ? Object.keys(item) : [])

const last = data => {
  if (isFalsy(data)) {
    return undefined
  }

  if (isNumber(data)) {
    return Number(getIndex(data.toString(), size(data.toString()) - 1))
  }

  if (isObject(data)) {
    return getIndex(keys(data), size(keys(data)) - 1)
  }

  return getIndex(data, size(data) - 1)
}

const random = (min = 0, max = 1) =>
  min === 0 && max === 1
    ? Math.random() * (max - min) + min
    : Math.floor(Math.random() * (max - min) + min)

const sample = (arr, length = false) => {
  if (length) {
    const final = []
    times(length, () => {
      final.push(arr.splice(random(0, size(arr)), 1))
    })
    return flatten(final)
  }
  return getIndex(arr, random(0, size(arr)))
}

const size = item => (item ? item.length : 0)

const sortInt = arr => arr.sort((a, b) => a - b)

const sortStr = arr => arr.sort((a, b) => a.localeCompare(b))

const sum = arr => (arr ? arr.reduce((acc, int) => acc + int, 0) : undefined)

const times = (times = 1, cb = () => {}) => {
  for (let i = 0; i < times; i++) {
    cb()
  }
}

const flatMap = (f, xs) => xs.reduce((acc, x) => acc.concat(f(x)), [])

// none public functions

const getIndex = (item, index = 0) => item[index]

module.exports = {
  clone,
  cloneDeep,
  first,
  flatMap,
  flatten,
  flattenDeep,
  get,
  group,
  includes,
  isArray,
  isFalsy,
  isNumber,
  isObject,
  isString,
  keys,
  last,
  random,
  sample,
  size,
  sortInt,
  sortStr,
  sum,
  times
}
