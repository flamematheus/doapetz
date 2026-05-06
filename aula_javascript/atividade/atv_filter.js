
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
 