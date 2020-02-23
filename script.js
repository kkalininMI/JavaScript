
var money = +prompt("Ваш бюджет на месяц?", 0);
var time = prompt("Введите дату в формате YYYY-MM-DD", null);

var item1 = prompt("Введите обязательную статью расходов в этом месяце", null);
var cost1 = prompt("Введите обязательную статью расходов в этом месяце", null);
response1 = {item1:cost1};
var item2 = prompt("Введите обязательную статью расходов в этом месяце", null);
var cost2 = prompt("Введите обязательную статью расходов в этом месяце", null);
response2 = {item2:cost2};

var appData = {budget: money, 
               timeData: time, 
               expenses: {response1: response2},
               optionalExpenses: null,
               income: null,
               savings: false
            };

alert ("Бюджет за один день " + money/30);

