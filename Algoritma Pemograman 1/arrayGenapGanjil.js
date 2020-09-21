let arrayInteger1 = [1, 2, 3];
let arrayInteger2 = [5, 6, 7];
/*
let arrayInteger1 = [1, 2, 4];
let arrayInteger2 = [1, 2, 3, 4];
*/

let maxCounter;
let statusValid = 0, statusTidakValid = 0;
if(arrayInteger1.length == arrayInteger2.length){
    maxCounter = (arrayInteger1.length || arrayInteger2.length);

    let counter;
    for(counter = 0; counter < maxCounter; counter++){
        if((((arrayInteger1[counter] % 2 == 0) && (arrayInteger2[counter] % 2 == 0)) === true) || (((arrayInteger1[counter] % 2 != 0) && (arrayInteger2[counter] % 2 != 0)) === true)){
            statusValid++;
            if(statusValid == maxCounter){
                console.log("Valid");
            }
        }else{
            console.log("Tidak Valid");
        }
    }
}else{
    console.log("Tidak Valid");
}