var number = 5;
var floatNumber = 6.9;
var name = "João";
var canShow = false;
var nam = 'Mike H G'

var array = [1, 2, 3, 4, 5];
var array2 = ["A", "B", "C"];
var array3 = [1, "B", 5.6, false];
var arrayMult1 = [ 
    [1,2],
    [3,4],
    [5,6]
];

console.log("Hello word");

console.log(number);
console.log("Number = " + number);
console.log("Name", name);
console.log("N: ", nam);
console.log(number, floatNumber, name, canShow);
console.log("GO LIVE NOW VAI!");
console.log(array, array2, array3);
console.log(arrayMult1);
console.log(arrayMult1.length);
console.log(arrayMult1[0].length);

// operações aritméticas
var n1 = 5;
var n2 = 10;
var r1 = n1 + n2;
var r2 = n2 - n1;
var r3 = n1 * n2;
var r4 = n2/n1;
var r5 = n2 % n1; // resto
var r6 = "10" + 5;
console.log(r1, r2, r3, r4, r5, r6);
// Condições
var age = 15;
if (age == 15){
    console.log("Idade é 15");
}

var id = "10";
// Com === verifica se a tipagem é igual e se os valores são iguais
if (id === 10){
    console.log("Id é 10");
}
console.log(10 < '9');
// Com !== verifica se a tipagem é diferente e se os valores também são diferentes
if (age != 10) {
    console.log("Idade é diferente de 10");
}

if (id >= 10 && id <= 20) {
    console.log("Id entre 10 e 20");
}

var myVar = false;
var potato; // undefined
var var2 = null;
var pudim = 0;
var var3 = false;

console.log(potato);
console.log(var2);
if (pudim && potato){
    console.log("Verdade");
}
else if (!var3) {
    console.log("Falso");
    
} else {
    console.log("Falso");
}

var name = "João 2";
var text = (name === "João") ? "João & Maria" : "Não tem João";
console.log(text);

var n1 = 5;
var result = (n1 >= 10) ? 10: 0;
console.log("Resultado:",result);

// Objeto
var person = {
    nome: "Maria",
    sexo: "Feminino",
    idade: 20,
    endereco: {
        rua: "Rua vinte e quatro",
        numero: 123,
        referencias: ["primeiro", "segundo"]
    },
    display: function() {
        console.log("oi");
    }
};
person.nome = "Maria da Silva Fulana";
console.log("Person idade:",person.idade);
console.log(person);

var nome = person["nome"]; // person.nome
var propriedade = "endereco";
var rua = person[propriedade]["rua"];
console.log("Nome:",nome);
console.log(rua);
console.log(person["endereco"].referencias[1]);

//Funções
function printMessage() {
    console.log("mensagem..");
}
printMessage();

function calcular(n1, n2) {
    return n1 * n2;
}
var resultado = calcular(5, 10);
console.log(calcular(2, 4));

var printMessage2 = function () {
    console.log("outra mensagem");
}
printMessage2();

// Criando funções como variáveis
var printMessage2 = function (mensagem) {
    console.log("Texto:"+mensagem);
}

var calculate2 = function (n1, n2) {
    printMessage2("olá, tudo bem?");
    var color = "azul";
    return n1 / n2;
}

/* Cria uma função que recebe um valor (mensagem) como parâmetro,
e uma função responsável por imprimir uma mensagem

*/
var print = function (value, printFunction, user) {
    printFunction(value);
    console.log(user)
    user.display();
}
print("Aluhamora", printMessage2, person);

var count = 0;
while(count <= 2) {
    console.log(count);
    count++;// count = count +1;
}

var count2 = 3;
// vai executar pelo menos uma vez se a condição de para for false
do {
    console.log("Count2 =", count2);
    count2++;
} while(count2 <=2);


for (var i = 0; i < 4; i++) {
    console.log("i =", i);
}

console.log("For decrescente");
for (var i = 50; i >= 20; i -= 10){
    console.log("i =",i);           
}

var linha = 1;
console.log("Linha =", i++);
console.log("Linha após =", i);

var coluna = 1;
console.log("Coluna =", ++coluna);
console.log("Coluna após =", coluna);