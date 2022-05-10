/*Essa função compara um número com o tamanho de uma array e retorna mensagens de erro específicas para cada tipo de erro */
function validaArray(num, array){
    try{
    if (!num && !array) throw new ReferenceError("Envie os parÂmetros");

    if (typeof array !=='object') throw new TypeError("Array inserido não é um objeto");

    if(typeof num !=='number') throw new TypeError("O número precisa ser do tipo number");

    if(array.length !==num) throw new RangeError("Tamanho inválido");
    
    return array;
    } catch(e){

        if(e instanceof ReferenceError){
            console.log("Este erro é um Reference Error")
            console.log(e.message)
        } else if (e instanceof TypeError){
            console.log("ESte é um TypeError");
            console.log(e.message);
        } else if ( e instanceof RangeError){
            console.log("Este é um RangeError")
            console.log(e.message);
            }else{
            console.log("Ocorreu um erro inesperado: " + e);
        }
    }

}

console.log((validaArray(5 ,[2 , 3 , 1 , 4, 5])));