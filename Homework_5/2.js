const inputNumbers = getNumbers();
const conversion = convertString(inputNumbers);

function getNumbers() {
    let numbers;

    do {
        numbers = prompt('Введите, через пробел, числа. Количество не ограничено');
    } while (numbers === ' ');

    return numbers;
}

function convertString(input) {
    let convertString = input.split(" ");
    let pureNumbers = convertString.map(string => +string);
    // let excludeNaN = function(pureNumbers) {return obj!== undefined && typeof(obj) === 'number' && !isNaN(obj)}

    console.log(excludeNaN);
}

function isNumber(obj) {
    return obj!== undefined && typeof(obj) === 'number' && !isNaN(obj);
}