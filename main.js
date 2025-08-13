
const billInput = document.getElementById('bill');
const tips = document.querySelectorAll('.tip-btn');
const customTip = document.getElementById('custom-tip');
const peopleInput = document.getElementById('people');
const tipDisplay = document.querySelector('.tip-amount-num');
const totalDisplay = document.querySelector('.total-num');
const resetBtn = document.querySelector('.reset-btn')

// Get bill input amount
let billAmount = 0;

billInput.addEventListener('input', (event) => {
    billAmount = parseFloat(event.target.value);
    getTipTotal();
})

// Get tip from buttons
let tipAmount = 0;

tips.forEach((tip) => {
    tip.addEventListener('click', (event) => {
        tipAmount = parseFloat(event.target.value);
        if (isNaN(tipAmount) || tipAmount < 0) tipAmount = 0;
        customTip.value = ''; // clear custom tip if button clicked
        getTipTotal();
    })
})

customTip.addEventListener('input', (event) => {
    tipAmount = parseFloat(event.target.value) / 100;
    if (isNaN(tipAmount) || tipAmount < 0) tipAmount = 0;
    getTipTotal();
})

//get tip amount
let billTip;
const getTipTotal = () => {
    if (!billAmount || isNaN(billAmount)) billAmount = 0;
    if (!tipAmount || isNaN(tipAmount)) tipAmount = 0;

    billTip = billAmount * tipAmount;

    getBillPerPerson();
    getTipPerPerson();
}

// get number of people
let numPeople = 1;

peopleInput.addEventListener('input', (event) => {
    const val = parseFloat(event.target.value);
    numPeople = (val > 0) ? val : 1;
    getTipPerPerson()
    getBillPerPerson()
})

// get tip per person and display it
let tipPerPerson = 0;

const getTipPerPerson = () => {
    if (billTip && numPeople > 0) {
        tipPerPerson = billTip / numPeople
    } else {
        tipPerPerson = 0;
    }
    tipDisplay.innerHTML = '$' + tipPerPerson.toFixed(2);
}

// get bill total and tip and display it
let billPerPerson
const getBillPerPerson = () => {
    if (numPeople > 1) {
        billPerPerson = (billAmount + billTip) / numPeople
    } else {
        billPerPerson = billAmount + billTip
    }
    
    totalDisplay.innerHTML = '$' + billPerPerson.toFixed(2)
}

//reset everthing back to zero
resetBtn.addEventListener('click', () => {
    billAmount = 0;
    billInput.value = ''
    tipAmount = 0;
    numPeople = 1;
    peopleInput.value = ''
    tipDisplay.innerHTML = '$'
    totalDisplay.innerHTML = '$'
    console.log('tip:' + tipAmount);
    console.log('bill:' + billAmount);
    console.log('people:' + numPeople);
})