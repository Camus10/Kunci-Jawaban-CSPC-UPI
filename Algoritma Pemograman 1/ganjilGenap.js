function GanjilGenap(randomNumber){
    let checkEvenValidation = 0, checkOddValidation = 0;
    let tempEven = [], tempOdd = [];

    let counterCheck;
    for(counterCheck = 0; counterCheck < 6; counterCheck++){
        (randomNumber[counterCheck] % 2 == 0) ? checkEvenValidation++ : checkOddValidation++;
        (randomNumber[counterCheck] % 2 == 0) ? tempEven.push(randomNumber[counterCheck]) : tempOdd.push(randomNumber[counterCheck]);
    }

    if(checkEvenValidation == checkOddValidation){
        let compile;
        for(compile = 0; compile < 3; compile++){
            console.log(tempEven[compile] + "\n" + tempOdd[compile])
        }
    }else{
        console.log("Tidak Valid");
    }
}
let formInput1 = [41, 23, 35, 22, 12, 44];
let formInput2 = [1, 33, 4, 55, 11, 2, 77];
GanjilGenap(formInput1);
GanjilGenap(formInput2);
