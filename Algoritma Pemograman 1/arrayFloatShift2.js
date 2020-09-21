const arrayFloat1 = [12.13];
const arrayFloat2 = [12.15];
const arrayFloat3 = [12.67];

let checkResult1 = arrayFloat1.toString().split(".");
let checkResult2 = arrayFloat2.toString().split(".");
let checkResult3 = arrayFloat3.toString().split(".");
if(((checkResult1[0] % 2 == 0) && (checkResult1[1] % 2 != 0)) && ((checkResult2[0] % 2 == 0) && (checkResult2[1] % 2 != 0)) && ((checkResult3[0] % 2 == 0) && (checkResult3[1] % 2 != 0))){
    console.log("Yes");
}else{
    console.log("No");
}