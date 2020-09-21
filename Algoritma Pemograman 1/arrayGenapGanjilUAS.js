function arrayGenapGanjilUAS(array1, array2){
    let counter;
    let tempArrayGanjil = [], tempArrayGenap = [];
    for(counter = 0; counter < array1.length; counter++){
        if(array1[counter] % 2 == 0){
            tempArrayGenap.push(array1[counter]);
        }else{
            tempArrayGanjil.push(array1[counter]);
        }
    }
    for(counter = 0; counter < array2.length; counter++){
        if(array2[counter] % 2 == 0){
            tempArrayGenap.push(array2[counter]);
        }else{
            tempArrayGanjil.push(array2[counter]);
        }
    }

    console.log(tempArrayGanjil);
    console.log(tempArrayGenap);
}


let arrayInput1 = [1, 2, 3];
let arrayInput2 = [34, 55, 66, 77, 99];
/*
let arrayInput1 = [2, 4, 8, 18];
let arrayInput2 = [3, 10, 5];
*/
arrayGenapGanjilUAS(arrayInput1, arrayInput2);
