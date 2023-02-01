// var real = prompt('\n Digite o valor em Real a converter: ');

var dollar = 0.20;
var euro = 0.18;
var bitCoin = 0.00000008;

var convert = 0;

function convertCoin() { 
    var radio = document.getElementById('#typeCoin');

    for ( i = 0; i < radio.length; i++){ 
        if (radio[i].checked){
            switch (radio[1].value){
                case "dollar":
                    convert = real * dollar;
                    convert = convert.toFixed(2);
                    document.getElementById('#result').innerHTML = "$" + convert;
                    break;

                case "euro":
                    convert = real * euro;
                    convert = convert.toFixed(2);
                    document.getElementById('#result').innerHTML = "$" + convert;
                    break;

                case "bitCoin":
                    convert = real * bitCoin;
                    convert = convert.toFixed(2);
                    document.getElementById('#result').innerHTML = "$" + convert;
                    break;
                default:
                    break;
            }
        }
    }
}
