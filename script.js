document.addEventListener("DOMContentLoaded", () => {
    // Redirection du bouton "Commencer" vers la page2
    const startButton = document.getElementById("startButton");
    if (startButton) {
        startButton.addEventListener("click", () => {
           startButton.classList.add("expand");

           setTimeout(()=> {
            document.body.style.transition = "opacity1s ease-in-out";
            document.body.style.opacity = "0";
           },1200)

           setTimeout(()=> {
            window.location.href ="page2.html";
           },1000);
        },2000);
    }

    // Fonctionnalité du logo : retour à la page d'accueil
    const logoPage2 = document.querySelector(".logo-page2");
    if (logoPage2) {
        logoPage2.addEventListener("click", () => {
            window.location.href = "index.html"; // Retour à l'accueil
        });
    }

    // Effet d’apparition des cartes sur page2
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "scale(0.9)";
        setTimeout(() => {
            card.style.transition = "0.8s ease-in-out";
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
        }, index * 300);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Fonctionnalité du logo : retour à la page 2 depuis page 3
    const logoPage3 = document.querySelector(".logo-page3");
    if (logoPage3) {
        logoPage3.addEventListener("click", () => {
            window.location.href = "page2.html"; // Retour à la page 2
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const histoireCard = document.querySelector(".histoire-card");
    if (histoireCard) {
        histoireCard.addEventListener("click", () => {
            window.location.href = "page3.html"; // Redirection vers la page 3
        });
    }

   
})

document.addEventListener("DOMContentLoaded", () => {
    const disciplineCard = document.querySelector(".discipline-card");
    if (disciplineCard) {
        disciplineCard.addEventListener("click", () => {
            window.location.href = "page4.html"; // Redirection vers la page 4
        });
    }

   
})

document.addEventListener("DOMContentLoaded", () => {
    const competitionCard = document.querySelector(".competition-card");
    if (competitionCard) {
        competitionCard.addEventListener("click", () => {
            window.location.href = "page6.html"; // Redirection vers la page 6
        });
    }

   
})

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            } else {
                entry.target.style.opacity = "0";
                entry.target.style.transform = "translateY(30px)";
            }
        });
    }, { threshold: 0.2 }); // Déclenche l'effet quand 20% de la section est visible

    const sections = document.querySelectorAll(".histoire, .discipline, .competition");
    sections.forEach(section => observer.observe(section));
});
