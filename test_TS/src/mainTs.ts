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

//кортежі 
const numbersMassive1: [number, string] = [10, "string"];
const numbersMassive4: [string, string] = ["10", "string"];

/*функції*/

function getYouName(name:string): string {
  return name;
}
getYouName("Ruslan")

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
