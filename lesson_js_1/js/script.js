"use strict"

let money;

function start() {
    do {
        money = +prompt('Ваш месячный доход?', 5000);

    } while (isNaN(money)  || money === '' || money === 0);
}

start();

const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'еда, обучение');
const deposit = confirm('Есть ли у вас депозит в банке?');

console.log(addExpenses.split(','));

function wordype(word) {
    return typeof word
}

console.log(wordype(money));
console.log(wordype(addExpenses));
console.log(wordype(deposit));

function getExpensesMonth() {

    let sum = 0;

    for (let i = 0; i < 2; i++) {
        
        if (i === 0) {
            prompt('Какие обязательные ежемесячные расходы у вас есть?');
        }
        else{
            prompt('Какие обязательные ежемесячные расходы у вас есть?');
        }

        sum += +prompt('Во сколько это обойдется?', 500);
    }

    return sum;
}

function getAccumulatedMonth() {

    return(money - getExpensesMonth())
}

let accumulatedMonth = getAccumulatedMonth()

console.log(`Бюджет за месяц ${accumulatedMonth}`);

let mission = 8000

let budgetDay = Math.floor(accumulatedMonth / 30)

function getTargetMonth() {
    let target = Math.ceil(mission / accumulatedMonth)

    if (target > 0) {
        console.log('Цель будет достигнута!');
        return (`Сколько месяцев осталось до цели: ${target}`)
    }else{
        return ('Цель не будет достигнута!')
    }


}

console.log(getTargetMonth());


function getStatusIncome() {

    if (budgetDay > 800){
        return('Высокий уровень дохода');
    }

    else if (budgetDay > 800 && budgetDay > 300){
        return('Средний уровень дохода');
    }

    else if (budgetDay < 300 && budgetDay > 0){
        return('Низкий уровень дохода');
    }

    else if (0 > budgetDay){
        return('Что то пошло не так');
    }
}

console.log(getStatusIncome());












