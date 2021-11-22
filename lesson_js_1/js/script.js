"use strict"

const money = +prompt('Ваш месячный доход?', 5000);
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'еда, обучение');
const deposit = confirm('Есть ли у вас депозит в банке?');

console.log(addExpenses.split(','));

function type(word) {
    return typeof word
}

console.log(type(money));
console.log(type(addExpenses));
console.log(type(deposit));

const expenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
const expensesAmount1 = +prompt('Во сколько это обойдется?', 500);

const expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
const expensesAmount2 = +prompt('Во сколько это обойдется?', 500);

function getExpensesMonth() {
    return(expensesAmount1 + expensesAmount2)
}

function getAccumulatedMonth() {
    return(money - getExpensesMonth())
}

let accumulatedMonth = getAccumulatedMonth()

console.log(`Бюджет за месяц ${accumulatedMonth}`);

let mission = 8000

let budgetDay = Math.floor(accumulatedMonth / 30)

function getTargetMonth() {
    return(`Сколько осталось месяцев до цели ${Math.ceil(mission / accumulatedMonth)}`)
}

console.log(getTargetMonth());






// function getStatusIncome() {

//     if (budgetDay > 800){
//         return('Высокий уровень дохода');
//     }

//     else if (budgetDay > 800 && budgetDay > 300){
//         return('Средний уровень дохода');
//     }

//     else if (budgetDay > 300 && budgetDay > 0){
//         return('Низкий уровень дохода');
//     }

//     else if (0 > budgetDay){
//         return('Что то пошло не так');
//     }
// }
// console.log(getStatusIncome())













