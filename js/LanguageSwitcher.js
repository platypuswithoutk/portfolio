function initTranslation() {
    let flagPlElement = document.getElementById("flag-pl");
    translator(flagPlElement);
};

function translator(element) {
    element.onclick = translateToPolish;
}

initTranslation();

function translateToPolish() {
    console.log('tlumacze strone na polski');
    let button = document.querySelector('.btn');
    button.textContent = "ostatnie projekty"
}


