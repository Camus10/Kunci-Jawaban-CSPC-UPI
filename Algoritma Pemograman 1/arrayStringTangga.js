let stringTangga = ["aku", "adalah", "anak", "gembala"];

let arrayAlay;
let newStringTangga = [];
for(let counterHead = 0; counterHead < stringTangga.length; counterHead++){
    if(counterHead % 2 == 0){
        newStringTangga.push(stringTangga[counterHead]);
    }else{
        let tempReverse = "";
        for(let counterReverse = stringTangga[counterHead].length - 1; counterReverse >= 0; counterReverse--){
            tempReverse = tempReverse + stringTangga[counterHead][counterReverse];
        }
        var objectChange = {
            a : "4", e : "3", i : "1", o : "0"
        };
        newStringTangga.push(tempReverse.replace(/a|e|i|o/gi, function(matched){
            return objectChange[matched];
        }));
    }
}


let back, front, push;
let tempSpace = "", space = " ";
console.log(newStringTangga[0]);
for(back = 0, front = 1; (back < newStringTangga.length && front < newStringTangga.length); back++, front++){
    if(newStringTangga[back].length % 2 == 0){
        for(push = 0; push < newStringTangga[back].length / 2; push++){
            tempSpace = tempSpace + space;
        }
        console.log(tempSpace + newStringTangga[front]);
    }if(newStringTangga[back].length % 2 != 0){
        for(push = 0; push < newStringTangga[back].length / 2 - 0.5; push++){
            tempSpace = tempSpace + space;
        }
        console.log(tempSpace + newStringTangga[front]);
    }
}
