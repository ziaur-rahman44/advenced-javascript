const numbers = [1, 5, -8, 6, -9, 8, -8,6];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i]>6){
        break;
    }
    console.log(numbers[i]);
}

for(let i = 0; i < numbers.length; i++){
    if(numbers[i]<0){
        continue;
    }
    console.log(numbers[i]);
}


