// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
//     що дорівнює 1, 0, -3
//


// let x = prompt();
// if (x!==0){
//     console.log('Вірно')
// }else {
//     console.log('Невірно');
// }




//
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті
// години попадає число
// (в першу, другу, третю или четверту частину години).
//

// let time = +prompt('Enter number');
//
// if (time>=0 && time<=15 ){
//     console.log('first quarter');
//
// }else if(time>15 && time<=30){
//     console.log('second quarter');
//
// }else if (time>30 && time<=45){
//     console.log('third quarter');
//
// }else if (time > 45 && time <= 59) {
//     console.log('fourth quarter')
// }else {
//     console.log('ERROR')
// }


//
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця
// потрапляє це число (у першу, другу чи третю).

// let day = prompt('enter number');
//
// if (day>0 && day<=10){
//     console.log('first');
//
// }else if (day>10 && day<=20){
//     console.log('second');
//
// }else if (day > 20 && day <= 31) {
//     console.log('third');
// }else{
//     console.log('ERROR')
// }



//
//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

//
// let schedule = +prompt('enter number')
//
// switch (schedule) {
//     case 1:
//         console.log('Monday')
//         break;
//     case 2:
//         console.log('Tuesday')
//         break;
//     case 3:
//         console.log('Wednesday')
//         break;
//     case 4:
//         console.log('Thursday')
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('7 days a week, try again');
//
// }


//
//
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//
// let first = +prompt('enter first number');
// let second = +prompt('enter second number');
//
// if (first>second){
//     console.log('first is bigger'+ ' ' + first);
// }else if (second > first) {
//     console.log('second is bigger' + ' ' + second);
// } else if (first == second) {
//     console.log('they are equal' + ' ' + first + '=' + second);
// }
//


//
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//         (хибноподыбне, тобто кастується до false)




let x = NaN;

if (x === false || x === '' || x === undefined || x === NaN || x === null || x === 0){
    x = "default";
    console.log(x);

}else {
    console.log('ok')
}









