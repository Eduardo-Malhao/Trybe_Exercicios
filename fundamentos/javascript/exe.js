// const currentHour = 22
// let message = ""

// if (currentHour === 22) {
//   console.log(message = 'Não deveríamos comer nada, é hora de dormir');
// }

// else if (currentHour >= 18 && currentHour <= 22) {
//   console.log(message = 'Rango da noite, vamos jantar :D');
// }

// else if (currentHour == 14 && currentHour <= 18) {
//   console.log(message = 'nhaaa')
// } 

//exe 02

// let weekDAy = 'nhaa'
// // let weekDAys = ['seg' , 'ter' , 'quar' , 'quin' , 'sex']

// if (weekDAy === 'segunda' || weekDAy === 'terca' || weekDAy === 'quarta' || weekDAy === 'quinta' || weekDAy === 'sexta') {
//   console.log('trybe')
// }

// else {
//   console.log('fds')
// }

// if (weekDAys.includes(weekDAy)){
//   console.log('trybe');
// }
// else {
//   console.log('fds');
// }

//exe03

// var sequence = [1, 1, 2, 3, 5, 8, 13];
// for (var i = 0; i < sequence.length; i++) {
//   console.log(sequence[i]);
// }

// let num = 0;
// for(let index = 0; index <= 100; index+=1 ){
//     console.log(num += index);
// }

// exe 04
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//     console.log('ola ' + info.personagem);
  
//     info['recorrente'] = 'sim';
//     console.log(info);
//     for(let objeto in info) {
//         console.log(objeto);
//         console.log(info[objeto]);
// }

// // exe05
// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };
//   leitor['fullName'] = leitor.nome + " " + leitor.sobrenome;

//     console.log(leitor.fullName + " livro nhaa " + leitor.livrosFavoritos[0].titulo);

//     leitor.livrosFavoritos[1] =
//         {
//             titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//             autor: 'JK Rowling',
//             editora: 'Rocco',
//         }

// console.log("julia tem " + leitor.livrosFavoritos.length + " livros favoritos");

// exe06

let verificaPalindrome = ["xablau"];
console.log(verificaPalindrome);

function spliter (verificaPalindrome) {
    return verificaPalindrome.split(),
    console.log(verificaPalindrome);
}
function reverser (verificaPalindrome){
    return verificaPalindrome.reverse(),
    console.log(verificaPalindrome);
}
function joiner (verificaPalindrome) {
    return verificaPalindrome.join(),
    console.log(verificaPalindrome);
}
 
console.log(verificaPalindrome);
