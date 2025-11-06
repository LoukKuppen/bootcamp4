document.addEventListener('DOMContentLoaded', () => {
    const topRight = document.getElementById('top-right');
    if (!topRight) return;

    topRight.addEventListener('click', () => {

        topRight.classList.remove('animate');
        void topRight.offsetWidth;
        topRight.classList.add('animate');

 
        topRight.addEventListener('animationend', () => {
            topRight.classList.remove('animate');
        }, { once: true });
    });
});