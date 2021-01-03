let deretHuruf = "padepokandombagarutpasirhalang";
let showRank = 2;
let countingUnit = deretHuruf.split("");

function countDuplicate(get){
    let compiler = [];
    let counter;
    for(counter = 0; counter < get.length; counter++){
        if(compiler[get[counter]]){
            compiler[get[counter]] = compiler[get[counter]] + 1;
        }else{
            compiler[get[counter]] = 1;
        }
    }

    let count;
    let newObject = [];
    for(count in compiler){
        newObject.push(count + " " + compiler[count]);
    }
    newObject.sort((a, b) => b[2] - a[2]);
    
    let print;
    for(print = 0; print < showRank; print++){
        console.log(newObject[print])
    }
}
countDuplicate(countingUnit);