let input1 = "a";
let input2 = "b";
let input3 = 5;
let input4 = 6;
let input5 = "r";
let input6 = 7;

let tempArray = [input1, input2, input3, input4, input5, input6]
if(tempArray.length == 6){
    let tempArrayString = [];
    let tempArrayNumber = [];
    for(let check = 0; check < tempArray.length; check++){
        if(typeof(tempArray[check]) == "string"){
            tempArrayString.push(tempArray[check]);
        }else if(typeof(tempArray[check]) == "number"){
            tempArrayNumber.push(tempArray[check]);
        }
    }

    let i = 0;
    let j = 0;
    for(let print = 0; print < tempArray.length; print++){
        if(print % 2 == 0){
            console.log(tempArrayString[i]);
            i++;
        }
        if(print % 2 != 0){
            console.log(tempArrayNumber[j]);
            j++;
        }
    }
}else{
    console.log("tidak valid");
}
