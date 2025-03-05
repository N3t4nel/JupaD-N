// Cuenta regresiva hasta el 1 de abril de 2025
const countdownDate = new Date("April 1, 2025 00:00:00").getTime();

// Actualiza el contador cada segundo
setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerHTML = `${days} días`;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "¡El gran día ha llegado!";
    }
}, 1000);

// Lista de nombres válidos
const validNames = ["Deby", "Lydia", "Debora"];

// Mensajes románticos con tono argentino
const messages = [
    "Te quiero tanto, y cada día me siento más afortunado de tenerte a mi lado.",
    "Faltan pocos días para que nuestro amor se haga eterno. ¡Te amo con todo mi corazón!",
    "Cada vez que miro a los ojos, veo mi futuro. Y mi futuro es contigo. ❤️",
    "No puedo esperar a que llegue ese día, el mejor de todos, el día en que seremos uno solo.",
    "Mi amor, cada día que pasa, mi cariño por vos crece aún más. ¡Te amo más de lo que imaginas!"
];

function showRandomMessage() {
    const name = document.getElementById("name").value;

    if (validNames.includes(name)) {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        document.getElementById("message").innerText = `${randomMessage} - De tu amor, ${name}`;
    } else {
        document.getElementById("message").innerText = "¡Ups! El nombre que ingresaste no es válido. Solo aceptamos: Juan, Ana o Pedro.";
    }
}

