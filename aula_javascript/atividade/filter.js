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

 const carrinho = [
    {produto :"mouse",preco:50},
    {produto :"teclado",preco:100},
    {produto :"monitor",preco:900},
 ];
 const soma = carrinho.reduce((acc,numero)=>{
    return acc + numero.preco ;
 },0);
 console.log(soma)



// contador de letras 


const palavras = ["oi","jatascript","html"];

const soma = palavras.reduce((acc,p)=>{
    return acc + p.length;
},0)
console.log(soma)

const numeros = [10,45,7,99,32]

const soma = numeros.reduce((acc,numero)=>{
    if (numero > acc) {
        return numero;
        
    } 
    return acc;

},  numeros[0]);
console.log(soma)

const produtos = [
    {nome:"mouse",preco :50},
    {nome:"teclado",preco :200},
    {nome:"monitor",preco :900},
    {nome:"notebook",preco :3000},
];


const resultado = produtos.filter((produto)=>{
    return produto.preco >100;
})
.map((produto)=>{
    return produto.nome;
});
console.log(resultado)




const filmes =  [
    {nome:"vingadores",nota :9},
    {nome:"batman",nota:7},
    {nome:"dragon boll",nota:10},
    {nome:"matrix",nota:8},
];

//use filter para pegar nota >=8

const maiores = filmes.filter((person)=>{
    return person.nota >=8;
});
console.log(maiores)

//use map para pegar apenas nomes

const resultado =filmes.map((produto)=>{
    return produto.nome;
});
console.log(resultado)

//use find para encontrar "batman"
const nomes =filmes.find((person)=>{
    return person.nome === "batman";
}) 
console.log(nomes);

//use reduce para somar todas as notas
const soma = filmes.reduce((acc,numero)=>{
    return acc + numero.nota ;
 },1);
 console.log(soma)
 


 //switch

 const dia = 3;


 switch (dia) {
    case 1:
        console.log("domingo");
        break;
    case 2:
        console.log("segunda");
        break;
    case 3:
        console.log("terça");
        break;
 
    default:
        console.log("dia invalido!")
        break;
 }


 //switch1
 const n1 = 10;
 const n2 = 5;
 
 const operacao = "/";

 switch (operacao) {
    case "+":
        console.log(n1+n2);
        break;
    case "-":
        console.log(n1-n2);
        break;
    case "*":
        console.log(n1*n2);
        break;
 
    case "/":
        console.log(n1/n2);
        break;
    default:
        console.log(" operção invalido!")
        break;
}

 const nota = prompt("digite sua nota : A,B,C ou D");
 
 switch (nota) {
    case "A":
        console.log("Excelente");
        break;
    case "B":
        console.log("bom");
        break;
    case "C":
        console.log("regular");
        break;
 
    case "D":
        console.log("ruim");
        break;
    default:
        console.log(" operção invalido!")
        break;
}
*/
//crie um sistema de menu de videogame:

 let opcao;
do {

    opcao = Number(prompt(`

        === menu ====
        1 -> jogar
        2 -> configurações
        3 -> creditos
        4 -> sair 
        ============

        `
    ));
  
    switch (opcao) {
    case 1:
        console.log("🎮jogar: aperte start");
        break;
    case 2:
        console.log("⚙️configurações");
        break;
    case 3:
        console.log(" 😎😎😎 criado por matheus ");
        break;
 
    case 4:
        console.log("🏃💨sair");
        break;
    default:
        console.log("❎❎❎ operção invalido!")
        break;
}
    
} while (opcao !== 4);


//1 jogar
//2 configurações
//3 creditos
//4 sair 