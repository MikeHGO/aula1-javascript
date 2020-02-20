var users = [
    {name: 'Clodovil Cunha', age: 37},
    {name: 'Gretchen Poderosa', age: 60},
    {name: 'Inês Brasil', age: 50},
];

var user = {name: 'Charmander', age: 1};

// Java Script Objetc Notation

console.log(users);

// JSON.stringify converte um objeto/array para JSON (string)
console.log(JSON.stringify(users, null, 1));

// {"name":"Charmander","age":1}
console.log(JSON.stringify(user));

// JSON.parse converte um JSON (string) em um objeto/array
var pokemon = JSON.parse('{"name":"Charmander","age":1}');

console.log(pokemon);

// Requisição assíncrona

// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/mikehgo');
// xhr.send(null);

// xhr.onreadystatechange = function () {
//     // 4 -> operação concluída
//     if (xhr.readyState === 4) {
//         var response = JSON.parse(xhr.responseText);
//         console.log(response.id);
//     }
// }

// Promises
var myPromise = function (username) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/'+username);
        xhr.send(null);

        xhr.onreadystatechange = function () {
            // 4 -> operação concluída
            if (xhr.readyState === 4) { // espera terminar a requisição
                if(xhr.status === 200) {                        
                    // sucesso
                    var response = JSON.parse(xhr.responseText);
                    console.log("Deu certo!");
                } else {
                    // erro
                    reject('Erro na requisição')
                }
            }
        }
        // resolve -> função que será chamada se tive sucesso
        // reject -> função que será chamada se houver erros
    });
}

// myPromise('mikehgo').then(function(response){
//     console.log(response);
// })
// .catch(function(error){
//     console.log(error);
// });

axios.get('https://api.github.com/users/mikehgo').then(function(response){
    console.log("axios", response);    
    console.log(response.data);
})
.catch(function(error){
    console.log("axios", error);
});

setInterval(function(){
    console.log('Código que será executado após 3s')
}, 3000);