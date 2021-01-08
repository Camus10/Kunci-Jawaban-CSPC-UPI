let binary = [100, 10];

let counter;
let sum = 0;
for(counter = 0; counter < binary.length; counter++){
    sum = sum + parseInt(binary[counter], 2);
}
console.log(sum);