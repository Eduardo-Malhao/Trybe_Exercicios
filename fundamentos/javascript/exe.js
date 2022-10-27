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

// let verificaPalindrome = 'arara';
// console.log(verificaPalindrome);

// function spliter (inicialstring) {
//     let splitado = verificaPalindrome.split("")
//     let reverse = splitado.reverse()
//     let juntado = reverse.join("")

// if (juntado === verificaPalindrome){
//    console.log('True'); 
// }

// else {(console.log('False'))};
// }
// spliter(verificaPalindrome)

// console.log(verificaPalindrome.split("").reverse().join("") === verificaPalindrome);

//exebonus01

// let romanos = {
// I:'1',
// II: '2',
// III: '3',
// IV:'4',
// V:'5',
// VI: '6',
// VII: '7',
// VIII: '8',
// IX:'9',
// X:'10',
// XL:'40',
// L:'50',
// XC:'90',
// C:'100',
// CD:'400',
// D:'500',
// CM:'900',
// M:'1000',
// }

// let numberR = 'XV'

// function calculadora (numberR) {
//     let spliter = numberR.split("");
//        for(let i = 0; i < spliter.length; i += 1){
//            console.log(romanos[spliter[i]]);
//            if(romanos[spliter[i-1]] < romanos[spliter[i]]){ 
//             console.log(romanos[spliter[i-1]] - romanos[spliter[1]]);
//             }
            
//             else if(romanos[spliter[i-1]] === romanos[spliter[i]]) {
//                console.log(romanos[spliter[i-1]] + romanos[spliter[i]]);
//             }
            
//             else if(romanos[spliter[i-1]] > romanos[spliter[i]]) {
//                 console.log(romanos[spliter[i-1]] + romanos[spliter[i]]);
//             }
//        }
//     }

// calculadora(numberR)

// exebonus02

// const basket = [
//     'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
//     'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
//     'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
//     'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
//     'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
//     'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
//     'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
//     'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
//     'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
//     'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
//     'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
//     'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
//     'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
//     'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
//     'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
//     'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
//     'Banana', 'Pera', 'Abacate', 'Uva',
//   ];
// function count (basket) {
//     let contadorMelancia = 0
//     let contadorBanana = 0
//     let contadorPera = 0
//     let contadorUva = 0
//     let contadorJaca = 0
//     let contadorLaranja = 0
//     let contadorAbacate = 0
    
//     for(let fruit in basket) {
//         if(basket[fruit] === 'Melancia'){
//             contadorMelancia += 1
//         } 
//         else if(basket[fruit] === 'Banana'){
//             contadorBanana += 1
//         }
//         else if(basket[fruit] === 'Pera'){
//             contadorPera += 1
//         }
//         else if (basket[fruit] === 'Uva'){
//             contadorUva += 1
//         }
//         else if(basket[fruit] === 'Jaca'){
//             contadorJaca += 1
//         }
//         else if(basket[fruit] === 'Laranja'){
//             contadorLaranja += 1
//         }
//         else if(basket[fruit] === 'Abacate'){
//             contadorAbacate += 1
//         }
//     }
//     console.log(`Melancia ${contadorMelancia}, Banana ${contadorBanana}, Pera ${contadorPera}, Uva ${contadorUva}, Jaca ${contadorJaca}, Laranja ${contadorLaranja}, Abacate ${contadorAbacate}`);
// }
// count(basket)

//exebonus03

// let moradores = {
//     blocoUm: [
//       {
//         nome: 'Luiza',
//         sobrenome: 'Guimarães',
//         andar: 10,
//         apartamento: 1005,
//       },
//       {
//         nome: 'William',
//         sobrenome: 'Albuquerque',
//         andar: 5,
//         apartamento: 502,
//       },
//     ],
//     blocoDois: [
//       {
//         nome: 'Murilo',
//         sobrenome: 'Ferraz',
//         andar: 8,
//         apartamento: 804,
//       },
//       {
//         nome: 'Zoey',
//         sobrenome: 'Brooks',
//         andar: 1,
//         apartamento: 101,
//       },
//     ],
//   };

// for(let i in moradores){
//     for(let i2 in moradores[i]){
//         moradores[i][i2]['fullName'] = moradores[i][i2].nome + " " + moradores[i][i2].sobrenome
//     }
// }
//   console.log(moradores.blocoDois[moradores.blocoDois.length-1].fullName + moradores.blocoDois[moradores.blocoDois.length-1].andar + moradores.blocoDois[moradores.blocoDois.length-1].apartamento);
