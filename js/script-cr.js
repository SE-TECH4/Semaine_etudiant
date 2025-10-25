// Fonction pour mettre à jour le compte à rebours
function updateCountdown() {
    // Date cible (13 décembre 2025 à 00h00)
    const targetDate = new Date('December 13, 2025 00:00:00').getTime();
    
    // Date actuelle
    const now = new Date().getTime();
    
    // Calcul du temps restant
    const timeLeft = targetDate - now;
    
    // Calcul des jours, heures, minutes et secondes
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    // Affichage du compte à rebours
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        if (timeLeft < 0) {
            countdownElement.innerHTML = "L'événement a commencé !";
        } else {
            countdownElement.innerHTML = `⏳ Début dans : ${days}j ${hours}h ${minutes}m ${seconds}s`;
        }
    }
}

// Mise à jour du compte à rebours toutes les secondes
setInterval(updateCountdown, 1000);

// Première mise à jour immédiate
updateCountdown();
