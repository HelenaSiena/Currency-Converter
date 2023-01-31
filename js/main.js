$(document).ready(function() {

    // document.getElementsByClassName('.button') = ('click', function (){
    //     var inputValue = document.getElementById("#valueCoin").value;
    //     var fromTypeCoin = document.getElementById("#de-type-coin").value;
    //     var toTypeCoin = document.getElementById("#to-type-coin").value;
    
    //     if ( fromTypeCoin == toTypeCoin) { 
    //     document.getElementById("#result").innerHTML = ('Os valores escolhidos precisam ser diferentes!')
    //     } else {
    //     var result = inputValue * fromTypeCoin / toTypeCoin;
    
    //     document.getElementById("#result").innerHTML = result.toFixed(2);
    //     }
    // })

        
    /**JQuery Mask Plugin */
    $('#valueCoin').mask('0.000.000,00', {
        reverse: true,
        placeholder: '          Digite apenas números',
    });

    /**JQuery Validate */
    $('form').validate({ 
        rules: {
            valueCoin: {
                maxlength: 100,
                minlenght: 2,
                required: true
            },
        },
        messages: {
            valueCoin: '<br>Por favor, insira o valor!',
        },
        submitHandler: function(form){
            console.log(form);
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador;
            if (camposIncorretos) {
                $('#result').html(`É necessário inserir um valor para converter!`);
            }
        }
    });  

});