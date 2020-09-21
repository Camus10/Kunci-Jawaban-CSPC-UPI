function arrayAkuYes(array1, array2, array3){
    let splitArray1 = array1.length / 2;
    let splitArray2 = array2.length / 2;
    let splitArray3 = array3.length / 2;
    let sumArrayLeft = 0, sumArrayRight = 0;
    let tempArrayLeft = [], tempArrayRight = [];

    let counter;
    for(counter = 0; counter < splitArray1; counter++){
        sumArrayLeft = sumArrayLeft + array1[counter];
    }
    for(counter = (array1.length - 1); counter >= splitArray1; counter--){
        sumArrayRight = sumArrayRight + array1[counter];
    }
    tempArrayLeft.push(Math.trunc(sumArrayLeft / splitArray1));
    tempArrayRight.push(Math.trunc(sumArrayRight / splitArray1));
    sumArrayLeft = 0, sumArrayRight = 0;

    for(counter = 0; counter < splitArray2; counter++){
        sumArrayLeft = sumArrayLeft + array2[counter];
    }
    for(counter = (array2.length - 1); counter >= splitArray2; counter--){
        sumArrayRight = sumArrayRight + array2[counter];
    }
    tempArrayLeft.push(Math.trunc(sumArrayLeft / splitArray2));
    tempArrayRight.push(Math.trunc(sumArrayRight / splitArray2));
    sumArrayLeft = 0, sumArrayRight = 0;

    for(counter = 0; counter < splitArray3; counter++){
        sumArrayLeft = sumArrayLeft + array3[counter];
    }
    for(counter = (array3.length - 1); counter >= splitArray3; counter--){
        sumArrayRight = sumArrayRight + array3[counter];
    }
    tempArrayLeft.push(Math.trunc(sumArrayLeft / splitArray3));
    tempArrayRight.push(Math.trunc(sumArrayRight / splitArray3));
    
    let sortedTempArrayLeft = tempArrayLeft.sort((a, b) => {
        return b - a;
    });
    let sortedTempArrayRight = tempArrayRight.sort((a, b) => {
        return b - a;
    });
    console.log(sortedTempArrayLeft);
    console.log(sortedTempArrayRight);
}

let arrayInput1 = [4, 6];
let arrayInput2 = [4, 3, 11, 12];
let arrayInput3 = [1, 2, 3, 4, 5, 6];
arrayAkuYes(arrayInput1, arrayInput2, arrayInput3);
/*
let arrayInput1 = [24, 11, 3, 6];
let arrayInput2 = [12, 10, 5, 7];
let arrayInput3 = [7, 8];
*/
arrayAkuYes(arrayInput1, arrayInput2, arrayInput3);