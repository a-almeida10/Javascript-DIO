/*Esse código é sobre tipos de erros em JavaScript- ECMAScript Error */ 
/*Composto por: 
-Mensagem
-Nome
-Linha
-Call Stack*/

/*Outro tipo de erro é o DOMScript(Document Object Model)*/ 
/*São erros referentes a estutura da sua página da web*/

/* Como tratar erros - 
Throw/ Return      Try/Catch*/


/* Exemplo com return*/
function verificaPalindromo(string){
    if(!string) return ("String inválida")
    return string === string.split('').reverse().join('');

}
/*console.log(verificaPalindromo(""));

/*Exemplo com throw*/



function verificaPalindromoThrow(string){
    if(!string) throw ("String inválida")
    return string === string.split('').reverse().join('');

}

/*console.log(verificaPalindromoThrow(""));


/* Try...catch :  Dentro do bloco try é verificado um código, caso ele identifique um erro o  Catch irá tratá-lo*/
function verificaPalindromoThrow(string){
    if(!string) throw ("String inválida")
    return string === string.split('').reverse().join('');
}
function tryCatchExample(string) {
    try {
        verificaPalindromoThrow(string);
    } catch (error) {
        throw(error)
    }
    finally{
        console.log("A string enviada foi " + string);
    }
    
}

console.log(tryCatchExample("ama"));
