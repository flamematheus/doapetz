// atividade nivel basico 1


/*
const idade = Number(prompt("digite sua idade:"))
if (idade >=18) {
    alert(`${idade}   maior de idade`)
} else (idade<=18) 
    alert(`${idade}   menor de idade`)



//atividade 2
const numero = Number(prompt("digite um numero :"))
if (numero >0) {
    alert(`numero positivo ${numero}`)

    
}if (numero <0) {
    alert(`numero negativo ${numero}`)
    
} else {    alert ("😑😑😑")
    
}

//atividade 3

const nota = Number(prompt("digite sua nota : (EX 0 a 100) :"))
 


if (nota >= 60) {
    alert("Aprovada")
    
}  if (nota <=59 ){
    alert("Reprovado")
    
}else{
    alert ("não foi dessa vez .😑😑😑")
    
}
   

//atividade 4

const numero = Number(prompt("digite um numero :"))
if (numero >0) {
    alert(`numero positivo ${numero}`)
   } if (numero === 0) {
        alert(`numero zerado :   ${numero}`)
    } else if (numero<0) {
        alert(`numero  é negativo `)
    
} else {    
    alert (" fim 😑😑😑")
   
}

//atividade 5
const idade = Number(prompt("digite sua idade :"))
if (idade <=12) {
    alert("criança")

    
}if (idade >=13  && idade <=17) {
    alert("adolecente")
    
} else {
    alert("adulto")
    
}

//atividade 6

const numero = Number(prompt("digite um numero:"))
if (numero % 2  === 0) {
    alert(`numero e par`)
    
} else {
    alert(`numero e impar`)
    
}


// atividade Nível Intermediário

//Calculadora simples:
const numero = Number(prompt("digite um numero:"))
const operação = prompt("digite uma operação : +  -   *  / ")
const numero1 = Number(prompt("digite um numero:"))
const soma = numero +numero1
const menos= numero -numero1
const multi= numero *numero1
const divi= numero /numero1

if (operação === "+" ) {
    alert(`resultado:${soma}`)
    
}else if (operação === "-" ) {
    alert(`resultado:${menos}`)
    
}else if (operação === "*" ) {
    alert(`resultado:${multi}`)

    
}else if (operação === "/") {
    alert(`resultado:${divi}`)
    
}else{
    alert("poderia digitar de novo")
}



// 2  atividade Maior entre três números:

const n1 = Number(prompt("digite o Primeiro Numero:"))
const n2 = Number(prompt("digite o Segundo  numero:"))
const n3 = Number(prompt("digite o terceiro  numero:"))


if (n1 >= n2 && n1 >=n3) {
    alert(`o primeiro numero ${n1} e maior `)
    
} else if (n2 >= n1 && n2 >= n3) {
    alert(`o  numero ${n2} e maior `)
    
} else if (n3 >= n2 && n3 >= n1) {
    alert(`o primeiro numero ${n3} e maior `)
    
} else{

    alert("fim")
} 
    

*/

//atividade Desconto em compras



/*
 // imc


const altura = Number.isNaN( prompt("digite o sua altura(m)"));
const  peso =Number.isNaN (prompt("digite o sua peso (kg)"));

const imc = (altura **2)/peso
if (Number.isNaN(peso)|| Number.isNaN(altura)) {
    console.log("digite apenas numeros")
    
} else if (peso <= 0 || altura <=0){
    console.log("peso e altura devem ser positivos!") 
}else if (altura > 3) {
    console.log("altura parece estar errado.digite em metros(1.75)")  
}else {
    const imc =peso /(altura**2)
    console.log(`seu imc :${imc.toFixed(2)}`);

    if (imc <18.5) {
        console.log("abaixo do peso!")
        
    } else if (imc<25) {
        console.log("peso normal ")
        
    }else if (imc < 30) {
        
        console.log("sobrepeso")
    }else {
        alert("obsidade")
        
    }
}
    
*/
