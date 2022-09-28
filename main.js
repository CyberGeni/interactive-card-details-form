var nameInput = document.getElementById('nameInput');
// var numberInput = document.getElementById('numberInput');
// var monthInput = document.getElementById('monthInput');
// var yearInput = document.getElementById('yearInput');
// var cvcInput = document.getElementById('cvcInput');

// var form = document.getElementById('form');

// var cardName = document.getElementById('cardName');
// var cardNumber = document.getElementById('cardNumber');
// var cardExpiryMonth = document.getElementById('card-expiry-month');
// var cardExpiryYear = document.getElementById('card-expiry-year');
// var cvc = document.getElementById('cvc');

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(nameInput.value);
});
