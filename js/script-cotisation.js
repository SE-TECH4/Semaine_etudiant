

const btnMenu = document.querySelector('.hamburger-menu');
const btnNav = document.querySelector('.navigation');
const btnClose = document.querySelector('.close-menu');

btnMenu.addEventListener('click', function () {
    btnNav.style.transform = 'translate(0)';
});
btnClose.addEventListener('click', function () {
    btnNav.style.transform = 'translate(-1200px)';
});

// Gestion de tous les boutons ".btnPlus" (plusieurs occurrences)
const btnPluses = document.querySelectorAll('.btnPlus');

btnPluses.forEach(btnPlus => {
    const icon = btnPlus.querySelector('i');

    btnPlus.addEventListener('click', () => {
        // Cherche la liste correspondante : préférer la .liste dans le même .box-item
        let list = btnPlus.closest('.box-item')?.querySelector('.liste')
                || (btnPlus.nextElementSibling && btnPlus.nextElementSibling.classList && btnPlus.nextElementSibling.classList.contains('liste') ? btnPlus.nextElementSibling : null)
                || document.querySelector('.liste');

        if (!list) return; // rien à faire si pas de liste trouvée

        const isVisible = getComputedStyle(list).display === 'block';

        if (isVisible) {
            list.style.display = 'none';
            if (icon) { icon.classList.remove('fa-minus'); icon.classList.add('fa-plus'); }
        } else {
            list.style.display = 'block';
            if (icon) { icon.classList.remove('fa-plus'); icon.classList.add('fa-minus'); }
        }
    });
});


let countDownDate = new Date('dec 13, 2025 00:00:00').getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000*60*60*24));
    let hours = Math.floor(distance % (1000*60*60*24) / (1000*60*60));
    let minutes = Math.floor(distance % (1000*60*60) / (1000*60));
    let seconds = Math.floor(distance % (1000*60) / (1000));
    
    days = String(days).padStart(2, '0');
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    document.querySelector("#countdown").innerHTML = `
        <div class="tag">
            <span class="value">${days}</span>
            <span class="label">Jour(s)</span>
        </div>
        <div class="tag">
            <span class="value">${hours}</span>
            <span class="label">Heure(s)</span>
        </div>
        <div class="tag">
            <span class="value">${minutes}</span>
            <span class="label">Minute(s)</span>
        </div>
        <div class="tag">
            <span class="value">${seconds}</span>
            <span class="label">Seconde(s)</span>
        </div>
    `;
    
    if (distance < 0) {
        clearInterval(x);
        document.querySelector("#countdown").innerHTML = '<span class="end">Terminé !</span>';
    }
}, 1000);
