let inputDombaJantan = 3;
let inputDombaBetina = 2;
let inputDombaKecil = 1;
let inputDombaJantanLompat = 30;
let inputDombaBetinaLompat = 20;
let inputDombaKecilLompat = 10;

let convertToMinutes = (inputDombaJantan * inputDombaJantanLompat) + (inputDombaBetina * inputDombaBetinaLompat) + (inputDombaKecil * inputDombaKecilLompat);
let hours = Math.floor(convertToMinutes / 60), minutes = convertToMinutes % 60;
console.log(((hours < 10 ? "0" : "") + hours) + ":" + minutes + ":00");