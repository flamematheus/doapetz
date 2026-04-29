//while
//while (condition) {
    //codigo se repete enquanto a condição for true
    

//contagem de 1 a 5
/*
let contador = 1 ;
while (contador <= 5) {
    console.log("contagem :",contador);

    contador++
    
}

// contagem de 10 a 1

let com = 10 ;
        console.log("iniciando contagem  regressiva ...");

while (com >= 0) {
    console.log(`${com}...`);

    com--
    
}
    console.log("feliz ano novo !!!");


// validação de senha

const  senhacorreta = "123456";
let tentativa = "";
while (tentativa !== senhacorreta) {
    tentativa = prompt("dgite a senha :")
    if (tentativa === senhacorreta) {
        console.log("senha correta")
    } else {
        console.log("senha incorreta")
    }  
}

// somar numeros ate ultrapassar 100
let soma = 0;
let numero =1;
    console.log("somando numeros ate passar de 100 ...");

while (soma < 100) {
    soma += numero

    console.log(`${numero}soma parcial:${soma}`);

    numero++
}

console.log(`\n precisou de ${numero -1} numeros para ultrapassar 100`);
console.log("soma final :"+ soma);


const numero =Number(prompt("qual numero :"));
 if (Number.isNaN(numero)) {
    console.log("digite um numero valida !!!");
    
 } else {
    let multiplicador =1;
    console.log(`tabuada do ${numero} \n `) ;  

    while (multiplicador <= 10) {
        const resultado = numero * multiplicador;
        console.log(`${numero} x ${multiplicador} = ${resultado}`);

        multiplicador++;
    }

 }



let x= 10 ;
while (x < 5) {
    console.log("isso não vai aparecer")
    
}

let y = 10 ;
do {
    console.lo ("isso vai aparecer uma vez ")
} while (y < 5);
 




// MENU interavito 

let  opcao ;

do {
    console.log("\n  =========menu==========");
    console.log("1 - ver saldo");
    console.log("2 - fazer deposito");
    console.log("3 - fazer saque");
    console.log("0 - sair");
    console.log("===================\n ");

    opcao = prompt("escolha uma opção:")
    if (opcao === "1") {
        console.log("se saldo e de 1000,00")  
    } else if (opcao === "2") {
        console.log("deposito realizado !")  

    } else if (opcao === "3"){
        console.log("seque realizado")  
 
    }else if (opcao === "0"){
        console.log("ate logo !")  
    }else{
        console.log("opção inativa")  

    }
} while (opcao !== "0");



// jogo adivinha o numero 

const numerosecreto = Math.floor(Math.random()*10)+ 1 ;
//Math.random 0.0 0.99999 .....
//*10 0.0. 9.9999 ....
//Math.floor 0 -9
// + 1 0 - = 1 -10
let palpite;
let tentativas = 0;
console.log("adivinh o numero entre 1 a 10") ;
do {
    palpite = Number(prompt("seu palpite"));
     tentativas++

     if (Number.isNaN(palpite)) {
        console.log("digite um numero valido!")
        
     } else if(palpite < numerosecreto) {
        console.log("muito abaixo ! tente novamente")
        
     }else if(palpite > numerosecreto) {
        console.log("muito alto ! tente novamente")
        
     }else{
         console.log(`acertou o numero secreto é : ${numerosecreto}`)

          console.log(`precisou de ${tentativas}tentativas !`)


     }
} while (palpite !== numerosecreto);




//for 
console.log("Comtando de 1 a 10 :\n")
for (let i = 1;i <=10; i++) {
    console.log(`numero :${i}`)  
}

//tabuada 

const numero = Number(prompt("tabuada de qual numero ?"))
if (Number.isNaN(numero)) {
    console.log("numero invalido")
    
} else {
    console.log(`\n tabuada do ${numero}\n`);
    for (let i = 1; i<=10; i++){
        const resultado = numero * i;
        console.log(`${numero}x ${i}= ${resultado}`);

    }      
}


//numeros pares (0 -20)

console.log("Comtando de 0 a 20 :\n")
for (let i = 0;i <=20 ; i+=2) {
    console.log(`numero :${i}`)  
}



console.log("Comtando de 0 a 20 :\n")
for (let i = 1000;i >=0 ; i-=2) {
    console.log(`numero :${i}`)  
}

 
const altura = 5;
for(let linha =1; linha <= altura; linha ++){
    let asteriscos = "";

    for (let i  = 1 ; i <= linha ; i ++){
        asteriscos += "*"
    }
 console.log(asteriscos);
}

 // array(lista)

const frutas =["maçã","banana", "laranja","uva"];
 
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

console.log(frutas.length);

// for of 
for (const fruta of frutas){
    console.log(`-${fruta}`)
}

const numeros = [10,25,8,42,15,7,];

let soma = 0
for (const numero of numeros){
     soma +=numero ;
}

//objeto

const pessoa = {
    nome : "lucas",
    idade : 35,
    cidade:"santo andre",
    profissao:"professor "
}
console.log(pessoa.nome)
console.log(pessoa["idade"])

// for in 
for (const chave in objeto){

}

const aluno = {
    nome : "maria silva",
    matricula:"20223401",
    curso: "deseanvolvedor web",
    nota :9.5,
}
console.log("Dados do aluno :\n")
for(const chave in aluno){
    const valor = aluno[chave]
    console.log(`${chave}:${valor}`)
}

//estoque de produtos
const estoque ={
    "notebook ":15,
    "mause":50,
    "teclado":30,
    "monitor":8,
    "webcam":22

}
console.log("estoque :")
for (const produto in estoque ){
    const quantidade= estoque[produto];
    if (quantidade <10) {
        console.log(`${produto}:${quantidade}unidade (estoque baixo)`)
        
    } else {
        console.log(`${produto}:${quantidade} quantidade de unidade normal `)
        
    }
}

/// carrinho de compra para  ecommer ?


 //array

 const carrinho =[
    {produto:"camiseta",preco:49.90,Quantidade:2},
    {produto:"calça jeans",preco:129.90,Quantidade:2},
    {produto:"tenis",preco:500.90,Quantidade:1},
 ];

 let total =0;

 console.log("carrinho de compras : \n")

 for (const item of carrinho ){
    const subtotal=item.preco*item.Quantidade;

    total += subtotal

    console.log(`${item.produto} (${item.Quantidade}x)- R$v${subtotal.toFixed(2)}`)
 }

 console.log("\n"+"=".repeat(40));
 console.log(`TOTAL :R$ ${total.toFixed(2)}`);
 

 //break

 const numeros =[5,12,8,3,19,7,25];
const procurado = 19

console.log("procurando o numero",procurado)

for(const num of numeros){
    console.log("varificando :",num)

if (num ===procurado) {
    console.log("encontrado!!")
    break;
    
} 
}
console.log("loop deu certo")

//senha com limite de 3 tentativas

const senhacorreta = "acb123";

const maxtentativas = 3

for (let tentativa = 1 ;tentativa<=maxtentativas; tentativa++){
    const senha = prompt(`Tentativa ${tentativa}/${maxtentativas}-digite sua senha :`)

    if (senha === senhacorreta) {
        console.log("Acesso Liberado !");
        break;
        
    } else {
        console.log("senha incorreta!");
        if (tentativa=== maxtentativas) {
        console.log("conta bloqueada !");

        }
        
    }
}


//continue 

for (let i =1;i <=10 ; i++){
    if (i % 2 === 0) {
        continue ;
        
    }
    console.log(i)
}


const alunos = [ 
    {nome:"ana", nota:8.5},
    {nome:"bruno", nota:5.5},
    {nome:"carlos", nota:9.5},
    {nome:"diana", nota:4.5},
    {nome:"luana", nota:7.5},
];
console.log("alunos Aprovados]\n");
for(const aluno of alunos){
    if (aluno.nota < 7) {
        continue;  
    }
    console.log(`${aluno.nome} - nota : ${aluno.nota}`)
}
*/

const frase =  prompt("digite uma frase :");

const vogais = "AEIOUaeiou"

let contador = 0;

let vogaisencontradas = [];

for (const letra of frase ){
    if (vogais .includes(letra)){
        vogaisencontradas.push(letra)
        contador++
        

    }
}
console.log(`Frase:"${frase}"`);
console.log(`vogais encontrada:${contador}`);
console.log(`vogais encontrada:${vogaisencontradas}`);


