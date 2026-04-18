
 /*
const idade = 15
if (idade >=18) {
    alert(`${idade}manor de idade`)
}

if (idade>=18) {
    alert(`${idade}manor de idade`)
    
} else {
    alert(`${idade}menor de idade`)
    
}
//operadores
const a = 10 ;
const b = 5 ;

console.log("10 > 5:",a > b );
console.log("5 > 10:",b > a);

console.log("5 < 10:",a > b );
console.log("10 < 5:",b > a );

console.log("10 >=5", a>=b);
console.log("5 >= 10", b>=a);

// operador && (E / AND)
const idade1 = 20;
const temdocumento = true;
const estanalista = true;

if (idade>=18 && temdocumento && estanalista) {
   alert("pode entrar !!!") 
    
} else {
    alert("não pode entrar!!!")
    
}
// operador || (OU / OR )

const temdinheiro = false;
const temcartao = true;
const tempix = false;

if (temdinheiro || temcartao || tempix) {
    alert("pode pagar !!")
    
} else {
    alert("não tem como pagar !!") 
}

const usuario = "admin";
const senha  = "1234";

const senhacorreta = (senha ==="1234");
const ehadmin = (usuario === "admin");
const ehgerente = (usuario === "gerente");

if ((ehadmin&&senhacorreta)||(ehgerente&&senhacorreta)) {
    alert("acesso liberado")
    
} else {
    alert("acesso negado")    
}

if ((ehadmin || ehgerente) &&senhacorreta){
     alert("acesso liberado")
    
} else {
      alert("acesso negado")  
    
}

////



const senhacorreta1 = Number (prompt("digite a senha:"))
const ehadmin1 =String (prompt("digite o e-mail:"));
 
const acesso1 = (senhacorreta1 === 1234 && ehadmin1 === "email")
const acessouso = (senhacorreta1 === "user" && ehadmin1 === "email123")


if ((acesso1 ||acessouso )) {
    alert("acesso liberado")
    
} else {
    alert("acesso negado")    
}


const Nota = 75;
if (nota >= 80) {
    alert("Aprovada")
    
} else if (nota >=60 ){
    alert("Recuperação")
    
}else{
    alert("Reprovado")
}

const temp = Number(prompt("Temperatura atual  C:"));
if(Number.isNaN(temp)){
    alert("temperatura invalida!")
}else if (temp<0){
    alert("temperatura de 0 c");
}else if (temp <= 15){
    alert("frio");

}else if (temp <= 25){
    alert("Agradavel")

}else if (temp <= 35){
    alert("Quente")
}else {
    alert("dead")
}



if(Number.isNaN(temp)){
    
}else if (temp<0){
    alert("temperatura de 0 c");
}else if (temp >=0 && temp <=15){
    alert("frio");
}else if(temp >15 &&  temp <= 25){
    alert("agradavel")
}else if(temp >25 &&  temp <= 35){
    alert("quente")
}else{
    alert("DEAD")
}



 /*
//Atividade : semaforo (estrutura condicional)
//imagine que voce esta desenvolvendo um sistema simoles para simular o funcionamento de um semaforo
o programa deve solicitar ao usuario que digite a cor atual do semaforo,podendo ser 
verde
amarelo
vermelho
com base na cor informada, o sistema deve exibir uma mensagem correnpondente:
 se for verde mostrar "siga"
 se for amarelo mostre "atenção"
 se for vermelho - mostrar "pare"
 caso seja digitado qualquer outro valor mostrar x "cor invlida "
 
*/




 const  verde ="siga"
 const amarelo = "atenção"
 const vermelho ="pare"

 const cor = prompt("digite a cor").toLowerCase().trim();

if(cor === verde){
    alert("o final esta verde :siga") 
}else if (cor ===amarelo){
    alert("o final esta amarelo :Atenção");

}else if(cor ===vermelho){
    alert("o final esta vermelho:Pare")
}else{
    alert("cor invalida")
}



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
    
