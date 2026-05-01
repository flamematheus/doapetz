//filter 


 //for each
/*
 const  frutas =["maçã","banana","uva"];
 frutas.forEach((element,index)=>{
console.log(index,element);
 })


 for (let i =0 ; i <frutas.length ; i++){
     console.log(i,frutas[i])
 }

// callback
//Array.metodo((element,index,array)=>{   });




 //for each
 const  frutas =["lucas","maria","joão"];
 
 alunos.foreach ((nome,index)=>{
        console.log(`${index + 1} aluno: ${nome}`);
});


/// const exercicos 

const people = [
    {nome:"lucas",age:36},
    {nome:"maria",age:17},
    {nome:"joão",age:18},
    {nome:'ana',age:22},
];

const novoarray = Array.filter((Element)=>{
    return condicao;

});

const maiores = people.filter((person)=>{
    return person.age >=18;
});

console.log(maiores)


const numeros = [1,2,3,4,5,6,7,8]


const numerospares = numeros.filter((par)=>{
    return par % 2  === 0;

});
console.log(numerospares)

const nums = [10,55,80,20,100];



const maiores = nums.filter((N)=>{
    return N >=50;
});

console.log(maiores)



const people = [
    {nome:"lucas",age:36},
    {nome:"maria",age:17},
    {nome:"joão",age:18},
    {nome:'ana',age:22},
];


//map

const nomes = people.map((person)=>{
    return person.nome.toUpperCase();
});
console.log(nomes);


const numeros = [1,2,3,4,5];

const dobro = numeros.map((numero)=>{
    return numero *2;
})
console.log(dobro);


const produtos = ["mouse","teclado","monitor"];

const frases = produtos.map((produto)=>{
    return `produtos :${produto}`
})
console.log(frases)



const pessoas = [
     {nome:"lucas",idade:35},
    {nome:"maria",idade:17},

];

const resultado = pessoas.map((pessoa)=>{
    return {
        nome:pessoa.nome,
        maiorIdade:pessoa.idade >= 18
    };
});
console.log(resultado);


const precos = [100,200,300];

const desconto = precos.map((des)=>{
    return des *0.9;
})
console.log(desconto);

//use map para transforma :[1,2,3,4]

const produtos = [1,2,3,4];

const frases = produtos.map((produto)=>{
    return `numero :${produto}`
})
console.log(frases)

// find

const people = [
    {nome:"lucas",age:36},
    {nome:"maria",age:17},
    {nome:"joão",age:18},
    {nome:'ana',age:22},
];
const maria =people.find((person)=>{
    return person.nome === "maria";
}) 
console.log(maria);


//encontrar o numero 

const numeros = [ 5,10,15,20,25];

const num =numeros.find((maior)=>{
    return maior >18 ;
}) 
console.log(num);


const usuarios = [
    {id:1 , nome:"lucas"},
    {id:2 , nome:"maria"},
    {id:3 , nome:"joão"},
];

const usuario =usuarios.find((u)=>{
    return u.id === 2 ;
});
console.log(usuario);


const numeros = [ 5,8,-2,10,-7];

const num =numeros.find((maior)=>{
    return maior <0 ;
}) 
console.log(num);



//reduce

 Array.reduce((acc,Element)=>{
    return novoacc;
 },valorinicial);


 const numero = [10,20,30,]

 const soma = numero.reduce((acc,numero)=>{
    console.log("ACC",acc);
    console.log("numero atual:",numero);
    return acc + numero ;
 },0);
 console.log(soma)

 


const people = [
    {nome:"lucas",age:36},
    {nome:"maria",age:17},
    {nome:"joão",age:18},
    {nome:'ana',age:22},
];


const totalidade = people.reduce((acc,person)=>{
    return acc + person.age;
    
},0)
console.log(totalidade)

const people = [
    {nome:"lucas"},
    {nome:"maria"},
    {nome:"joão"},
    {nome:'ana'},
];

const nomes = people.reduce((acc,person)=>{
    return  acc + " "+ person.nome;

},"");
console.log(nomes);


const numeros = [ 2,3,4];

const soma = numeros.reduce((acc,numero)=>{
    return acc * numero ;
 },1);
 console.log(soma)

 */

 const carrinho = [
    {produto :"mouse",preco:50},
    {produto :"teclado",preco:100},
    {produto :"monitor",preco:900},
 ];
 const soma = carrinho.reduce((acc,numero)=>{
    return acc + numero.preco ;
 },0);
 console.log(soma)




