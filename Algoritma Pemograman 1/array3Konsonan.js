function array3Konsonan(onPattern1, onPattern2){
    let counterHead, counterBody;
    let regex = /[b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z]/g;
    let count = 0;
    let consonant = [], vowel = [];

    for(counterHead = 0; counterHead < onPattern1.length; counterHead++){
        for(counterBody = 0; counterBody < 3; counterBody++){
            if(onPattern1[counterHead].substring(0, 3)[counterBody].match(regex)){
                count = count + 1;
            }
        }
        if(count == 3){
            consonant.push(onPattern1[counterHead]);
        }else{
            vowel.push(onPattern1[counterHead]);
        }
        count = 0;
    }
    for(counterHead = 0; counterHead < onPattern2.length; counterHead++){
        for(counterBody = 0; counterBody < 3; counterBody++){
            if(onPattern2[counterHead].substring(0, 3)[counterBody].match(regex)){
                count = count + 1;
            }
        }
        if(count == 3){
            consonant.push(onPattern2[counterHead]);
        }else{
            vowel.push(onPattern2[counterHead]);
        }
        count = 0;
    }

    let compile, countSpace, space = "";
    for(compile = 0; compile < consonant.length; compile++){
        if(compile % 2 == 0){
            console.log(consonant[compile]);
        }else{
            for(countSpace = 0; countSpace < consonant[compile - 1].length; countSpace++){
                space = space + " ";
            }
            console.log(space + consonant[compile]);
            space = "";
        }
    }
    for(compile = 0; compile < vowel.length; compile++){
        if(compile % 2 == 0){
            console.log(vowel[compile]);
        }else{
            for(countSpace = 0; countSpace < vowel[compile - 1].length; countSpace++){
                space = space + " ";
            }
            console.log(space + vowel[compile]);
            space = "";
        }
    }

}
pattern1 = ["strata", "satu", "pendidikan"];
pattern2 = ["strategi", "planologi", "gatra", "tetra"];
pattern3 = ["strata", "satu", "pendidikan", "statuta"];
pattern4 = ["strategi", "planologi", "gatra", "tetra", "patra", "terus", "berjuang"];
array3Konsonan(pattern1, pattern2);
//array3Konsonan(pattern3, pattern4);