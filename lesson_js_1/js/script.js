let money = 100;

let income = "фриланс";

let addExpenses = "Еда, карандаши, трамвай";

let deposit = true;

let mission = 123321;

let period = 7;

console.log(money, income, deposit);
console.log(income.length);
console.log(`Период ${period}`);
console.log(`Цель заработать ${mission} долларов`);
console.log(addExpenses.toLocaleLowerCase().split(','));

let budgetDay = money / 30;

console.log(bugetDay, money%30);

