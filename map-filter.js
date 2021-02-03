const numbers = [2, 4, 7, 8 , 9];
const results = numbers.map(function(square){
    return square * square;
});
console.log(results);

const numbers = [2, 4, 7, 8 , 9];
const result = numbers.filter(function(square){
    return square > 5;
});
console.log(result);

const numbers = [2, 4, 7, 8 , 9];
const resultn = numbers.find(function(square){
    return square > 5;
});
console.log(result);

const students = [
   {id:11, name:"kabir"},
   {id:12, name:"jamils"},
   {id:12, name:"kamals"}
]
const names = students.map(s => s.name);
console.log(names);

const ids = students.filter(s => s.id > 11);
console.log(ids);

const biggest = students.find(s => s.name.length > 5);
console.log(biggest)