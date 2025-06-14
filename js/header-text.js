const headerItems = [
    "Visão geral",
    "Explorar",
    "Progresso",
    "Mídia",
    "Online",
    "Catálogo",
    "Suporte"
];

let containerHeaderText = '';

headerItems.forEach(text => { containerHeaderText += `<span class="header-text">${text}<div class="underline-header-text"></div></span>`})

document.querySelector('.js-container-header-text').innerHTML = containerHeaderText;
