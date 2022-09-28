var nameInput = document.getElementById('nameInput');
var numberInput = document.getElementById('numberInput');
var monthInput = document.getElementById('monthInput');
var yearInput = document.getElementById('yearInput');
var cvcInput = document.getElementById('cvcInput');

var form = document.getElementById('form');

var cardName = document.getElementById('card-name');
var cardNumber = document.getElementById('card-number');
var cardExpiryMonth = document.getElementById('card-expiry-month');
var cardExpiryYear = document.getElementById('card-expiry-year');
var cvc = document.getElementById('cvc');

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    cardName.innerText = nameInput.value
    cardNumber.innerText = numberInput.value
    cardExpiryMonth.innerText = monthInput.value
    cardExpiryYear.innerText = yearInput.value
    cvc.innerText = cvcInput.value
    console.log(nameInput.value);
});
