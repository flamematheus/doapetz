/*
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

const texto2 = prompt("digite um numero :");
console.log(texto2 + 5);
alert(texto2 + 5);

const numero2 = Number(prompt("digite um numero :"))
console.log(numero2 + 5);
alert(numero2 + 5);


//operadores aritmeticos
console.log(2+3) //soma
console.log(5-2)//subtração 
console.log(4*2)// multiplicação
console.log(10/2)//divisão
console.log(10%3)//resto da divisão 
console.log(2**3)//potencia

console.log(2+3*4);
console.log((2+3)*4); 

//operadores de comparação
console.log(5 == "5");//true - valores são iguais (apos conversão)
console.log(5 == 5 );// true - valores são iguais

console.log(5 === "5"); // false -tipos diferentes (number vs string)
console.log(5 === 5); // true- valor e tipo iguais

console.log(5 != "5") ;// false - valor não são diferentes (apos a conversão)
console.log(5 != 7); //true - valores são diferentes 


console.log(5 !== "5"); //true - sao diferentes(tipos diferentes)
console.log(5 !== 5);//false - não são diferentes(identicos)

console.log(!true);
console.log(!false);

const idade3 = 15;
console.log(idade3 >=18);
console.log(!(idade3 >=18));

const nome8 = ""
const  nomevazio = nome8 === "";
console.log(nomevazio)

const nomenaovazio = nome8 !== "";

console.log(!!true);

//estrutura sequencial (entrada -processamento - saida)


//entrada
const nome9 = prompt("digite seu nome :")
//processamento
//saida
console.log("ola ,"+ nome9 + "!")

 const n1 = Number(prompt("digite um primeiro numero :"));
 const n2 = Number(prompt("digite um segundo numero :"));
 
 const soma = n1 + n2 ;

 alert ("resultado :"+ soma);


const numerO = Number(prompt("digite um primeiro numero :"));
const dobro = numerO * 2;

alert (`o dobro de ${numero}e ${dobro}`);


const nota = Number(prompt("digite um primeiro numero :"));
const nota1 = Number(prompt("digite um segundo numero :"));

const media = (nota+nota1)/ 2;
    if (media>=7) {
        alert
    
 } else {
    
 }

alert (`media e: ${media.toFixed(1)}`);


const anos = Number(prompt("digite sua idade em anos :"));

const meses = anos * 12;
alert(`idade imformada em meses é ${meses}`);
const dias = anos * 365;
alert(`idade imformada em anos é ${dias}`);
const horas = dias * 24;
alert(`idade imformada em  horas é ${horas}`);
const minutos = horas * 60;
alert(`idade imformada em minutos é ${minutos}`);

*/

// celsius - fahrenheit

// formula :f= (c X 9/5 )+ 32


const celsius = Number(prompt("temperatura:"));

const formula = (celsius *(9/5)) + 32;
    alert(`A temperatura é:${formula}`)

if (formula >= celsius) {
    alert(`o calor esta muito baixo 😒`)
    
} else {
        alert(`se e louco não compensa😑😑😑😑 .`)

}
