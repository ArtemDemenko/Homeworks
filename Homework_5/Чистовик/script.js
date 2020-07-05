const inputOperation = getOperation();
const inputNumbers = getNumbers();
const conversionString = splitString(inputNumbers);
const filtratedNumbers = filterNums(conversionString)

calculate (inputOperation, filtratedNumbers);


function getOperation() {
    let getSign;

    do {
        getSign = prompt('Выбираем математическое действие: +, -, *, /');
    } while (getSign !== '+' && getSign !== '-' && getSign !== '*' && getSign !== '/');

    return getSign;
}

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

function calculate(operation, operands) {
    switch (operation) {
        case '/': div(operands); break;
        case '+': sum(operands); break;
        case '-': sub(operands); break;
        case '*': mult(operands); break;
    }
}

function mult(operands) {
    let result = operands[0];
    
    for (let i = 1; i < operands.length; i++) {
        result *= operands[i];
    }

    alert(`результат: ${result}`);
}

function sub(operands) {
    let result = operands[0];

    for (let i = 1; i < operands.length; i++) {
        result -= operands[i];
        
    }

    alert(`результат: ${result}`);
}


function sum(operands) {
    let result = operands[0];
    
    for (let i = 1; i < operands.length; i++) {
        result += operands[i];
        
    }

    alert(`результат: ${result}`);
}

function div(operands) {
    let result = operands[0];

    for (let i = 1; i < operands.length; i++) {
        result /= operands[i];
    }

    alert(`результат: ${result}`);
}