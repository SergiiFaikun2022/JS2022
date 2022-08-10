// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let a = 'hello world';
// document.write(a.length);
//
// let b = 'lorem ipsum';
// document.write(b.length);
//
// let c = 'javascript is cool';
// document.write(c.length);




// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let arr1 ='hello world'
// console.log(arr1.toUpperCase());
//
// let arr2 ='lorem ipsum'
// console.log(arr2.toUpperCase());
//
// let arr3 ='javascript is cool'
// console.log(arr3.toUpperCase());




// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let a = 'HELLO WORLD';
// console.log(a.toLowerCase());
//
// let b = 'LOREM IPSUM';
// console.log(b.toLowerCase());
//
// let c = 'JAVASCRIPT IS COOL';
// console.log(c.toLowerCase());




// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let a = str.trimEnd();
// console.log(a.trimStart());



//---------------------------------------------------------------------------------------------


//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let string = 'Ревуть воли як ясла повні';
// function stringToarray(str){
//     let arr = str.split(' ');
//     console.log(arr);
// }
//
// stringToarray(string);


//
//-------------------------------------------------------------------------------------------------------------------------------------------
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let mass  = [10,8,-7,55,987,-1011,0,1050,0];
// let map = mass.map(value =>value.toString() );
//
// console.log(map);
// console.log(typeof map[0]); //перевірка чи string//







//------------------------------------------------------------------------------------------------------------------

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11, 21, 3, 45, 46, 26, -58];
//
// function compareNumbers(a,b) {
//     return a-b;
//
// }
//
// function sortNums(arr,direction) {
//
//     if (direction==='ascending'){
//       console.log(arr.sort(compareNumbers));
//   }else if(direction ==='descending'){
//
//     let r = arr.sort(compareNumbers).reverse();
//       console.log(r);
//   }
// }
//
// sortNums(nums,'descending');


//-----------------------------------------------------------------------------------------------------------

//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration));
// let filter = coursesAndDurationArray.filter(value => value.monthDuration>5);
// console.log(filter);

//---------------------------------------------------------------------------------------------------------------------
//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', 'spade', 'diamond', 'heart', 'clubs'
//     value: '', '6' , '10', 'ace', 'jack', 'queen', 'king', 'joker'
//     color:'', 'red', 'black'
// }





// let card = [
//     {cardSuit:'spade',value: '6', color:'red'},
//     {cardSuit:'diamond',value: '10', color:'black'},
//     {cardSuit:'spade',value: 'ace', color:'red'},
//     {cardSuit:'clubs',value: 'jack', color:'black'},
//     {cardSuit:'clubs',value: '9', color:'red'},
//     {cardSuit:'clubs',value: '10', color:'red'},
//     {cardSuit:'diamond',value: 'joker', color: 'black'}
// ];
//
// let aseSpader = card.filter(value =>value.cardSuit==='spade' && value.value==='ace' );
// console.log(aseSpader);
//
// let six = card.filter(value => value.value === '6');
// console.log(six);
//
// let red = card.filter(value => value.color === 'red');
// console.log(red);
//
// let diam = card.filter(value => value.cardSuit === 'diamond');
// console.log(diam);
//
// let clab = card.filter(value => value.cardSuit === 'clubs' && value.value >= 9);
// console.log(clab);

//----------------------------------------------------------------------------------------------------------------------
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


let cards = [
    {cardSuit: 'clubs', value: 'Ace', color:'black'},
    {cardSuit: 'clubs', value: 2, color:'black'},
    {cardSuit: 'clubs', value: 3, color:'black'},
    {cardSuit: 'clubs', value: 4, color:'black'},
    {cardSuit: 'clubs', value: 5, color:'black'},
    {cardSuit: 'clubs', value: 6, color:'black'},
    {cardSuit: 'clubs', value: 7, color:'black'},
    {cardSuit: 'clubs', value: 8, color:'black'},
    {cardSuit: 'clubs', value: 9, color:'black'},
    {cardSuit: 'clubs', value: 10, color:'black'},
    {cardSuit: 'clubs', value: 'Jack', color:'black'},
    {cardSuit: 'clubs', value: 'Queen', color:'black'},
    {cardSuit: 'clubs', value: 'King', color:'black'},

    {cardSuit: 'diamonds', value: 'Ace', color:'red'},
    {cardSuit: 'diamonds', value: 2, color:'red'},
    {cardSuit: 'diamonds', value: 3, color:'red'},
    {cardSuit: 'diamonds', value: 4, color:'red'},
    {cardSuit: 'diamonds', value: 5, color:'red'},
    {cardSuit: 'diamonds', value: 6, color:'red'},
    {cardSuit: 'diamonds', value: 7, color:'red'},
    {cardSuit: 'diamonds', value: 8, color:'red'},
    {cardSuit: 'diamonds', value: 9, color:'red'},
    {cardSuit: 'diamonds', value: 10, color:'red'},
    {cardSuit: 'diamonds', value: 'Jack', color:'red'},
    {cardSuit: 'diamonds', value: 'Queen', color:'red'},
    {cardSuit: 'diamonds', value: 'King', color:'red'},

    {cardSuit: 'hearts', value: 'Ace', color:'red'},
    {cardSuit: 'hearts', value: 2, color:'red'},
    {cardSuit: 'hearts', value: 3, color:'red'},
    {cardSuit: 'hearts', value: 4, color:'red'},
    {cardSuit: 'hearts', value: 5, color:'red'},
    {cardSuit: 'hearts', value: 6, color:'red'},
    {cardSuit: 'hearts', value: 7, color:'red'},
    {cardSuit: 'hearts', value: 8, color:'red'},
    {cardSuit: 'hearts', value: 9, color:'red'},
    {cardSuit: 'hearts', value: 10, color:'red'},
    {cardSuit: 'hearts', value: 'Jack', color:'red'},
    {cardSuit: 'hearts', value: 'Queen', color:'red'},
    {cardSuit: 'hearts', value: 'King', color:'red'},
    {value: 'Joker', color:'red'},

    {cardSuit: 'spades', value: 'Ace', color:'black'},
    {cardSuit: 'spades', value: 2, color:'black'},
    {cardSuit: 'spades', value: 3, color:'black'},
    {cardSuit: 'spades', value: 4, color:'black'},
    {cardSuit: 'spades', value: 5, color:'black'},
    {cardSuit: 'spades', value: 6, color:'black'},
    {cardSuit: 'spades', value: 7, color:'black'},
    {cardSuit: 'spades', value: 8, color:'black'},
    {cardSuit: 'spades', value: 9, color:'black'},
    {cardSuit: 'spades', value: 10, color:'black'},
    {cardSuit: 'spades', value: 'Jack', color:'black'},
    {cardSuit: 'spades', value: 'Queen', color:'black'},
    {cardSuit: 'spades', value: 'King', color:'black'},
    {value: 'Joker', color:'black'},

];


let reduce = cards.reduce(function (accunmulator, card) {

    if (card.cardSuit==='spades'){
        accunmulator.spades.push(card);
    }else if(card.cardSuit==='diamonds'){
        accunmulator.diamonds.push(card);
    }else if (card.cardSuit==='hearts'){
        accunmulator.hearts.push(card);
    }else{
        accunmulator.clubs.push(card)
    }
    return accunmulator;

},{ spades:[],diamonds:[],hearts:[],clubs:[]});

console.log(reduce);
