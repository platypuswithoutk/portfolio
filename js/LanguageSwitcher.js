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

    about.innerHTML = "Nazywam się Roksana Dzioba, jestem początkującym frontend developerem i aktualnie mieszkam w Krakowie. W swojej pracy staram się budować przejrzyste, intuicyjne oraz funckjonalne strony internetowe i aplikacje w oparciu o nowoczesne technologie." 
    future.innerHTML = "Obecnie poszukuje stażu bądź pracy jako Junior Frontend Developer. Chętnie wezmę udział w projektach typu open-source, szczególnie w JavaScript."
    github.innerHTML = "Zapraszam równiez do zapoznania się z moimi projektami na Githubie:"

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


