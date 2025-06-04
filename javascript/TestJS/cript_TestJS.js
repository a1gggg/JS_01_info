"use strict"
// Суворий режим перевірки
/*


// вірний код :
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // для кожного i...

  for (let j = 2; j < i; j++) { // шукаємо дільник..
    if (i % j == 0) continue nextPrime; // не просте, беремо наступне i
  }

  alert( i ); // просте число
}



function generateFibonacci(limit) {
    let fibonacciSequence = [0, 1]; // Початкові числа
    let nextNumber = 1;

    while (nextNumber <= limit) {
        fibonacciSequence.push(nextNumber);
        nextNumber = fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2];
    }

    return fibonacciSequence;
}

const limit = 1000;
alert(generateFibonacci(limit));
//**********************************************


function generateFibonacci1 (limit1) {
    // Початкові значення: a — поточне число, b — наступне число у послідовності.
    let a = 0, b = 1;
    // Рядок, у який накопичуватимемо отримані числа
    let resultString = "";

    // Поки поточне число не перевищує ліміт
    while (a <= limit1) {
        // Додаємо поточне число до результатного рядка з розділювачем
        resultString += a + ", ";

        // Обчислюємо наступне число Фібоначчі як суму двох попередніх
        let nextNumber1 = a + b;
        // Зсуваємо значення: тепер b стає поточним числом, а nextNumber – новим наступним
        a = b;
        b = nextNumber1;
    }

    // Видаляємо зайву кому і пробіл наприкінці рядка
    return resultString.slice(0, -2);
}

const limit1 = 1000;
alert (generateFibonacci1 (limit1));

// Цей варіант одразу друкує кожне число в консоль без накопичення їх у змінній. Попробуйте обидва варіанти та виберіть той, що більше підходить для ваших потреб!

function printFibonacci2(limit2) {
    let a = 0, b = 1;
    while (a <= limit2) {
        console.log(a);
        let nextNumber2 = a + b;
        a = b;
        b = nextNumber2;
    }
}

printFibonacci2(1000);
*/

