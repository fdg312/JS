"use strict"

let money;

function start() {
    do {
        money = +prompt('Ваш месячный доход?', 5000);

    } while (isNaN(money)  || money === '' || money === 0);
}

start();

let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 5000,
    period: 3,
    asking: function () {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'еда, обучение')

        appData.addExpenses = addExpenses.toLocaleLowerCase().split(',')
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++) {
            
            if (i === 0) {
                let expen1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'еда');
                let expenMoney1 = +prompt('Во сколько это обойдется?', 500);
                appData.expenses[expen1] = 0;
                appData.expenses[expen1] = expenMoney1;
            }
            else{
                let expen2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'образование');
                let expenMoney2 = +prompt('Во сколько это обойдется?', 500);
                appData.expenses[expen2] = 0;
                appData.expenses[expen2] = expenMoney2;
            }
        }
        console.log(appData.expenses);

        let sum = 0;

        for (let key in appData.expenses){
            sum += appData.expenses[key];
        }
        console.log(sum);
        appData.expensesMonth = sum
    },
    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth

        appData.budgetDay = Math.floor(appData.budgetMonth / 30)
    },
    getStatus: function () {
        if (appData.budgetDay > 800){
            return('Высокий уровень дохода');
        }
    
        else if (appData.budgetDay > 800 && appData.budgetDay > 300){
            return('Средний уровень дохода');
        }
    
        else if (appData.budgetDay < 300 && appData.budgetDay > 0){
            return('Низкий уровень дохода');
        }
    
        else if (0 > appData.budgetDay){
            return('Что то пошло не так');
        }
    },
    getTarget: function () {
        appData.period = Math.ceil(appData.mission / appData.expensesMonth)

        if (appData.period > 0) {
            console.log('Цель будет достигнута!');
            return (`Сколько месяцев осталось до цели: ${appData.period}`)
        }else{
            return ('Цель не будет достигнута!')
        }
    }
}


appData.asking()
appData.getBudget()

console.log(`Бюджет на месяц ${appData.budgetMonth}`);
console.log(`Бюджет на день ${appData.budgetDay}`);

console.log(appData.getTarget()); 
console.log(appData.getStatus());

console.log('Наша программа включает в себя данные:');
for (let key in appData){
    console.log(`Название: ${key} \n\nДанные: ${appData[key]}`)
} 






































// appData.getExpenses = function getExpensesMonth() {

//     let sum = 0;

//     for (let i = 0; i < 2; i++) {
        
//         if (i === 0) {
//             prompt('Какие обязательные ежемесячные расходы у вас есть?');
//         }
//         else{
//             prompt('Какие обязательные ежемесячные расходы у вас есть?');
//         }

//         sum += +prompt('Во сколько это обойдется?', 500);
//     }

//     return sum;
// }

// appData.getBudget = function getAccumulatedMonth() {

//     return(money - appData.getExpenses())
// }

// let accumulatedMonth = appData.getAccumulated()

// console.log(`Бюджет за месяц ${accumulatedMonth}`);

// let budgetDay = Math.floor(accumulatedMonth / 30)

// appData.getTarget = function getTargetMonth() {

//     let target = Math.ceil(appData.mission / accumulatedMonth)

//     if (target > 0) {
//         console.log('Цель будет достигнута!');
//         return (`Сколько месяцев осталось до цели: ${target}`)
//     }else{
//         return ('Цель не будет достигнута!')
//     }
// }

// console.log(appData.getTarget());

// appData.getStatus = function getStatusIncome() {

//     if (budgetDay > 800){
//         return('Высокий уровень дохода');
//     }

//     else if (budgetDay > 800 && budgetDay > 300){
//         return('Средний уровень дохода');
//     }

//     else if (budgetDay < 300 && budgetDay > 0){
//         return('Низкий уровень дохода');
//     }

//     else if (0 > budgetDay){
//         return('Что то пошло не так');
//     }
// }

// console.log(appData.getStatus());












