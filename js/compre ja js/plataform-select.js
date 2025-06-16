const buttons = document.querySelectorAll('.container-buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('button-selected'));
            
            button.classList.add('button-selected');
        });
    });

    let platContent = ``;

    const buttonPc = document.querySelector('.button-pc');
    buttonPc.addEventListener('click', () => {
        platContent = `Selecionar Plataforma: Rockstar Games Launcher`;
        document.querySelector('.js-select-plat').innerHTML = platContent;
    });

    const buttonXbox = document.querySelector('.button-xbox');
    buttonXbox.addEventListener('click', () => {
        platContent = `Selecionar Plataforma: Xbox One`;
        document.querySelector('.js-select-plat').innerHTML = platContent;
    });
    
    const buttonPs = document.querySelector('.button-ps4');
    buttonPs.addEventListener('click', () => {
        platContent = `Selecionar Plataforma: PS5`;
        document.querySelector('.js-select-plat').innerHTML = platContent;
    });
    
   