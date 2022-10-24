var nameInput = document.getElementById('nameInput');
var numberInput = document.getElementById('numberInput');
var monthInput = document.getElementById('monthInput');
var yearInput = document.getElementById('yearInput');
var cvcInput = document.getElementById('cvcInput');

var form = document.getElementById('form');
var successPage = document.getElementById('success');

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

    // add space after 4 digits
    cardNumber.innerText = numberInput.value.replace(/(\d{4})/g, '$1 ').trim();

    cardExpiryMonth.innerText = monthInput.value
    cardExpiryYear.innerText = yearInput.value
    cvc.innerText = cvcInput.value

    form.classList.add('hidden');
    successPage.classList.remove('hidden');
});
