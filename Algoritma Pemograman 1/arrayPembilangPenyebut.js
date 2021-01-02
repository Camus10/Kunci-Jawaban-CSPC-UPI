function arrayPembilangPenyebut(onPattern){
    let divider = onPattern.length / 2;
    let counters = onPattern.slice(0, divider);
    let denominators = onPattern.slice(divider, onPattern.length);

    let counter;
    let definedCounters = [], definedDenominators = [];
    for(counter = 0; counter < divider; counter++){
        if(counters[counter] % denominators[counter] == 0){
            definedCounters.push(counters[counter]);
            definedDenominators.push(denominators[counter]);
        }
    }
    console.log(definedCounters);
    console.log(definedDenominators);
    
}
pattern1 = [2, 10, 3, 5, 1, 5, 6, 3];
pattern2 = [12, 10, 7, 15, 1, 6, 5, 8, 3, 9];
arrayPembilangPenyebut(pattern1);
arrayPembilangPenyebut(pattern2);