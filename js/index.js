//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12];
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12];

// const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12, 1];
// function findSmallerNumber(number) {
//   return Math.min(...number);
// }
// console.log(findSmallerNumber(numbers));

//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.
// const arr = [2, 6, 24, 7, 35, 24, "hello", 9, "world"];

// function caclculateAverage(arr) {
//   let sumIteration = 0;
//   let sum = 0;

//   for (const arg of arr) {
//     if (typeof arg === "number") {

//       console.log(arg);
//       sum += arg;
//       sumIteration += 1;
//     }
//   }
//   return sum / sumIteration;
// }

// console.log(caclculateAverage(arr));

//Напиши функцію findLongestWord(string)
//яка приймає довільний рядок
//що складається лише з розділених слів
//пробілом (параметр string)
//і повертає найдовше слово у цьому рядку

// const string = "Nunc sed turpis a felis in nunc fringilla"

/* function findLongestWord(string) { 
  const words = string.split(" ");
  let longestWords = "";
  for (let word of words) { 
    if (word.length > longestWords.length) { 
      longestWords = word;
    }
  } return longestWords;
}
const string = "Nunc sed turpis a felis in nunc fringilla";
console.log(findLongestWord(string)); */

//У нас є об'єкт, у якому зберігатимуться зарплати
//нашої команди
//Напишіть код для сумування всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
//   John: 2870,
// };
// function getTotalSum(salaries) {
//   let total = 0;
//   for (const sp of Object.values(salaries)) {
//     total += sp;
//   }
//   return total;
// }
// console.log(getTotalSum(salaries));

// /Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//Рядок з назвою каменю.
//Функція повертає загальну вартість каменів
// //з ​​таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 6 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 150, quantity: 100 },
// ];

// function calcTotal(stones, stonesName) {
//   for (const stone of stones) {
//     if (stone.name === stonesName) {
//       return `Total ${stonesName} = ${stone.price * stone.quantity}`
//     }
//   }
// }
// console.log('stones :>> ', calcTotal(stones, "Смарагд"));

// Угруповання об'єктів студентів по курсам
// Створіть масив об'єктів, що являють собою різних студентів. Кожен об'єкт повинен містити властивості ім'я, вік та курс.
// Використовуйте цикл for...of, щоб згрупувати студентів за курсами.
// Результатом буде об'єкт, де ключами будуть назви курсів, а значення – масиви об'єктів студентів, що належать до відповідного курсу.
// Очікуванний результат:
// const groupedStudents = {
//   Java: [
//     { name: "Алиса", age: 20, course: "Java" },
//     { name: "Карл", age: 21, course: "Java" },
//   ],
//   Python: [{ name: "Боб", age: 22, course: "Python" }],
//   JavaScript: [{ name: "Джон", age: 23, course: "JavaScript" }],
// };
// const students = [
//   { name: "Алиса", age: 20, course: "Java" },
//   { name: "Боб", age: 22, course: "Python" },
//   { name: "Карл", age: 21, course: "Java" },
//   { name: "Джон", age: 23, course: "JavaScript" },
// ];
// function groupedStudents(students) {

//   const allStudents = {};
//   for (let student of students) {
//     console.log(allStudents[student.course]);

//     if (!allStudents[student.course]) {
//       allStudents[student.course] = [];
//     };
//     allStudents[student.course].push(student);
    // console.log(allStudents[student.course]);
    // console.log(allStudents);
  // }
//   return allStudents;
// }
// console.log(groupedStudents(students));
//~ Створи функцію яка приймає число від 0 до 59 і.визначає у котру чверть години
//~ Попадає це число (у першу, другу, третю або четверту).

// function getQuater(number) {
//   if (number >= 0 && number <= 14) {
//     return `Число ${number} підпадає під першу чверть.`;
//   } else if (number >= 15 && number <= 29) {
//     return `Число ${number} підпадає під другу чверть.`;
//   } else if (number >= 30 && number <= 44) {
//     return `Число ${number} підпадає під третю чверть.`;
//   } else if (number >= 45 && number <= 59) {
//     return `Число ${number} підпадає під четверту чверть.`;
//   } else {
//     return `Число ${number} не підпадає ні під яку чверть.`;
//   }
// }
// const askNumber = Number(prompt());
// console.log(getQuater(askNumber));

//~ Напиши функцію яка запитує у користувача ведення числа  1, 2, 3 або 4. Якщо вона має
//~ значення '1', то у змінну result запишемо 'зима', якщо має значення
//~ '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// function getSeason(number) {
//   let result = "";
//   switch (number) {
//     case 1:
//       result = "Зима";
//       break;

//     case 2:
//       result = "Весна";
//       break;

