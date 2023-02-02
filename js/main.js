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
        result.innerHTML = `É necessário adicionar um valor válido para conversão. <br><br> Verifique o valor e se o tipo de moeda está selecionado! `
    }
}

