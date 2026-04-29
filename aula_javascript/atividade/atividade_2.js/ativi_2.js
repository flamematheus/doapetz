
 /*
 //1.Contagem de 1 a 10:**
    //Use um `for` para exibir os números de 1 a 10 no console.

//for 
console.log("Comtando de 1 a 10 :\n")
for (let i = 1;i <=10; i++) {
    console.log(`numero :${i}`)  
}

//2. Tabuada de um número:**
    // Peça um número ao usuário.
    //Exiba a tabuada desse número de 1 a 10 usando um `for`.

const numero = prompt("digite um numero:")

console.log("Comtando de 1 a 10 :\n")
for (let i = 1;i <= 10 ; i++) {
const resultado = numero * i;
    console.log(` ${numero }x ${i} =${resultado} `)  
}

//3. **Soma dos primeiros N números naturais:**
    // Peça um número `N` ao usuário.
    // Use um `while` ou `for` para somar os números de `1` até `N`.
    //Exemplo: Se um usuário inserir o número 4, o código deverá fazer a soma do 1, 2, 3 e 4 totalizando **10**.

let soma = 0;
let numero =Number(prompt("digite um numero : de 1 a n"));

for (let i =1 ;i <= numero;i++){
    soma +=i;
}
console.log(`soma dos valores e :${numero}  = ${soma}`);



//1.Exibir os números pares de 1 a 50:**
    //Use um `for` ou `while` para exibir apenas os números pares de `1` a `50`.

const numero = Number(prompt("digite um numero:"));
   
for (let i =1 ;i <= 50;i++){
    if (i % 2  === 0) {
    alert(`numero ${i}`)   
}    
} 

//2.*Jogo de adivinhação:**
// Gere um número aleatório de 1 a 100.
// Peça ao usuário para adivinhar e use um `while` para continuar até ele acertar.
    //Informe se o número inserido é maior ou menor que o correto.


const numerosecreto = Math.floor(Math.random()*100)+ 1 ;
//Math.random 0.0 0.99999 .....
//*10 0.0. 9.9999 ....
//Math.floor 0 -9
// + 1 0 - = 1 -10
let palpite = 0;
let tentativas = 0;
console.log("adivinh o numero entre 1 a 100") ;
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
 

//3. **Contagem regressiva:**
    // Peça um número ao usuário e exiba uma contagem regressiva até 0 usando um `while`.


    let com = 10 ;
        console.log("iniciando contagem  regressiva ...");

while (com >= 0) {
    console.log(`${com}...`);

    com--
    
}
    console.log("zerooo !!!");


//1. **Soma dos dígitos de um número:**
    // Peça ao usuário um número inteiro positivo.
    //Use um `while` para somar seus dígitos.

let numero = Number(prompt("digite o primeiro numero "))

let soma =0 
while(numero >0){
    let digito = numero % 10;
    soma += digito
    numero =Math.floor(numero/10)
}
console.log(`soma dos digitos :${soma}`)

*/

//2. **Fatorial de um número:**
    //- Peça um número ao usuário.
    //- Use um `for` ou `while` para calcular o fatorial desse número.


