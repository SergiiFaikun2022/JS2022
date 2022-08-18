/*- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone*/

// function User(id,name,surname,email,phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;

// }
//---------------------------------------------------------------------
/*створити пустий масив, наповнити його 10 об'єктами new User(....)*/
//
// let users = [];
//
// user1 = new User(1,'Ben','Benuch','wwwww@gmail.com',123456);
// user2 = new User(22,'Glen','Glenuch','qqqqqq@gmail.com',4545434);
// user3 = new User(3,'Bob','Bobuch','eeeee@gmail.com',4543543);
// user4 = new User(44,'Tom','Tomuch','rrrrrr@gmail.com',53435435);
// user5 = new User(5,'Bil','Biluch','tttttt@gmail.com',14545434);
// user6 = new User(66,'Sem','Semuch','yyyyyy@gmail.com',24544252);
// user7 = new User(7,'Rick','Rickuch','uuuuuu@gmail.com',10542542);
// user8 = new User(88,'Sid','Siduch','iiiiii@gmail.com',4544422);
// user9 = new User(9,'Garry','Garruch','ooooooo@gmail.com',1554222);
// user10 = new User(10,'Cory','Coruch','sssssss@gmail.com',452425452);
//
// users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(users);
//----------------------------------------------------------------------------------
/*- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)*/
//
// let num = function (arr){
//        if (arr.id % 2 === 0) {
//            return arr;
//        }
// };
// let userCouples = users.filter(num);
// console.log(userCouples);

//варіант 2

// let userCouples = users.filter(user =>{
//     if (user.id %2===0){
//         return user;
//     }
// });
// console.log(userCouples);

//-----------------------------------------------------------------

/*- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/

// let s = users.sort((a,b)=>a.id-b.id);
// console.log(s);
//------------------------------


/*- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)*/


// class Client{
//
//
//     constructor(id, name, supername, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.supername = supername;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
/*створити пустий масив, наповнити його 10 об'єктами Client*/
/*- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)*/


// let client = new Client(1,'Mike','Mikel','wqwq@gmail.com',12345,['milk','beer','coca-colla']);
// console.log(client);
// //------------------------------
// let clients = [];
//
// let client1 = new Client(5,'Mike','Midfkel','wqwq@gmail.com',123345,['milk','beer','coca-colla','bred']);
// let client2 = new Client(6,'Tom','Mikaael','wqwq@gmail.com',12345555,['milk','beer','coca-colla','voter','sugar']);
// let client3 = new Client(12,'Gnom','Mhhikel','wqwq@gmail.com',1234544,['milk','beer']);
// let client4 = new Client(17,'Bom','Mijjkel','wqwq@gmail.com',12345544,['milk','beer','coca-colla']);
// let client5 = new Client(21,'Lom','Gffkel','wqwq@gmail.com',1234125,['milk','beer','coca-colla']);
// let client6 = new Client(13,'Ben','Sfkel','wqwq@gmail.com',1234545,['milk','beer']);
// let client7 = new Client(16,'Kokos','Hikel','wqwq@gmail.com',1235445,['milk','beer','coca-colla']);
// let client8 = new Client(18,'Abricos','DGikel','wqwq@gmail.com',124345,['milk']);
// let client9 = new Client(21,'Sem','Fggkel','wqwq@gmail.com',1234545,['milk','beer','coca-colla']);
// let client10 = new Client(31,'Din','Bnkel','wqwq@gmail.com',1234555,['milk','beer','coca-colla']);
//
// clients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
// console.log(clients);
//
// let clientSort = clients.sort((a, b) => a.order.length - b.order.length);
// console.log(clientSort);

//----------------------------------------------------------------------------------------------
/*- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
 швидкість, об'єм двигуна. додати в об'єкт функції:*/
/*-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`*/
/* -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`*/
/*-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed*/
/*-- changeYear (newValue) - змінює рік випуску на значення newValue*/
/*-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

// function Car(model, produser, year, max_speed, engine_capacity) {
//
//     this.model = model;
//     this.produser = produser;
//     this.year = year;
//     this.max_speed = max_speed;
//     this.engine_capacity = engine_capacity;
//     this.drive=function (){
//         console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
//
//     }
//     this.info=function (){
//         for (const key in this) {
//             if (typeof this[key] !=='function'){
//              console.log(`${key} - ${this[key]}`)
//             }
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed){
//         this.max_speed = this.max_speed + newSpeed;
//     };
//
//      this.changeYear = function (newValue){
//          this.year += newValue;
//      }
//      this.addDriver = function (driver){
//          this.driver = driver;
//      }
//
//
//
// }
//
// let volvo = new Car('xc60', 'volvo', 2022, 250, 2.0);
// console.log(volvo);
// volvo.drive();
// volvo.info();
// volvo.increaseMaxSpeed(50);
// console.log(volvo);
// volvo.changeYear(1);
// volvo.addDriver({name:'Petia', surname:'Petkin'});
// console.log(volvo);
//
//---------------------------------------------------------

/*- (Те саме, тільки через клас)*/
/*Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
додати в об'єкт функції:*/
/*-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`*/
/*              -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`*/
/*           -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed*/
/*                -- changeYear (newValue) - змінює рік випуску на значення newValue*/
/*             -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/
//
// class Car1{
//
//     constructor(model, produser, year, max_speed, engine_capacity) {
//         this.model = model;
//         this.produser = produser;
//         this.year = year;
//         this.max_speed = max_speed;
//         this.engine_capacity = engine_capacity;
//     }
//
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
//     }
//
//     info(){
//         for (const key in this) {
//             if (typeof this[key] !=='function'){
//                 console.log(`${key} - ${this[key]}`)
//             }
//         }
//     }
//
//     increaseMaxSpeed(newSpeed){
//         this.max_speed = this.max_speed + newSpeed;
//     }
//
//     changeYear(newValue){
//         this.year += newValue;
//     }
//
//     addDriver(driver){
//         this.driver = driver;
//     }
//
// }
//
// let volvo = new Car1('xc60', 'volvo', 2022, 250, 2.0);
// console.log(volvo);
// volvo.drive();
// volvo.info();
// volvo.increaseMaxSpeed(50);
// console.log(volvo);
// volvo.changeYear(1);
// volvo.addDriver({name:'Petia', surname:'Petkin'});
// console.log(volvo);

/*                                                                                                                                                                                                                                                                    -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.*/
/*Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.*/
/*За допомоги циклу знайти яка попелюшка повинна бути з принцом.*/
/*Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/



class Cindirella{

    constructor(name, year, footSize) {
        this.name = name;
        this.year = year;
        this.footSize = footSize;
    }
}

let cindirella1 = new Cindirella('Dina', 23, 33);
let cindirella2 = new Cindirella('Nina', 24, 35);
let cindirella3 = new Cindirella('Linda', 25, 36);
let cindirella4 = new Cindirella('Lors', 27, 37);
let cindirella5 = new Cindirella('Kira', 28, 32);

let arr = [cindirella1,cindirella2,cindirella3,cindirella4,cindirella5];

console.log(arr);


class Prince extends Cindirella{
    constructor(name,age,findFootSize) {
        super(name,age);
        this.findFootSize = findFootSize;

    }
}


prince = new Prince('Ben', 30, 36);

function findPrincess(arr,prince){
    for (const value of arr) {
        if (value.footSize===prince.findFootSize){
            return `you my princess ${value.name}`;
        }
    }
}

console.log(findPrincess(arr, prince));


let findPrinc = arr.find(value => value.footSize === prince.findFootSize);
console.log(findPrinc);