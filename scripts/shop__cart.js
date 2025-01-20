document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('shop__cart').addEventListener('click', () => {
        document.getElementById('shop__menu').classList.add('visible')
        document.getElementById('back__blackout').style.display = 'flex'
    });

    document.getElementById('close__shop__menu').addEventListener('click', function() {
        document.getElementById('shop__menu').classList.remove('visible')
        document.getElementById('back__blackout').style.display = 'none'
    });

    document.getElementById('back__blackout').addEventListener('click', () => {
        document.getElementById('shop__menu').classList.remove('visible')
        document.getElementById('back__blackout').style.display = 'none'
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            document.getElementById('shop__menu').classList.remove('visible')
            document.getElementById('back__blackout').style.display = 'none'
        }
    });
})