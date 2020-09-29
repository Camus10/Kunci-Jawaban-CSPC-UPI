function arrayYesAkuPastiBisa(array1, array2, array3){
    array1.sort((a, b) => {
        return a - b;
    });
    array2.sort((a, b) => {
        return a - b;
    });
    array3.sort((a, b) => {
        return a - b;
    });
    
    let tempArrayTerkecil = [array1[0], array2[0], array3[0]];
    console.log(tempArrayTerkecil.sort((a, b) => {
        return a - b;
    }));
    let tempArrayTerbesar = [array1[array1.length - 1], array2[array2.length - 1], array3[array3.length - 1]];
    console.log(tempArrayTerbesar.sort((a, b) => {
        return a - b;
    }));
}

array1 = [1, 2];
array2 = [4, 6, 5];
array3 = [12, 3, 4, 7];
/*
array1 = [45, 1, 8, 2];
array2 = [4, 2, 6, 99];
array3 = [2, 3, 44];
*/
arrayYesAkuPastiBisa(array1, array2, array3);