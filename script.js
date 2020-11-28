let btnCalculate = document.querySelector('button.calculator__button');

function plus (string) {
    alert(string);
    let a = Number(string.slice(0,string.indexOf('+')));
    let b = Number(string.slice(string.indexOf('+') + 1));
    alert(a);
    alert(b);
    if (a + b) {
        return a + b;
    } else {
        alert('Одно из значений не число!');
    }
}

function minus (string) {
    let a = Number(string.slice(0,string.indexOf('-')));
    let b = Number(string.slice(string.indexOf('-') + 1));

    if (a - b) {
        return a - b;
    } else if (a - b == 0) {
        return 0;
    } else {
        alert('Одно из значений не число!')
    }
}

function division (string) {
    let a = Number(string.slice(0,string.indexOf('/')));
    let b = Number(string.slice(string.indexOf('/') + 1));

    if (!!b) {
        alert('На ноль делить нельзя!');
        return '';
    }

    if (a / b) {
        return a / b;
    } else {
        alert('Одно из значений не число!')
    }
}

function multiply (string) {
    let a = Number(string.slice(0,string.indexOf('*')));
    let b = Number(string.slice(string.indexOf('*') + 1));

    if (!!(a) || !!b) {
        return 0;
    }

    if (a * b) {
        return a * b;
    } else {
        alert('Одно из значений не число!')
    }
}


function findAndCalculate (string) {

    if (string.includes('+')) {
        return plus(string);
    } else if (string.includes('-')) {
        return minus(string);
    } else if (string.includes('/')) {
        return division(string);
    } else if (string.includes('*')) {
        return multiply(string);
    } else {
        alert('Поле ввода пусто или заполнено не все!');
        return string
    }
}

btnCalculate.addEventListener("click", () => {
    let inputExample = document.querySelector('input.calculator__input').value;
    let arrayExample = inputExample.split(' ');
    let action = ['+','-','/','*'];

    if (arrayExample.length == 3) {

        if (!Number(arrayExample[0])) {
            alert('Первое значение не является числом!');
        } else if (!(action.includes(arrayExample[1]))) {
            alert('Действие не является одним из возможных (+,-,/,*)!'); 
        } else if (!Number(arrayExample[2])) {
            alert('Второе значение не является числом!')  ;  
        } else {
            document.querySelector('input.calculator__input').value = findAndCalculate(arrayExample);
        }
    } else {
        document.querySelector('input.calculator__input').value = findAndCalculate(inputExample);
    }
});