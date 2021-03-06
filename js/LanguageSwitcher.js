function initTranslation() {
    let flagPlElement = document.getElementById("flag-pl");
    translator(flagPlElement);
};

function translator(element) {
    element.onclick = translateToPolish;
}

initTranslation();

function translateToPolish() {
    let button = $('.btn');
    //let navAbout = $('#about');
    //let navSkills = $('#skills');
    let navContact = $('#nav-kontakt');
    let navAbout = $('#nav-about');
    let navSkills = $('#nav-skills')
    let hi = $('#hi');
    let about = $('#aboutMe');
    let future = $('#aboutFuture');
    let github = $('#aboutGithub');
    let skillText = $('#skillText');
    let learnText = $('#learnText');
    let contactForm = $('#contactForm');
    let bootstrapDesc = $('#bootsrtap-description');
    let bootrsapCard = $('#bootstrap');
    let restaurantCard = $('#lambda-card');
    let restaurantDesc = $('#lambda-desc');
    let memoryCard = $('#memory-card');
    let memoryDesc = $('#memory-desc');
    let weatherCard = $('#weather-card');
    let weatherDesc = $('#weather-desc');
    let reactDesc = $('#react-desc');
    let reactCard = $('#react-card');
    let memeDesc = $('#meme-desc');
    let memeCard = $('#meme-card');

    $(navAbout).html('O mnie');
    $(navSkills).html('Umiejętności');
    $(navContact).html('Kontakt');
    $(button).html('ostatnie projekty');

    $(hi).html('Cześć!');
    $(hi).css('font-weight', '900');

    $(about).html('Nazywam się Roksana Dzioba i mieszkam w Krakowie. Od około 10 miesięcy uczę się budować przejrzyste, intuicyjne i funkcjonalne strony internetowe oraz aplikacje. Staram się ciągle rozwijać swoje umiejętności oraz doszkalać - w tym momencie uczę się Reacta oraz realizuje własne projekty w JS.');
    $(future).html('Aktualnie poszukuję pracy bądź stażu jako Frontend Developer. Bardzo chętnie wezmę również udział w projektach open source.')
    $(github).html('Zapraszam do odwiedzenia mojego Githuba:');

    $(skillText).html('W swoich projektach korzystam z:');
    $(learnText).html('Aktualnie uczę się:');
    $(contactForm).html('Bądźmy w kontakcie');
  
    $(bootstrapDesc).html('Responsywna strona wysokogórskiego klubu wspinaczkowego. Przy tworzeniu użyłam biblioteki Bootstrap.');
    $(bootrsapCard).html('Klub wspinaczkowy');

    $(memeCard).html('Generator memów');
    $(memeDesc).html('Prosty generator memów napisany w Reakcie. Umożliwia on stworzenie własnego mema oraz pobranie go na dysk.')

    $(reactCard).html('Quizz wiedzy o Reakcie')
    $(reactDesc).html('Quizz wiedzy zawierający 10 pytań z zakresu React & React Hooks. Aplikacja została napisana przy użyciu Hooków.')

    $(weatherCard).html('Aplikacja pogodowa');
    $(weatherDesc).html('Responsywana aplikacja pokazująca aktualną pogodę w wybranych miastach. Wykorzystałam APi udostępnione na stronie OperWeatherMap.org. ')

    $(memoryCard).html('Gra Memory');
    $(memoryDesc).html('Prosta gra polegająca na odnalezieniu wszystkich pasujących do siebie kart na których widnieją symbole frontendowych technologii.')

    $(restaurantCard).html('Restauracja Lambda');
    $(restaurantDesc).html('Projekt responsywnej strony restauracji zakodowany w ramach zadania podczas Rooling Scopes School');

    $('h4').css('font-weight', 'bold');
    $('h3').css('font-weight', '900')

    document.getElementsByName('name')[0].placeholder='Twoje imię';
    document.getElementsByName('_replyto')[0].placeholder='Twój adres e-mail';
    document.getElementsByName('message')[0].placeholder='Twoje wiadomość';
    document.getElementsByName('send')[0].value='Wyślij wiadomość';
}


