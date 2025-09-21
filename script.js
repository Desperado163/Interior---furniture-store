document.querySelectorAll('.cart__input-button_up').forEach(btn => {
    btn.addEventListener('click', () => {
        const input = btn.nextElementSibling;
        input.stepUp();
    });
});

document.querySelectorAll('.cart__input-button_down').forEach(btn => {
    btn.addEventListener('click', () => {
        const input = btn.previousElementSibling;
        input.stepDown();
    });
});

document.querySelectorAll('.menu__line_tooltip-container').forEach(container => {
    container.addEventListener('click', function () {
        this.classList.toggle('open');
    });
});