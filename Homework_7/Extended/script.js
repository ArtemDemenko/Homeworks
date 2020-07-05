
function calculate() {
    const sign = document.querySelector("#action").value;
    const valueOne = document.querySelector("#firstValue").value;
    const valueTwo = document.querySelector("#secondValue").value;
    switch (sign) {
        case '+': calcPlus(valueOne, valueTwo); break;
        case '-': calcMinus(valueOne, valueTwo); break;
        case '*': calcMultiply(valueOne, valueTwo); break;
        case '/': calcDivision(valueOne, valueTwo); break;
        case 'null': alert(`Выберите действие`); break;
    }
}

function calcPlus(firstInput, secondInput) {
    const result = +firstInput + +secondInput;
    const li = document.createElement('li');
    li.textContent = result;
    document.querySelector('#results').append(li)

    // console.log(`Результат: ${firstInput} + ${secondInput} = ${result}`);
    // return result;
}

function calcMinus(firstInput, secondInput) {
    const result = firstInput - secondInput;
    const li = document.createElement('li');
    li.textContent = result;
    document.querySelector('#results').append(li)

    // console.log(`Результат: ${firstInput} - ${secondInput} = ${result}`);
    // return result;
}

function calcMultiply(firstInput, secondInput) {
    const result = firstInput * secondInput;
    const li = document.createElement('li');
    li.textContent = result;
    document.querySelector('#results').append(li)
    // console.log(`Результат: ${firstInput} * ${secondInput} = ${result}`);
    // return result;
}


function calcDivision(firstInput, secondInput) {
    const result = firstInput / secondInput;
    const li = document.createElement('li');
    li.textContent = result;
    document.querySelector('#results').append(li)
    // console.log(`Результат: ${firstInput} / ${secondInput} = ${result}`);
    // return result;
}