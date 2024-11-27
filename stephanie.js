const Stephani = new Map();

var shrst = prompt("Какая у кошечки шерсть?");
var eyes = prompt("Какого цвета у неё глаза?");
var age = prompt("Сколько ей лет?");
 

Stephani.set('Шерсть',shrst);
Stephani.set('Глаза',eyes);
Stephani.set('Возраст',age);
console.log([Stephani.entries()]);
var BarsikAge = Barsik.get('Возраст')*7;
var FuntikAge = Funtik.get('Возраст')*7;
var StephaniAge = Stephani.get('Возраст')*7;

console.log(BarsikAge);
console.log(FuntikAge);
console.log(StephaniAge);

if (StAge < BarsikAge && StAge < FuntikAge) document.write('Никто не подходит');
else if (StAge < BarsikAge && StAge > FuntikAge) document.write('Подходит Фунтик');
else if (StAge > BarsikAge && StAge < FuntikAge) document.write('Подходит Барсик');
else document.write('Оба подходят');

const Barsik = new Map([
	['Шерсть','Чёрная'],
	['Глаза','Голубые'],
	['Возраст',3.8]
]);
const Funtik = new Map([
	['Шерсть','Серая'],
	['Глаза','Чёрные'],
	['Возраст',4.1]
]);
