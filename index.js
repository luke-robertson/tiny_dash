const times = () => {}

const flatMap = () => {}

const clone = () => {}

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

const random = (min = 0, max = 1) => Math.random() * (max - min) + min

const isObject = data =>
  typeof data === 'object' && !Array.isArray(data) && data !== null

const isNumber = data => Number.isInteger(data)

const isString = data => typeof data === 'string' || data instanceof String

const isArray = data => Array.isArray(data)

const isFalsy = data =>
  data === null ||
  data === undefined ||
  data === false ||
  data === 0 ||
  data === ''

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

const size = item => (item ? item.length : 0)

const keys = item => (item ? Object.keys(item) : [])

// none public functions

const getIndex = (item, index = 0) => item[index]

module.exports = {
  times,
  flatMap,
  clone,
  get,
  random,
  first,
  last,
  isObject,
  isNumber,
  isArray,
  isFalsy,
  isString,
  size,
  keys
}
