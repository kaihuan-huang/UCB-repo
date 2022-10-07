const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.
const linearSearch = (array, element) => {
    for (let i = 0; i < array.length; i++){
        if (array[i] === element){
            // console.log('array[i]',array[i])
            return i;
            // return array[i] -1;
            
        } 
    }
    return -1;
};

//way 2
const linearSearch2 = (array, element) =>array.findIndex(el => el === element);

module.exports = {linearSearch};
// because the test needs import


/*
function linearSearch(arr, key){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            return i
        }
    }
    return -1
}
*/