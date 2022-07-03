const currentNumber = document.querySelector('.currentNumber');
const previousNumber = document.querySelector('.previousNumber p');
const mathSign = document.querySelector('.mathSign');
const operatorBtn = document.querySelectorAll('.operator');
const numberBtns = document.querySelectorAll('.number')
const equalBtn= document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');
const calculatorHistory = document.querySelector('.history');
const historyBtn=document.querySelector('.history-btn');


let result='';


function displayNumbers(){

    if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return; /*jezeli klikniemy na . i liczba zawiera juz kropke - to zwroc funkcje(nie rob nic)*/
    if(this.textContent === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '.0' ;/*jezeli kliknelismy na kropke to dodaj 0 za kropka*/
currentNumber.innerHTML += this.textContent; /*w dodajemy kolejną cyfre , aby móc zapisac liczbe */
}
function operate () {
    if(currentNumber.innerHTML === '' && this.textContent ==='-'){
        currentNumber.innerHTML = '-';
        return;
    }


    else if (currentNumber.innerHTML === '') {
        return;
    }

    if(mathSign.innerHTML !== '') {
        showResult();
    }
    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    currentNumber.innerHTML ='';
}

function showResult() {
    if (previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return; /*jesli nie podamy drugiej liczby to zwróci pierwsza*/

    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let operator = mathSign.innerHTML;

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = b - a;
            break;
        case 'x':
            result = a * b;
            break;
        case ':':
            result = b / a;
            break;
        case '2^':
            result = b ** a;
            break;

    }
    addToHistory();
    historyBtn.classList.add('active');
    currentNumber.innerHTML = result;
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';

}
function clearScreen(){
currentNumber.innerHTML='';
    previousNumber.innerHTML = '';
    result='';
mathSign.innerHTML='';
}
function clearHistory(){
    calculatorHistory.textContent='';

}



function addToHistory(){
const historyItem = document.createElement('li');
historyItem.innerHTML=`${currentNumber.innerHTML} ${mathSign.innerHTML} ${previousNumber.innerHTML} = ${result}`;
historyItem.classList.add('history-item');
calculatorHistory.appendChild(historyItem);
}






operatorBtn.forEach(btn=>{
    btn.addEventListener('click', operate)
});

equalBtn.addEventListener('click',showResult);
clearBtn.addEventListener('click', clearScreen);
numberBtns.forEach(btn => {
    btn.addEventListener('click', displayNumbers)
    });
historyBtn.addEventListener('click', clearHistory);