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
    let skillText = document.getElementById('skillText');
    let learnText = document.getElementById('learnText');
    let contactForm = document.getElementById('contactForm');

    navAbout.innerHTML = 'O mnie';
    navSkills.innerHTML = 'Umiejętności'
    navContact.innerHTML = 'Kontakt'
    button.textContent = "ostatnie projekty"

    hi.textContent = 'Cześć!'
    hi.style.fontWeight = "900";

    about.innerHTML = "Nazywam się Roksana Dzioba i mieszkam w Krakowie. Od około 8 miesięcy uczę się budować przejrzyste, intuicyjne i funckjonalne strony internetowe oraz aplikacje. Staram się ciągle rozwijać swoje umiejętności oraz doszkalać - w tym momencie uczę się Reacta oraz realizuje własne projekty w JS."
    future.innerHTML = "Aktualnie poszukuję pracy bądź stażu jako Frontend Developer na terenie Krakowa lub Śląska. Bardzo chętnie wezmę również udział w projektach open source."
    github.innerHTML = "Zapraszam do odwiedzenia mojego Githuba:"

    skillText.innerHTML = "W swojej pracy korzystam z:"
    skillText.style.fontWeight = "900";

    learnText.innerHTML = "Aktualnie uczę się:";
    learnText.style.fontWeight = "900";

    contactForm.innerHTML = "Bądźmy w kontakcie"
    contactForm.style.fontWeight = "900";

    document.getElementsByName('name')[0].placeholder='Twoje imię';
    document.getElementsByName('_replyto')[0].placeholder='Twój adres e-mail';
    document.getElementsByName('message')[0].placeholder='Twoje wiadomość';
    document.getElementsByName('send')[0].value='Wyślij wiadomość';
}


