const inputNumbers = getNumbers();
const conversion = splitString(inputNumbers);
const filtration = filterNums(conversion);

console.log(filtration)

function getNumbers() {
    let numbers;

    do {
        numbers = prompt('Введите, через пробел, числа. Количество не ограничено');
    } while (numbers === ' ');

    return numbers;
}

function splitString(input) {
    let convert = input.split(" ");
    return convert.map(string => +string);
}

function filterNums(refining) {
    return refining.filter(num => num == Number(num))
}
