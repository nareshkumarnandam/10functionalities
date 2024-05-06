# Array Methods Package

A simple npm package showcasing 10 essential array methods in JavaScript.

## Installation

```markdown
npm install 10functionalities
```

## Usage

```javascript
const arrayMethods = require('array-methods-package');

// Sample array
const arr = [1, 2, 3, 4, 5];

// 1. forEach() method
arrayMethods.forEachExample(arr);

// 2. map() method
arrayMethods.mapExample(arr);

// 3. filter() method
arrayMethods.filterExample(arr);

// 4. reduce() method
arrayMethods.reduceExample(arr);

// 5. find() method
arrayMethods.findExample(arr);

// 6. some() method
arrayMethods.someExample(arr);

// 7. every() method
arrayMethods.everyExample(arr);

// 8. sort() method
arrayMethods.sortExample();

// 9. indexOf() method
arrayMethods.indexOfExample();

// 10. lastIndexOf() method
arrayMethods.lastIndexOfExample();
```

## Methods

### 1. forEach()
Iterates through each element of the array.

### 2. map()
Creates a new array by performing a function on each array element.

### 3. filter()
Creates a new array with elements that pass a test.

### 4. reduce()
Executes a reducer function on each element of the array, resulting in a single output value.

### 5. find()
Returns the value of the first array element that satisfies a provided condition.

### 6. some()
Checks if at least one element in the array satisfies the provided condition.

### 7. every()
Checks if all elements in the array satisfy the provided condition.

### 8. sort()
Sorts the elements of the array either in ascending or descending order.

### 9. indexOf()
Returns the index of the first occurrence of a specified value in the array.

### 10. lastIndexOf()
Returns the index of the last occurrence of a specified value in the array.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
