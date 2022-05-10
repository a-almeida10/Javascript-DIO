/*Esse script recebe um mapa com usuários de um sistema e suas funções- em seguida, uma função é criada para receber o mapa
e retornar os usuários que tem função de administrador*/ 

const usuarios = new Map();
    
usuarios.set('Luiz', 'User');
usuarios.set('Marcela', 'Admin');
usuarios.set('Juscelino', 'User');
usuarios.set('Paula', 'Admin');
usuarios.set('Fernando', 'Admin');
usuarios.set('Camila', 'User');
usuarios.set('Saulo', 'Admin');
usuarios.set('Verônica', 'Admin');
usuarios.set('Leandro', 'User');

function getAdmins(map){
    let admins= [];
    for ([key, value] of map) {
        if(value === 'Admin'){
            admins.push(key)
        } 
    } 
    return admins;
}

console.log(getAdmins(usuarios));

/*Esse script recbe um array de números e cria uma função que retorna  os valores únicos dentro de um novo array*/ 

const myArray = [30, 30 , 40, 5, 223, 2049, 3034, 5]

function valoresUnicos (arr){
    const mySet = new Set(arr);
    return [...mySet];

}

console.log(valoresUnicos(myArray));