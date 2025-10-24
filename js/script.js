
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
