window.addEventListener('scroll', function() {
    const header = this.document.querySelector('.container-header-2');

    if (window.scrollY > 50) {
        header.classList.add('animate');
    } else {
        header.classList.remove('animate');
    }
});

window.addEventListener('scroll', function () {
    const wrapper = document.querySelector('.wrapper-container-header');
    if (this.window.scrollY > 100) {
        wrapper.classList.add('animate');
    }  else {
        wrapper.classList.remove('animate');
    }
});

window.addEventListener('scroll', function() {
    const header2 = document.querySelector('.container-header-2');

    const minWidth = 30;
    const maxWidth = 80;

    let scrollY = window.scrollY;
    if (scrollY > 1000) scrollY = 1000;

    const newWidth = minWidth + (scrollY / 1000) * (maxWidth - minWidth);

    header2.style.width = newWidth + '%';
});
