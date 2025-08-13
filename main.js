
const billInput = document.getElementById('bill');
const tips = document.querySelectorAll('.tip-btn');
const customTip = document.getElementById('custom-tip')
const peopleInput = document.getElementById('people')
const tipDisplay = document.querySelector('.tip-amount-num')

// Get bill input amount
let billAmount = 0;

billInput.addEventListener('input', (event) => {
    console.log(event.target.value);
    billAmount = event.target.value;
    getTipTotal();
})

// Get tip from buttons
let tipAmount = 0;

tips.forEach((tip) => {
    tip.addEventListener('click', (event) => {
        tipAmount = event.target.value;
        console.log(tipAmount);
        getTipTotal();
    })
})

customTip.addEventListener('input', (event) => {
    console.log(event.target.value);
    tipAmount = '.' + event.target.value;
    getTipTotal();
})

//get tip amount
let billTip;
const getTipTotal = () => {
    if (billAmount && tipAmount) {
        billTip = billAmount * tipAmount
        console.log(billTip)
    }
}

// get number of people
let numPeople

peopleInput.addEventListener('input', (event) => {
    numPeople = event.target.value;
    console.log(numPeople);
    getTipPerPerson()
})

// get tip per person
let tipPerPerson = 0;

const getTipPerPerson = () => {
    if (billTip && numPeople) {
        tipPerPerson = billTip / numPeople
        console.log(tipPerPerson)
    }
    tipDisplay.innerHTML = '$' + tipPerPerson;
}