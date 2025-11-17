const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const sections = document.querySelectorAll('.section');
const links = document.querySelectorAll('.menu a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open'); // animation hamburger
    menu.classList.toggle('open');
});

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');

        sections.forEach(sec => sec.style.display = 'none');

        if (targetId === 'accueil') {
            document.getElementById('accueil').style.display = 'block';
            document.getElementById('accueil').scrollIntoView({behavior: 'smooth'});
        } else {
            document.getElementById(targetId).style.display = 'block';
            document.getElementById(targetId).scrollIntoView({behavior: 'smooth'});

            // Ajouter bouton retour accueil si pas déjà présent
            let section = document.getElementById(targetId);
            if (!section.querySelector('.back-home')) {
                const back = document.createElement('a');
                back.className = 'back-home';
                back.href = '#';
                back.textContent = '← Retour à l’accueil';
                back.addEventListener('click', (e) => {
                    e.preventDefault();
                    sections.forEach(sec => sec.style.display = 'none');
                    document.getElementById('accueil').style.display = 'block';
                    document.getElementById('accueil').scrollIntoView({behavior:'smooth'});
                });
                section.prepend(back);
            }
        }

        menu.classList.remove('open');
        hamburger.classList.remove('open');
    });
});


