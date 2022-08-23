var ages = [3, 9, 23, 64, 2, 8, 28, 93, 101];
var avgAge = ages[ages.length - 1] - ages[0];
console.log(avgAge);

let sum = ages.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});
console.log(sum)