let dollarValue = 0.20;
let euroValue = 0.18;
let bitcoinValue = 0.0000008;

var coin = coinType

console.log(coin);

function coinType(options) {
    coin = options;
    
console.log(coin);

    return coin; 
}

function convertCoin() {

    console.log(coin);

    let valueInput = document.getElementById("valueNumber").value;

    valueInput = parseFloat(valueInput);

    let calculo = null;

    console.log(valueInput); 

    if (valueInput > 0 && coin == "dollarValue"){

        calculo = valueInput * dollarValue;

        result.innerHTML = 'R$ ' + calculo.toFixed(2);
    }        
    else if (valueInput > 0 && coin == "euroValue"){
        calculo = valueInput * euroValue;

        result.innerHTML = 'R$ ' + calculo.toFixed(2);
    }    
    else if (valueInput > 0 && coin == "bitcoinValue"){
        
        calculo = valueInput * bitcoinValue;

        result.innerHTML = 'R$ ' + calculo.toFixed(2);
    }            

    else {
        result.innerHTML = 'É necessário adicionar um valor válido para conversão. Recarregue a página e tente novamente!'
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