//     case 3:
//       result = "Літо";
//       break;

//     case 4:
//       result = "Осінь";
//       break;
//     default:
//       result = "Неправельно ведене значення";
//       break;
//   }

//   return result;
// }
// const season = Number(prompt());
// console.log(getSeason(season));

//~ Створи функцію logNumbers яка приймає min і max
//~ і виводить у консоль
//~ числа від max до min за спаданням
//~ Додайте усі парні числа від min до max і поверніть результат з функції

// function logNumbers(min, max) {
//   let numbers = 0;

//   for (let i = max; i >= min; i--) {
//     if (i % 2 === 0) {
//       numbers += i;
//     }
//   }
//   return numbers;
// }

// console.log(logNumbers(2, 55));

// Напишіть функцію fizzBuzz яка приймає число
//Якщо число ділитися на 3 повертати fizz
//якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

// function getfizzBuzz(number) {
//   if (number % 3 == 0 && number % 5 == 0) {
//     return "fizzbuzz";
//   } else if (number % 3 == 0) {
//     return "fizz";
//   } else if (number % 5 == 0) {
//     return "buzz";
//   } else return "Жодна умова не виконана";
// }
// console.log(getfizzBuzz(18));

//Завдання на самостійну роботу
//~Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"

// const userRule = prompt("Введіть логін");
// console.log("userRule: ", userRule);
 


// const userLogin = prompt("Введіть логін");
// if (userLogin === null || userLogin === "") {
//   console.log("Скасовано");
// } else if (userLogin === "Адмін") {
//   const userRule = prompt("Введіть пароль");
  
//   if (userRule === null || userRule === "") {
//     console.log("Скасовано");
//   } else if (userRule === "Я головний") {
//     console.log("Добрий день!");
//   } else {
//     console.log("Невірний пароль!");
//   }
// } else {
//   console.log("Я вас не знаю");
// }

// 9. Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх
// як властивості об'єкта
// sum() повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті)
// mult() перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// raise() возводить першу властивсть в ступінь другої і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// * винеси перевірку на наявність властивостей в об'єкті в окремий метод exist ()

// const calculator = {
//   read (a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum () {
//     if (this.exist()) {
//       const valuesSum = this.a + this.b;
//       return valuesSum;
//     }
//     return "Not values!";
//   },

//   mult () {
//     if (this.exist())
//     {const multiplyValues = this.a * this.b;
//   return multiplyValues;
// }
//   return "Not values!";
//   },
//   raise () {
//     if (this.exist()) {
//       const someValues =this.a**this.b;
//       return someValues;
//     }
//     return "Not values!";
//   },
//   exist () {
//     return this.a && this.b;
//     }
//   }
// 3. Напиши класс Notes який управляє коллекцієй нотаток у
// властивості items.
// Нотатка це  об'єкт з властивостями text, priority
// Додай класу статичну властивість Priority,
// в якій буде зберігатись об'єкт з пріорітетами ("high", "middle", "low").
// Додай методи getNotes(), addNote(note), removeNote(noteText)
// updatePriority(noteText, newPriority)
// class Notes {
//   static Priority = {
//     HIGH: "high",
//     MIDDLE: "middle",
//     LOW: "low",
//   };
//   constructor() {
//     this.items = [];
//   }
//   getNotes() {
//     return this.items;
//   }
//   addNote(note) {
//     this.items.push(note);
//   }
//   get getClientData() {
//     return { clientLogin: this.#login, clientEmail: this.#email };
//   removeNote(noteText) {
//     this.items = this.items.filter((item) => item.text !== noteText);
//   }
//   set changeEmail(newEmail) {
//     this.#email = newEmail;
//   updatePriority(noteText, newPriority) {
//     const item = this.items.find((item) => item.text === noteText);
//     if (item) {
//       item.priority = newPriority;
//     }
//   }
// }
// const client = new Client("Alex", "alex@gmail.com");
// console.log(client);
// console.log(client.getClientData);
// client.changeEmail = "alexgood@gmail.com";
// console.log(client.getClientData.clientEmail);
// const notes = new Notes();
// notes.addNote({ text: "Note1", priority: Notes.Priority.LOW });
// notes.addNote({ text: "Note2", priority: Notes.Priority.LOW });
// notes.addNote({ text: "Note3", priority: Notes.Priority.HIGH });
// notes.removeNote("Note2");
// notes.updatePriority("Note3", Notes.Priority.MIDDLE);
// console.table(notes.getNotes());
class Car {
  static maxPrice = 50000;
  #price;

  constructor(params) {
    this.#price = params.price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {

    if (newPrice <= maxPrice) {
      this.#price = newPrice;
    }
  }
}
const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
