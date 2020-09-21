/*
let arrayInteger1 = [1, 2, 3, 4];
let arrayInteger2 = [4, 3];
*/
let arrayInteger1 = [1, 2, 3, 4];
let arrayInteger2 = [5, 6, 0, 3];

let splitArrayInteger1 = arrayInteger1.length / 2;
let splitArrayInteger2 = arrayInteger2.length / 2;
let sumArrayInteger1 = 0, sumArrayInteger2 = 0;
for(let counterFront = 0; counterFront < splitArrayInteger1; counterFront++){
    sumArrayInteger1 = sumArrayInteger1 + arrayInteger1[counterFront];
}
for(let counterBack = arrayInteger2.length - 1; counterBack >= splitArrayInteger2; counterBack--){
    sumArrayInteger2 = sumArrayInteger2 + arrayInteger2[counterBack];
}
if(sumArrayInteger1 == sumArrayInteger2){
    console.log("Valid");
}else{
    console.log("Tidak Valid");
}