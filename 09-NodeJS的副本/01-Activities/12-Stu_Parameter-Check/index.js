console.log(process.argv);
//1-2 location and file location
const firstVar = process.argv[2];

const secondVar = process.argv[3];

const compare = function () {
    if (firstVar === secondVar) {
        return true;
    } else {
        return false;
    }

}
console.log(compare);
