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

const flatMap = () => {}

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

const includes = (data, string) =>
  data ? data.indexOf(string) !== -1 : undefined

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

const random = (min = 0, max = 1) => Math.random() * (max - min) + min

const size = item => (item ? item.length : 0)

const times = () => {}

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
  includes,
  isArray,
  isFalsy,
  isNumber,
  isObject,
  isString,
  keys,
  last,
  random,
  size,
  times
}
