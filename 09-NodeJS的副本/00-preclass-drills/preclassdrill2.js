//Write a function that takes in an array of integers and the array with duplicates removed

// Ex:
// Input: [1, 2, 2, 3]
// Output: [1, 2, 3]

// Input: [4, 5, 4, 4, 7, 5]
// Output: [4, 5, 7]

// Input: [1, 2, 3, 5]
// Output: [1, 2, 3, 5]

// let input = [1, 2, 2, 3];
// let uniqueChars = [];
// input.forEach((i) => {
//     if (!uniqueChars.includes(i)) {
//         uniqueChars.push(i);
//     }
// });

// console.log(uniqueChars);

//2
const removeDuplicates = arr => {
    const deDuppedlist = [];

    arr.forEach(num => {

        if (!deDuppedlist.includes(num)) {
            deDuppedlist.push(num);
        }
    });
    return deDuppedlist;

}

//3 a set can't have duplicates
// const removeDuplicates = arr => [...new Set(arr)]

console.log(removeDuplicates([1, 2, 2, 3]));



