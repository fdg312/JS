"use strict"

const money = prompt('Ваш месячный доход?');
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'.split(','));
const deposit = confirm('Есть ли у вас депозит в банке?');

console.log(typeof money);
console.log(typeof addExpenses);
console.log(typeof deposit);

const expenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
const expensesAmount1 = prompt('Во сколько это обойдется?');

const expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
const expensesAmount2 = prompt('Во сколько это обойдется?');

let expensesAmount = expensesAmount1 + expensesAmount2;
let budgetMonth = money - expensesAmount;

console.log(budgetMonth);

let mission = 1000000

console.log(Math.floor(mission / (money - budgetMonth)) + 1);

budgetDay = Math.floor(budgetMonth / 30)

if (budgetDay > 800){
    console.log('Высокий уровень дохода');
}

else if (800 > budgetDay > 300){
    console.log('Средний уровень дохода');
}

else if (300 > budgetDay > 0){
    console.log('Низкий уровень дохода');
}

else if (0 > budgetDay){
    console.log('Что то пошло не так');
}


