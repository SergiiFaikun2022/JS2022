// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

//  const arrMax = (a,b,c) => {
//         let numb = 0;
//         if (a>b && a>c){
//             document.write(a);
//         }else if(b>a && b>c){
//             document.write(b);
//         }else if (c>a && c>b){
//             document.write(c);
//         }
//  }
//
// arrMax(1, 5, 3);

// - створити функцію яка повертає найбільше число з масиву

// let array = [4, 4545, 556];
//
// const numb = (arr) => {
//     let aElement = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//
//         if (aElement < arr[i]) {
//             aElement = arr[i];
//         }
//
//     }
//     document.write(aElement);
//
//
// }
// numb(array);

// - створити функцію яка повертає найменьше число з масиву

// let arranNum = [54, 25, 98, 36, 45, 78];
// const minNum = (arr) => {
//     let arrElement = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arrElement > arr[i]) {
//             arrElement = arr[i];
//
//         }
//
//     }
//     document.write(arrElement);
//
// };
// minNum(arranNum);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let sum = [5,5,10];
//
// const sumPlus = (arr) => {
//    let plus = 0;
//     for (let i = 0; i < arr.length; i++) {
//         plus += arr[i];
//
//     }
//     document.write(plus);
// }
// sumPlus(sum);
//
//
//
//
// - Дано натуральное число n. Выведите все числа от 1 до n.

// let n = 10;
// const number = (num) => {
//
//     for (let i = 0; i < num-1; i++) {
//
//         document.write(`${i+1} `);
//     }
//
// }
// number(n);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае.
//
//
// const bool1 = (a,b) => {
//     let num = 0;
//     if (a<b){
//         for (let i = a-1; i < b; i++) {
//             document.write(`${i + 1} `);
//
//         }
//     }else if(a>b){
//         for (let i = b-1; i < a; i++) {
//
//             document.write(`${i + 1} `);
//         }
//
//     }
// };
// bool1(15, 10);




//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]





//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.forEach()