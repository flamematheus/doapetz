let minhavariavel = 10;
console.log(minhavariavel);
 
minhavariavel = "ola mundo!!!";
console.log(minhavariavel);

minhavariavel = true
console.log(minhavariavel);

let numero = 10;
let texto = "20";

let resultado = numero + texto ;
console.log(resultado)


//isso é um comentario de linha unica

/*

isso e um cometario 
de multiplas linhas

*/
console.log("isso vai executar"); // mais isso aqio e ignorado

let nome = "Lucas"
let Nome = "Maria"
let NOME = "João"
console.log(nome);
console.log(Nome);
console.log(NOME);

// palavras reservadas
//let ,const , var ,if , else ,for, while,function ,return , class , new switch,case


//regras de nomenclatura
// pode começar com letra, _ou $ 
//pode conter letras, numeros,_ou $
// não pode : começar  com numero 
//não pode ter espaços
//não pode usar acentos

let nome2;
let nomeCompleto ;
let _contador;
let idade2;

// nomes de funçoes começar com verbos:
function calcularmedida(){

}
function buscarusuario (){

}
// tipos primitivos 
// number - numero 
const preco = 19.9;
console.log(typeof preco);

// string - texto 
const nome3 = "lucas";
console.log(typeof nome3);

// boolean - verdadeiro ou falso
const ativo = true;
console.log(typeof ativo);

//null - ausencia intencional de valor
const vazio = null;
console.log(typeof  vazio);

//undefined - variavel sem valor
let indefinido;
console.log(typeof indefinido);

//bigint - numeros muito garndes
const grande = 5512626262626632n;
console.log(typeof grande);

//valores especiais : NaN e infinity
//// infinity - divisao por zero 
console.log(5/0);
console.log(-5/0);

//NaN (not a Number ) - operação invalida
console.log("abc"*3 );
console.log(Math.sqrt(-1));
console.log(0/0);

//checar se e NaN 
console.log(Number.isNaN("abc" * 3));

function calculartotal(preco,quantidade){
    const total = preco * quantidade ;

    if (Number.isNaN(total)) {
        console.log("Erro :preço ou quantidade invalidos");
        return 0;
        
    }
    return total;
}
console.log(calculartotal("abc", 2));
console.log(calculartotal(10,5));

//strings e template literals 
// // aspas simoles , duplas ou crase

const nome4 ="lucas";
const nome5 =" maria";
const nome6 = 'joão';

//propriedades e metodos
const  nomecompleto2 ="matheus alves ferreira"
console.log(nomecompleto2.length);
console.log(nomecompleto2.toUpperCase());
console.log(nomecompleto2.toLowerCase());
 
//TEMPLATE STRING (crase) - permite inserir variaveis
const nome7 = "lucas";
const idade = "20";

console.log(`ola, meu nome é ${nome7} e tenho ${idade} anos.`);

//conversoes  de tipo 
console.log(Number("123"));
console.log(parseInt("10.9"));
console.log(parseFloat("10.9"));
console.log(String(123));
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(""))
console.log(Boolean("oi"))

const texto2 = prompt("digiteum numero :");
console.log(texto2 + 5);
alert(texto2 + 5);

const numero2 = Number(prompt("digite um numero :"))
console.log(numero2 + 5);
alert(numero2 + 5);


//operadores aritmeticos