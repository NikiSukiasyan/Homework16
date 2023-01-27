// 1 პუნქტი

function isOdd(n) {
  return n % 2 === 0;
}
console.log(isOdd(10));

// 2 პუნქტი

function getCurrencySymbolFromCode(Currency) {
  if (Currency === "USD") {
    console.log("$");
    return "$";
  }
  if (Currency === "EUR") {
    console.log("€");
    return "€";
  }
  if (Currency === "GEL") {
    console.log("ლ");
    return "ლ";
  }
  return;
}
getCurrencySymbolFromCode("USD");
getCurrencySymbolFromCode("EUR");
getCurrencySymbolFromCode("GEL");

// პუნქტი 3

function convertToLowerCase(str) {
  let lowerCaseString = str.toLowerCase();
  console.log(lowerCaseString);
  return lowerCaseString;
}

convertToLowerCase("MY NAME IS NIKI");

// პუნქტი 4

function filterEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// პუნქტი 5

function findObjectByName(objects, name) {
  return objects.find((object) => object.name === name);
}

let objects = [
  {
    name: "Giorgi",
    age: 17,
  },
  {
    name: "Eka",
    age: 35,
  },
  {
    name: "lado",
    age: 20,
  },
];
console.log(findObjectByName(objects, "Eka"));

// პუნქტი 6

function CalcExpense(income, expense) {
  const profit = income - expense;
  return profit;
}
let jan = CalcExpense(100, 30);
let feb = CalcExpense(180, 70);
let mar = CalcExpense(250, 150);

console.log(jan);
console.log(feb);
console.log(mar);
