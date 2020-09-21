const arrayFloat1 = [12.12];
const arrayFloat2 = [24.12];
const arrayFloat3 = [36.12];

let checkResult1 = arrayFloat1.toString().split(".");
let checkResult2 = arrayFloat2.toString().split(".");
let checkResult3 = arrayFloat3.toString().split(".");
if((checkResult1[0] % checkResult1[1] == 0) && (checkResult2[0] % checkResult2[1] == 0) && (checkResult3[0] % checkResult3[1] == 0)){
    console.log("yes");
}else{
    console.log("no");
}