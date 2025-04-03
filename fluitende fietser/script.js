let slideIndex = 0; // Begin bij de eerste slide
const slides = document.querySelectorAll('.slide'); // Alle slides
const dots = document.querySelectorAll('.dot'); // Alle navigatiebollen

// Laat de juiste slide zien op basis van slideIndex
function showSlides() {
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Als we het einde van de slides hebben bereikt, ga terug naar de eerste
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Als we bij de eerste slide zijn en teruggaan, ga naar de laatste
    }

    // Verberg alle slides
    slides.forEach(slide => slide.style.display = 'none');

    // Zet de actieve bol
    dots.forEach(dot => dot.classList.remove('active'));

    // Toon de huidige slide
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
}

// Vorige/volgende knop
function changeSlide(n) {
    slideIndex += n; // Verhoog of verlaag de slideIndex
    showSlides(); // Laat de nieuwe slide zien
}

// Navigatiebollen
function setSlide(n) {
    slideIndex = n;
    showSlides(); // Laat de geselecteerde slide zien
}

// Laat de eerste slide zien bij het laden van de pagina
showSlides();

// Automatisch de slide veranderen elke 5 seconden
setInterval(function() {
    slideIndex++; // Verhoog de slideIndex
    showSlides(); 
}, 5000); 





function onStart() {
    let fietsElement = document.getElementById('fietsbeweging'); // Zorg dat het element bestaat
    const voeter = document.getElementById("footer");
    if (!fietsElement || !footer) {
        console.error("Fiets of footer element niet gevonden.");
        return;
    }

    let position = 0; // Startpositie binnen de footer
    let direction = 1; // Richting van beweging (1 = rechts, -1 = links)

    function flipFiets() {
        if (direction === 1) {
            fietsElement.style.transform = "scaleX(1)"; // Normale richting
        } else {
            fietsElement.style.transform = "scaleX(-1)"; // Flip de fiets
        }
    }

    function moveFiets() {
        let footerLeft = 0; // Linkerkant van de footer

        // Verander de positie naar rechts of links afhankelijk van de richting
        position += direction * 1; // Pas de snelheid aan indien nodig
        fietsElement.style.left = position + "px";
        // Controleer of de fiets de randen van de footer bereikt
        if (position >= window.innerWidth - 10) {
            
            direction = -1;
            postion-= 10; // Beweeg naar links
            flipFiets(); // Draai de fiets om
        } else if (position <= footerLeft) {
            direction = 1; // Beweeg naar rechts
            position += 10;
            flipFiets(); // Draai de fiets om
        }
    }

    // Zorg ervoor dat de fiets binnen de footer blijft
    voeter.appendChild(fietsElement);
    fietsElement.style.position = "absolute";
    fietsElement.style.bottom = "-15px"; // Houd het binnen de footer
    position = 0; // Startpositie binnen de footer

    // Start de beweging
    setInterval(moveFiets, 7);
};


