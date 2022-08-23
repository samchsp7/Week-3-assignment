let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
let lengths = names.map(function(element){
  return element.length;
});
console.log(lengths);

let sum = lengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});
console.log(sum);

for(let i=0; i < names.length; i++){
    console.log(names[i]);
};

var namess  = names.concat;
console.log(namess);

let nameLengths = [3, 5, 3, 5, 4, 3]
console.log(nameLengths)

let sum2 = nameLengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});
console.log(sum);