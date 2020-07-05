const chooseAction = getAction();
const inputQuantity = getQuantity();
const numberData = getNums(inputQuantity);

calculate(chooseAction, numberData);


function getAction() {
    let getSign;

    do {
        getSign = prompt('Выбираем математическое действие: +, -, *, /');
    } while (getSign !== '+' && getSign !== '-' && getSign !== '*' && getSign !== '/');

    return getSign;
}

function getQuantity() {
    let quantity;

    do {
        quantity = +prompt('Введите сколько операндов необходимо для расчетов, минимум 2');
    } while (quantity < 2 && quantity !== '')

    return quantity;
}

function getNums(count) {
    let numbers = [];

    for (let i = 0; i < count; i++) {
        numbers.push(getNumber());
    }

    return numbers;
}

function getNumber() {
    let userInput;

    do {
        userInput = +prompt('Введите операнд');
    } while (userInput === '');

    return userInput;
}

function calculate(operation, operands) {
    switch (operation) {
        case '/': div(operands); break;
        case '+': sum(operands); break;
        case '-': sub(operands); break;
        case '*': mult(operands); break;
    }
}

function sum(values) {
    let result = values[0];

    for (let i = 1; i < values.length; i++) {
        result = result + values[i];
    }

    alert(`результат: ${result}`);
}

function div(values) {
    let result = values[0];

    for (let i = 1; i < values.length; i++) {
        result = result - values[i];
    }

    alert(`результат: ${result}`);
}

function mult(values) {
    let result = values[0];

    for (let i = 1; i < values.length; i++) {
        result = result * values[i];
    }

    alert(`результат: ${result}`);
}

function div(values) {
    let result = values[0];

    for (let i = 1; i < values.length; i++) {
        result = result / values[i];
    }

    alert(`результат: ${result}`);
}