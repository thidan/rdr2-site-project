const bgLayer = document.querySelector('.bg-transition-layer');
const containerCharacter = document.querySelector('.container-character');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const invertParagraph = document.querySelector('.container-paragraph');

    if (scrollY >= 0 && scrollY < 100) {
        document.body.style.backgroundColor = "white";
        invertParagraph.classList.remove('invert');
    } else if (scrollY >= 100 && scrollY < 1000) {
        document.body.style.backgroundColor = "black";
        invertParagraph.classList.add('invert');
    }


    if (scrollY >= 1000) {
        bgLayer.style.backgroundImage = "url('../imagens/rdr-wallpaper-1.jpg')";
        bgLayer.style.opacity = 1;
    } else {
        bgLayer.style.opacity = 0;
        setTimeout(() => {
            if (bgLayer.style.opacity == "0") {
                bgLayer.style.backgroundImage = "none";
            }
        }, 200);
    }


    const isInRange = scrollY > 200 && scrollY < 1000;
    const isAnimated = containerCharacter.classList.contains('animate');

    if (isInRange && !isAnimated) {
        containerCharacter.classList.add('animate');
    } else if (!isInRange && isAnimated) {
        containerCharacter.classList.remove('animate');
    }
    const buttonCompreJa = document.querySelector('.compre-ja');

    if (scrollY > 536) {
        containerCharacter.classList.add('fixed');
    } else {
        containerCharacter.classList.remove('fixed');
    }

    if (scrollY > 536 && scrollY < 1000){
        buttonCompreJa.classList.add('animate');
    } else {
        buttonCompreJa.classList.remove('animate');
    }

    const containerCharacter2 = document.querySelector('.container-character-2 img');

    if (scrollY > 400) {
        containerCharacter2.classList.add('leftSlide');
    } else {
        containerCharacter2.classList.remove('leftSlide');
    }


});
