const startQuestion = +prompt(`Выберите раздел расчетов: 
    1. Простые действия (+ , -, *, /);
    2. Возведение в степень;
    3. Синус-косинус.`)


switch (startQuestion) {
    case 1: calcElementary(); break;
    case 2: calcPower(); break;
    case 3: calcTrigonometry(); break;
}

function calcElementary() {
    const calcAction = prompt(`Введите простое математичекое действие`);
    const firstValue = +prompt('Введите ПЕРВОЕ число');
    const secondValue = +prompt('Введите ВТОРОЕ число');
    switch (calcAction) {
        case '+': calcPlus(firstValue, secondValue); break;
        case '-': calcMinus(firstValue, secondValue); break;
        case '*': calcMultiply(firstValue, secondValue); break;
        case '/': calcDivision(firstValue, secondValue); break;
        default: console.log(`Введите один из 4-х математических символов: плюс, минус, умножить, разделить`)
    }
}

function calcPlus(firstInput, secondInput) {
    const result = firstInput + secondInput;
    console.log(`Результат: ${firstInput} + ${secondInput} = ${result}`);
    return result;
}

function calcMinus(firstInput, secondInput) {
    const result = firstInput - secondInput;
    console.log(`Результат: ${firstInput} - ${secondInput} = ${result}`);
    return result;
}

function calcMultiply(firstInput, secondInput) {
    const result = firstInput * secondInput;
    console.log(`Результат: ${firstInput} * ${secondInput} = ${result}`);
    return result;
}

function calcDivision(firstInput, secondInput) {
    const result = firstInput / secondInput;
    console.log(`Результат: ${firstInput} / ${secondInput} = ${result}`);
    return result;
}


function calcPower() {
    const basis = +prompt('Введите БАЗОВОЕ число');
    const degree = +prompt('Введите СТЕПЕНЬ возведения');
    console.log(`Результат: ${basis} в ${degree}-ой степени = ${Math.pow(basis, degree)}`);
}

function calcTrigonometry() {
    const choose = +prompt(`Выберите тригонометрическую функцию:
    1. sin;
    2. cos;
    3. tan.`)
    const argument = +prompt(`Введите АРГУМЕНТ функции`);
    switch (choose) {
        case 1: console.log(`Результат sin(${argument}) = ${Math.sin(argument)}`); break;
        case 2: console.log(`Результат cos(${argument}) = ${Math.cos(argument)}`); break;
        case 3: console.log(`Результат tan(${argument}) = ${Math.tan(argument)}`); break;
    }

}


