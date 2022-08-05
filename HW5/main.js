// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function area(a, b) {
//     let res = a * b;
//     return res;
// }
//
// console.log(area(10,15));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function areaCircle(r) {
//     return 3.14*(r*2);
//
// }
// let res = areaCircle(5)
// console.log(res);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function areaCylinder(r,h) {
//     return (2*3.14)*r*h;
// }
// let res = areaCylinder(5, 10);
// console.log(res);


// - створити функцію яка приймає масив та виводить кожен його елемент

// function arreyItems(array) {
//     for (const item of array) {
//      console.log(item);
//     }
// }

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let enterText = 'Okten'
// function paragraph(text) {
//     document.write(`<p>${text}</p>`)
//
//
// }
//
// paragraph(enterText);



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let set=[1,1,1];
//
// function fun(arr) {
//
//
//     console.log(`<ul>`)
//
//     for (let i = 0; i < arr.length; i++) {
//           arrNumd = arr[i];
//           console.log(`<li>${arrNumd}</li>`)
//
//     }
//     console.log(`</ul>`)
// }
//  fun(set);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

//
// function num(text, numOfLi) {
//
//           document.write(`<ul>`)
//
//     for (let i = 0; i < numOfLi; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//       document.write(`</ul>`)
// }
// num('Okten',3)





// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arrBool = [5,'Okten','word', true];
//
// function arrPrim(arr) {
//      document.write(`<ol>`) ;
//
//      for (const arrElement of arr) {
//           document.write(`<li>${arrElement}</li>`)
//      }
//
//      document.write(`</ol>`)
//
//
// }
//
// arrPrim(arrBool);




// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let arrObj = [
//      {id:12, name:'Tom', age:30},
//      {id:15, name:'Ben', age:25},
//      {id:17, name:'Mike', age:42},
//
// ];
//
// function arrNom(arr) {
//
//      for (let i = 0; i < arr.length; i++) {
//          document.write(`<div><h1>id:${arr[i].id} name:${arr[i].name} age:${arr[i].age}</h1></div>`)
//
//      }
// }
//
// arrNom(arrObj);


// - створити функцію яка повертає найменьше число з масиву

// let number = [456,8,6,35,5,525,7,-87,81,-52];
//
// function returMin(arr) {
//       let num =arr[0];
//      for (let i = 0; i < arr.length; i++) {
//           if (num>arr[i]){
//                num = arr[i];
//           };
//
//      }
//      document.write(num);
//      return num;
//
// }
//
// returMin(number);




// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arrNumb = [5,5,5,2,6,7];

function sum(arr) {
     let numb = 0;
     for (let i = 0; i < arr.length; i++) {
          const arrElement = arr[i];
          numb += arrElement;

     }

     document.write(numb);
     return numb;
}

sum(arrNumb);








