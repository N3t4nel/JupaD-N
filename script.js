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

// Mensajes románticos al azar
const messages = [
    "Eres mi todo, y pronto seremos uno.",
    "Cada día me enamoro más de ti.",
    "El mejor día de mi vida será a tu lado.",
    "Pronto, ¡seremos esposos! ❤️",
    "Cada momento contigo es un regalo del cielo."
];

function showRandomMessage() {
    const name = document.getElementById("name").value;
    if (name) {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        document.getElementById("message").innerText = `${randomMessage} - De tu amor, ${name}`;
    } else {
        document.getElementById("message").innerText = "Por favor, ingresa tu nombre.";
    }
}
