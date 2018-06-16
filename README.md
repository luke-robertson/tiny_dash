# Tiny Dash

Tiny file size functions similar to lodash

## Getting Started

### Installing

```
yarn install tinydash OR npm install tinydash
```

### Usage

```
import { clone } from 'tinydash'

const x = [1,2,3]
const y = clone(x)
y = [1,2,3]
```

```
import { cloneDeep } from 'tinydash'
const x = [[1],[2],[3]]
const y = clone(x)
y = [[1],[2],[3]]
```

```
import { first } from 'tinydash'
const x = [[1],[2],[3]]
const y = first(x)
y = [1]
```

```
import { flatMap } from 'tinydash'
const x = [1,2,3]
const y = flatMap(x, ) // finish this
y = [1]
```

```
import { flatten } from 'tinydash'
const x = [[1],[2],[3]]
const y = flatten(x)
y = [1,2,3]
```

```
import { flattenDeep } from 'tinydash'
const x = [[1,[2,[3]]]
const y = flattenDeep(x)
y = [1,2,3]
```

```
import { get } from 'tinydash'
const x = { data: { key: { deepKey: 'value' }}}
const y = get(x, 'data.key.deepKey') || get(x, ['data', 'key', 'deepKey'])
y = 'value'
```

```
import { group } from 'tinydash'
const x = {{car: 'ford', color: 'red'}, {car: 'ford', color: 'green'}, {car: 'opel', color: 'red'}}
const y = group(x, 'car')
y = {ford: [{car: 'ford', color: 'red'}, {car: 'ford', color: 'green'}], opel: [{car:'open', color:'red'}]}
```

```
import { includes } from 'tinydash'
const x = ['hello', 'name', 'date']
const y = includes(x, 'hello')
y = true
```

```
import { isArray } from 'tinydash'
const x = ['hello', 'name', 'date']
const y = isArray(x)
y = true
```

```
import { isFalsy } from 'tinydash'
const x = undefined
const y = isFalsy(x)
y = true
```

```
import { isNumber } from 'tinydash'
const x = 123
const y = isNumber(x)
y = true
```

```
import { isObject } from 'tinydash'
const x = { test: 'data' }
const y = isObject(x)
y = true
```

```
import { isString } from 'tinydash'
const x = 'data'
const y = isString(x)
y = true
```

```
import { keys } from 'tinydash'
const x = {data: [], moreData: []}
const y = keys(x)
y = ['data', 'moreData']
```

```
import { last } from 'tinydash'
const x = [1,2,3]
const y = last(x)
y = 3
```

```
import { random } from 'tinydash'
const x = [1,2,3]
const y = random(x)
y = 2
```

```
import { sample } from 'tinydash'
const x = [1,2,3]
const y = sample(x, 2)
y = [1,3]
```

```
import { size } from 'tinydash'
const x = [1,2,3]
const y = size(x)
y = 3
```

```
import { sortInt } from 'tinydash'
const x = [3,1,2]
const y = sortInt(x)
y = [1,2,3]
```

```
import { sortStr } from 'tinydash'
const x = ['c','a','b']
const y = sortStr(x)
y = ['a','b','c']
```

```
import { sortStr } from 'tinydash'
const x = [1,2,3]
const y = sortStr(x)
y = 6
```

```
import { times } from 'tinydash'
const x = 0
times(3, x += 1)
y = 3
```

```
## Authors

* **Luke Robertson** - [DesignAlchemy](https://github.com/designalchemy/)

## License

Public
```
