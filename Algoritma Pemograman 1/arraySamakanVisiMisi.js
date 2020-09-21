function arraySamakanVisiMisi(arrayString1, arrayString2, cekSukuKata){
    let counterString, counterCek;
    let statusDepanString1 = 0, statusBelakangString1 = 0; 
    let statusDepanString2 = 0, statusBelakangString2 = 0; 

    for(counterString = 0; counterString < arrayString1.length; counterString++){
        if(arrayString1[counterString].includes(cekSukuKata[0])){
            statusDepanString1++;
        }
        if(arrayString1[counterString].includes(cekSukuKata[1])){
            statusBelakangString1++;
        }
    }

    for(counterString = 0; counterString < arrayString2.length; counterString++){
        if(arrayString2[counterString].includes(cekSukuKata[0])){
            statusDepanString2++;
        }
        if(arrayString2[counterString].includes(cekSukuKata[1])){
            statusBelakangString2++;
        }
    }

    if((statusDepanString1 == statusDepanString2) && (statusBelakangString1 == statusBelakangString2)){
        console.log("Valid");
    }else{
        console.log("Tidak Valid");
    }
}

let arrayString1 = ["aaalala", "aaanananalala"];
let arrayString2 = ["aaatalala", "aatata", "aaayalala"];
let cekSukuKata = ["aaa", "lala"];
/*
let arrayString1 = ["nanatata", "nata", "natata"];
let arrayString2 = ["nanana", "lalala"];
let cekSukuKata = ["na", "ta"];
*/
arraySamakanVisiMisi(arrayString1, arrayString2, cekSukuKata);