function initTranslation() {
    let flagPlElement = document.getElementById("flag-pl");
    translator(flagPlElement);
};

function translator(element) {
    element.onclick = translateToPolish;
}

initTranslation();

function translateToPolish() {
    let button = document.querySelector('.btn');
    let navAbout = document.getElementById('about');
    let navSkills = document.getElementById('skills');
    let navContact = document.getElementById('kontakt');
    let hi = document.getElementById('hi');
    let about = document.getElementById('aboutMe');
    let future = document.getElementById('aboutFuture');
    let github = document.getElementById('aboutGithub');
    let skillText = $('#skillText');
    let learnText = $('#learnText');
    let contactForm = $('#contactForm');
    let bootstrapDesc = document.getElementById('bootsrtap-description');
    let bootrsapCard = document.getElementById('bootstrap');
    let restaurantCard = $('#lambda-card');
    let restaurantDesc = $('#lambda-desc');
    let memoryCard = $('#memory-card');
    let memoryDesc = $('#memory-desc');
    let weatherCard = $('#weather-card');
    let weatherDesc = $('#weather-desc');

    navAbout.innerHTML = 'O mnie';
    navSkills.innerHTML = 'Umiejętności'
    navContact.innerHTML = 'Kontakt'
    button.textContent = "ostatnie projekty"

    hi.textContent = 'Cześć!'
    hi.style.fontWeight = "900";

    about.innerHTML = "Nazywam się Roksana Dzioba i mieszkam w Krakowie. Od około 8 miesięcy uczę się budować przejrzyste, intuicyjne i funckjonalne strony internetowe oraz aplikacje. Staram się ciągle rozwijać swoje umiejętności oraz doszkalać - w tym momencie uczę się Reacta oraz realizuje własne projekty w JS."
    future.innerHTML = "Aktualnie poszukuję pracy bądź stażu jako Frontend Developer na terenie Krakowa lub Śląska. Bardzo chętnie wezmę również udział w projektach open source."
    github.innerHTML = "Zapraszam do odwiedzenia mojego Githuba:"

    $(skillText).html('W swoich projektach korzystam z:');
    $(learnText).html('Aktualnie uczę się:');
    $(contactForm).html('Bądźmy w kontakcie');
  
    bootstrapDesc.innerHTML = 'Responsywna strona wysokogórskiego klubu wspinaczkowego. Przy tworzeniu użyłam biblioteki Bootstrap.'
    bootrsapCard.innerHTML = 'Klub wspinaczkowy'

    $(weatherCard).html('Aplikacja pogodowa');
    $(weatherDesc).html('Responsywana aplikacja pokazująca aktualną pogodę w wybranych miastach. Wykorzystałam APi udostępnione na stronie OperWeatherMap.org. ')

    $(memoryCard).html('Gra Memory');
    $(memoryDesc).html('Prosta gra polegająca na odnalezieniu wszystkich pasujących do siebie kart na których widnieją symbole frontendowych technologii.')

    $(restaurantCard).html('Restauracja Lambda');
    $(restaurantDesc).html('Projekt responsywnej strony restauracji zakodowany w ramach zadania podczas Rooling Scopes School')

    document.getElementsByName('name')[0].placeholder='Twoje imię';
    document.getElementsByName('_replyto')[0].placeholder='Twój adres e-mail';
    document.getElementsByName('message')[0].placeholder='Twoje wiadomość';
    document.getElementsByName('send')[0].value='Wyślij wiadomość';

    $('h4').css('font-weight', 'bold');
    $('h3').css('font-weight', '900')


}


