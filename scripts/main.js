document.addEventListener('DOMContentLoaded', function() {

    const products = [
        ['https://static.tildacdn.com/stor6130-6161-4435-b737-306338303961/14423682.png', 'Koe no katachi tote', '2 000₽.', 'toe Koe no katachi, fabric composition 71 polye, 24 viscose, 5 spandex, machine embroidery.'],
        ['https://static.tildacdn.com/stor6538-3262-4062-b463-623461306136/98351093.jpg', 't-shirts Koe no katachi', '4 000₽.', 't-shirts Koe no katachi, fabric composition 97 cotton 3 lycra, machine embroidery, loose fit.'],
        ['https://static.tildacdn.com/stor3561-3566-4933-a536-356132626435/76235470.png', 'longsleeve Koe no katachi', '7 000₽.', 'longsleeve Koe no katachi, fabric composition 100 cotton, machine embroidery, loose fit.'],
        ['https://static.tildacdn.com/stor3366-3663-4664-a131-646338353230/24030602.png', 'zip-hoodie Koe no katachi', '10 000₽.', 'zip-hoodie Koe no katachi, fabric composition 100 cotton, machine embroidery, loose fit.']
    ];

    const cards = document.querySelectorAll('.card');
    const productMenu = document.getElementById('product__menu');
    const closeMenuBtn = document.getElementById('close__menu');

    const prodImg = document.getElementById('prod__img');
    const prodName = document.getElementById('prod__name');
    const prodPrice = document.getElementById('prod__price');
    const prodDescr = document.getElementById('prod__descr');

    function openProductMenu(product) {
        prodImg.src = product[0];
        prodName.textContent = product[1];
        prodPrice.textContent = product[2];
        prodDescr.textContent = product[3];
        productMenu.style.display = 'flex';
    }

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const prodId = this.getAttribute('id');
            const product = products[prodId - 1];
            if (product) {
                openProductMenu(product);
            }
        });
    });

    closeMenuBtn.addEventListener('click', () => {
        productMenu.style.display = 'none';
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            productMenu.style.display = 'none';
        }
    });
});