const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const sections = document.querySelectorAll('.section');
const links = document.querySelectorAll('.menu a');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
});

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');

        sections.forEach(sec => sec.style.display = 'none');

        if (targetId === 'accueil') {
            document.getElementById('accueil').scrollIntoView({behavior: 'smooth'});
        } else {
            document.getElementById(targetId).style.display = 'block';
            document.getElementById(targetId).scrollIntoView({behavior: 'smooth'});
        }

        menu.classList.remove('open');
    });
});

