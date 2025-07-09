/*компілатор ts файлів - tsc myFile.ts

1. Встановлення TypeScript:
Перед використанням команди tsc потрібно переконатися, що TypeScript встановлено глобально в системі. Це можна зробити за допомогою менеджера пакетів npm (Node Package Manager): npm install -g typescript. 

2. Компіляція файлу:
Для компіляції окремого файлу, наприклад, myFile.ts, використовуйте команду: tsc myFile.ts. Це створить JavaScript файл з такою ж назвою, але з розширенням .js (в нашому випадку myFile.js). 

3. Компіляція декількох файлів:
Щоб скомпілювати кілька файлів, можна перелічити їх через пробіл: tsc file1.ts file2.ts file3.ts. Також можна використовувати символи узагальнення, наприклад, tsc *.ts для компіляції всіх файлів з розширенням .ts в поточній папці. 

4. Використання tsconfig.json:
Для великих проектів рекомендується використовувати конфігураційний файл tsconfig.json. Для автоматичного створення цього файлу з налаштуваннями за замовчуванням можна виконати команду tsc --init у корені проекту. Потім, для компіляції всього проекту, використовуйте команду tsc без параметрів, якщо вона виконується в каталозі з файлом tsconfig.json. 

5. Опції компіляції:
Компілятор tsc підтримує різні параметри, які дозволяють налаштувати процес компіляції, наприклад, цільову версію ECMAScript, каталог виводу тощо. 

6. Режим "watch":
Для автоматичного перекомпілювання файлів TypeScript при їх змінах, можна використовувати опцію -w або --watch: tsc myFile.ts -w. 

7. Помилки компіляції:
TypeScript компілятор перевіряє код на помилки, і якщо вони є, виводить повідомлення про них в консоль. Однак, він все одно продовжує компіляцію файлу в JavaScript, якщо це не заборонено параметрами.

*/


/* Базові типи */
// Тип рядок

let myFirstName: string = "Ruslan";
alert(myFirstName)
myFirstName = "Ruslan1";
let age: number = 35;
let isOwner: boolean = true;
let myProfile: undefined = undefined;
let myCity: null = null;
let myMoney:unknown = null;
let value1: any = "unknown";

/*Структура об'єктів*/
let myFirstProfile: {
  myName: string,
  myAge: number,
  myFirstCity: any,
} = {
  myName: "Ruslan",
  myAge: 35,
  myFirstCity: "Konotop",
}
myFirstProfile.myName = "R";

/*Масиви та кортежі*/
const numbersMassive: number[] = [1, 2];
//або
const numbersMassive2: Array<number> = [1, 2];

//Приклад:
var newArr:number[][] = [
  [5, 6], 
  [7, 8],
];
console.log(`другий елемент в першому підмасиві ` + newArr[0][1]); // повертає другий елемент в першому підмасиві;
console.log(`кількість елементів в масиві - в цьому випадку маємо 2 масиви `+ newArr.length); //повертає кількість елементів в масиві;

newArr [1][0] = 0; // змінює 7 на 0;
console.log('значення з індексом 1, 2 є ' + newArr[1][0]);// тепер значення з індексом 1, 2 є 0;



//кортежі 
const numbersMassive1: [number, string] = [10, "string"];
const numbersMassive4: [string, string] = ["10", "string"];

/*функції*/

function getYouName(name:string): string {
  return name;
}
getYouName("Ruslan")

let f1s = ():string => "f1s";
let sayHi = ():any => alert("Привіт");
let double = (n=1):number => n * 2;

let sum = function(a=0, b=0):number {
  let result = a + b;

  return result;
};

function getYouAge(my1Name:string): number {
  return 35;
}
getYouAge("Ruslan")

function getYouValue(my1Name?:string): number { // my1Name? - ? означає, що параметр необов'язковий
  return 35;
}
getYouValue()

const ageYourDog = (nameDog?:string): number => 5;
ageYourDog();

/*REST*/
function myFullName(firstName1: string, ...names: string[]) {
  return firstName1 + " " + names.join(' ')
}
myFullName("string", "string")

/*функціональне перенавантаження*/
function getInfoForMy(name?:string): string;
function getInfoForMy(age?:number): number;
function getInfoForMy(single?:boolean): boolean;
function getInfoForMy(value?:any): any {
  return value;
};
getInfoForMy(10) // маємо 2 перенавантаження. повертається те значення, яке викликаємо в функції.

/* класи та типи */
class Animal {
  name: string
  constructor(name:string) {
    this.name = name
  }
  getAnimalName(){
    return this.name
  }
}
const CAT = new Animal('Alina')

CAT.getAnimalName()
CAT.name

class Animal1 {
  private name1: string // тепер name приватне та не викликається з зовні
  constructor(name1:string) {
    this.name1 = name1
  }
  getAnimalName1(){
    return this.name1
  }
}
const CAT1 = new Animal1('Alina')

CAT1.getAnimalName1()

/*Інтерфейси*/
interface infoForUser {
  name: string,
  age: number,
  isAdmin: boolean,
} 
let userInfo: infoForUser = {

} as infoForUser

interface myWork {
  work: string,
}
// щоб об'єднати два інтерфейси потрібно в ...interface infoForUser {... додати extends та myWork, щоб получилось ...interface infoForUser extends myWork {...

/* Типи */
type infoForUser1 = {
  name: string,
  age: number,
  isAdmin: boolean,
} & myWork1 // & myWork1 об'єднує  infoForUser1 та myWork1

type myWork1 = {
  work: string,
}

let userInfo1: infoForUser = {
  
} as infoForUser1

type tName = string | number; // знак | означає, що тип tName може бути string abo number

//tName можемо використовувати для того щоб присвоїти тип змінній в середині типу:
// type infoForUser1 = {
//    name: tName,
//    age: number, ...


/*Enum*/
// Зарезервовані константи
enum colors {
  red,
  green,
  blue,
}

const blue:colors = colors.blue;

/*Assertions затвердження*/
const someValue: any = "44532"
const strLength: number = (someValue as string).length
// ми затверджуємо, що someValue є типу string  та отримуємо поле ).length 

/*Generic (узагальнення)*/
function getCar <T>(params:T): T { //T це тип
  return params
}
getCar("string") // T стає string
getCar(Number(1)) // Т стає number

function getCarN <T extends string>(params:T): T { //T це тип, який по замовчуванню обов'язково буде string
  return params
}
getCarN("string") // T стає string
//getCarN(Number(1)) // Т викликає помилку

/*Utility Types*/
//дозволяє трансформувати типи всередині інтерфейсів

interface infoForUser2<> {
  name: string,
  age: number,
  isAdmin: boolean,
} 
const myProfile2: Pick<infoForUser2, 'name'> = {
name: "Ruslan",
}
//Pick<infoForUser2, ''> дозволяє отримати окремі поля.
//Omit<infoForUser2, ''> дозволяє прибрати окремі поля.
//Partial<infoForUser2> роблять поля не обов'язковими.
//Required<infoForUser2> роблять поля обов'язковими, якщо вони раніше були не обов'язковими напр. name?: string,.
//Readonly<infoForUser2> роблять поля тільки для читання та не дозволяє редагувати.
// Можна комбінувати Readonly<Pick<infoForUser2, ''>>
//Record <string, number>, який зобов'язує (age: number) age бути рядком, а number числом, типи в рекорд можна змінювати