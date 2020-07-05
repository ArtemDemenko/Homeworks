const firstValue = +prompt('Введите ПЕРВОЕ число');
const secondValue = +prompt('Введите ВТОРОЕ число');

calcPlus(firstValue, secondValue);
calcMinus(firstValue, secondValue);
calcMultiply(firstValue, secondValue);
calcDivision(firstValue, secondValue);


function calcPlus(firstInput, secondInput) {
    const plusing = firstInput + secondInput;
    console.log(`Результат: ${firstInput} + ${secondInput} = ${plusing}`);
}

function calcMinus(firstInput, secondInput) {
    const minusing = firstInput - secondInput;
    console.log(`Результат: ${firstInput} - ${secondInput} = ${minusing}`);
}


function calcMultiply(firstInput, secondInput) {
    const multiplying = firstInput * secondInput;
    console.log(`Результат: ${firstInput} * ${secondInput} = ${multiplying}`);
}


function calcDivision(firstInput, secondInput) {
    const divisioning = firstInput / secondInput;
    console.log(`Результат: ${firstInput} / ${secondInput} = ${divisioning}`);
}
