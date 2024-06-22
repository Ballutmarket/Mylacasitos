document.addEventListener('DOMContentLoaded', function() {
    const minusButtons = document.querySelectorAll('.minus');
    const plusButtons = document.querySelectorAll('.plus');
    const quantityInputs = document.querySelectorAll('.quantity-input');
    const buyButtons = document.querySelectorAll('.buy-button');

    minusButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let quantity = parseInt(quantityInputs[index].value);
            if (quantity > 0) {
                quantityInputs[index].value = quantity - 1;
            }
        });
    });

    plusButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let quantity = parseInt(quantityInputs[index].value);
            quantityInputs[index].value = quantity + 1;
        });
    });

    buyButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let quantity = parseInt(quantityInputs[index].value);
            if (quantity > 0) {
                alert(`Has agregado ${quantity} unidades de Lacasitos de ${button.previousElementSibling.previousElementSibling.textContent} a tu cesta.`);
                quantityInputs[index].value = 0; // Reinicia el valor después de la compra
            } else {
                alert('Por favor, selecciona al menos una unidad.');
            }
        });
    });
});

