function arrayAlayResmi(array1, array2){
    
    let arrayAlay = [], arrayResmi = [];
    let counter;
    for(counter = 0; counter < array1.length; counter++){
        if(array1[counter].includes(4) || array1[counter].includes(3) || array1[counter].includes(1) || array1[counter].includes(0)){
            arrayAlay.push(array1[counter]);
        }else{
            arrayResmi.push(array1[counter]);
        }
    }
    for(counter = 0; counter < array2.length; counter++){
        if(array2[counter].includes(4) || array2[counter].includes(3) || array2[counter].includes(1) || array2[counter].includes(0)){
            arrayAlay.push(array2[counter]);
        }else{
            arrayResmi.push(array2[counter]);
        }
    }
    console.log(arrayAlay);
    console.log(arrayResmi);
}

let array1 = ["alay", "r3sm1"];
let array2 = ["4l4y", "beneran", "resmi"];
/*
let array1 = ["3aa", "l4l4l4", "y3y3y3", "beneran", "alay"];
let array2 = ["ya", "memang", "b3n3ran", "4l4y"];
*/
arrayAlayResmi(array1, array2);