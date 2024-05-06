const arr = [1,2,3,4,5];

// 1. Array forEach() method

arr.forEach(function(num, index) {
    arr[index] = num + 1;
});
console.log(arr);

// 2.Array map() method

const doublednumbers = arr.map((num) => {
    return num*2;
})
console.log(doublednumbers);

// 3.Array filter() method

const evennums = arr.filter((num) => {
    return num%2 === 0;
})
console.log(evennums);

// 4.Array reduce() Method

const sum = arr.reduce((accumulator, currentValue) => {
    return accumulator+currentValue;
}, 0);
console.log(sum);

// 5.Array find() method

const found = arr.find((num) => {
    return num > 3;
})
console.log(found);

// 6.Array some() method

const hasEvenNumber = arr.some((num) => {
    return num%2 === 0;
})

console.log(hasEvenNumber);

// 7.Array every() method

const allEven = arr.every((num) => {
    return num%2 === 0;
})

console.log(allEven);

// 8.Array sort() method

const arr2 = [2,4,1,8,3];

arr2.sort();
console.log(arr2);

// or

arr2.sort((a,b) => {
    return a - b;
})

console.log(arr2);

// 9.Array indexOf() method

const fruits = ['apple','mango','orange','banana','mango','watermelon'];

const index = fruits.indexOf('banana',0);
console.log(index);

// 10.Array lastIndexOf() method

const lastIndex = fruits.lastIndexOf("mango");
console.log(lastIndex);