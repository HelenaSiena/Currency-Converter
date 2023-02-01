let dollarValue = 0.20;
let euroValue = 0.18;
let bitcoinValue = 0.0000008;

let dollar = document.getElementById('#dollar');
let euro = document.getElementById('#euro');
let bitCoin = document.getElementById('#bitCoin');
let calculo = 0;

let valueInput = document.getElementById('#valueNumber');
let converter = document.getElementsByClassName('.button');
let result = document.getElementById('#result');

function convertCoin() {
    if (valueInput.value >= 1){
        dollar.addEventListener('click', ()=> {
            calculo = valueInput.value * dollar;
            result.innerHTML = 'R$ ' + calculo.toFixed(2);
            console.log('dollar');
            
        })
        euro.addEventListener('click', ()=> {
            calculo = valueInput.value * euro;
            result.innerHTML = 'R$ ' + calculo.toFixed(2);
            console.log('euro');
        })
        bitCoin.addEventListener('click', ()=> {
            calculo = valueInput.value * bitCoin;
            result.innerHTML = 'R$ ' + calculo.toFixed(2);
            console.log('bitCoin');
        });
        
    } else{
        result.innerHTML = 'É necessário adicionar um valor!'
    }

}







// // var real = prompt('\n Digite o valor em Real a converter: ');

// var dollar = 0.20;
// var euro = 0.18;
// var bitCoin = 0.00000008;

// var convert = 0;

// function convertCoin() { 
//     var radio = document.getElementById('#typeCoin');

//     for ( i = 0; i < radio.length; i++){ 
//         if (radio[i].checked){
//             switch (radio[1].value){
//                 case "dollar":
//                     convert = real * dollar;
//                     convert = convert.toFixed(2);
//                     document.getElementById('#result').innerHTML = "$" + convert;
//                     break;

//                 case "euro":
//                     convert = real * euro;
//                     convert = convert.toFixed(2);
//                     document.getElementById('#result').innerHTML = "$" + convert;
//                     break;

//                 case "bitCoin":
//                     convert = real * bitCoin;
//                     convert = convert.toFixed(2);
//                     document.getElementById('#result').innerHTML = "$" + convert;
//                     break;
//                 default:
//                     break;
//             }
//         }
//     }
// }
