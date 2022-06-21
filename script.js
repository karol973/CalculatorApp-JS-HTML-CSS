const currentNumber = document.querySelector('.currentNumber');
const previousNumber = document.querySelector('.previousNumber p');
const mathSign = document.querySelector('.mathSign');
const operatorBtn = document.querySelectorAll('operator');
const numberBtns = document.querySelectorAll('.number')
const equalBtn= document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');
const calculatorHistory = document.querySelector('.history');
const historyBtn=document.querySelector('.history-btn');


let result='';


function displayNumbers(){
if(this.textContent==='.' && currentNumber.includes('.')) return; /*jezeli klikniemy na . i liczba zawiera juz kropke - to zwroc funkcje(nie rob nic)*/
if(this.textContent==='.' && currentNumber.innerHTML ==='')return currentNumber.innerHTML='.0'; /*jezeli kliknelismy na kropke to dodaj 0 za kropka*/
currentNumber.innerHTML += this.textContent; /*w dodajemy kolejną cyfre , aby móc zapisac liczbe */
}
function operate() {
if(currentNumber.innerHTML==='' && currentNumber.textContent==='-' ){
    currentNumber.innerHTML='-';
    return;
}
else if(currentNumber.innerHTML='') return;


}
if (mathSign.innerHTML !==''){
    showResult();

}
previousNumber.innerHTML = currentNumber.innerHTML;
mathSign.innerHTML=this.textContent;
currentNumber.innerHTML='';
function showResult(){
if(previousNumber.innerHTML===''|| currentNumber.innerHTML ==='' ) return;

let a = currentNumber.innerHTML;
let b = previousNumber.innerHTML;
let operator = mathSign.innerHTML;
}
function clearScreen(){

}










operatorBtn.forEach(btn=>{
    btn.addEventListener('click', operate)
});

equalBtn.addEventListener('click',showResult);
clearBtn.addEventListener('click', clearScreen);
numberBtns.forEach((btn => btn.addEventListener('click', displayNumbers)));