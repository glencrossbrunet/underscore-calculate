# underscore-calculate

The calculation methods are inspired from Rails. Calculations only consider numbers, and return `undefined` if the collection doesn't include any numbers. That means the sum of `[]` is `undefined`.

The methods are as follows:

#### `_.sum`

```javascript
_.sum([ 1, 2, 3 ])
// 6

_.sum([ 'string', undefined, 6 ])
// 6
```

#### `_.average`

```javascript
_.average([ 1, 2, 3 ])
// 2

_.average([ 1, null, 'shouldnt be here' ])
// 1
```

#### `_.maximum`

Even though `_.max` is already defined, it returns -infinity for an empty collection instead of undefined. 

```javascript
_.maximum([ 1, 2, 3 ])
// 3

_.maximum([ undefined, true, 3 ])
// 3
```

#### `_.minimum`

Even though `_.min` is already defined, it returns +infinity for an empty collection instead of undefined.

```javascript
_.minimum([ 1, 2, 3 ])
// 1

_.minimum([ null, false ])
// undefined
```

#### `_.calculate`

Under the hood, all methods use a calculate method that selects only numbers and then calls another method to calculate. Check out the source for writing your own calculations!

### Notes

To use underscore-calculate, copy the `underscore.calculate.js` file into your project and include it after underscore. 

License: MIT

---
AJ Ostrow, December 2013