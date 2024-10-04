// Verificación de código
function checkCode() {
    const code = document.getElementById('secret-code').value;
    if (code === '200923') {
        document.getElementById('card').style.display = 'none';
        document.getElementById('time-screen').style.display = 'block';
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}

// Mostrar el tiempo desde el 20/09/2023
function showTime() {
    const startDate = new Date('2023-09-20');
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('time-count').innerHTML = `Hemos estado juntos por ${days} días, ${hours} horas, y ${minutes} minutos 💕`;

    setInterval(showTime, 60000); // Actualiza cada minuto
}

// Avanzar a la siguiente pantalla
function nextScreen() {
    document.getElementById('time-screen').style.display = 'none';
    document.getElementById('options-screen').style.display = 'block';
}

// Mostrar fotos
function showPhotos() {
    document.getElementById('options-screen').style.display = 'none';
    document.getElementById('photos-screen').style.display = 'block';
}

// Mostrar carta
function showLetter() {
    document.getElementById('options-screen').style.display = 'none';
    document.getElementById('letter-screen').style.display = 'block';
}

// Mostrar nuestro primer año
function showYear() {
    document.getElementById('options-screen').style.display = 'none';
    document.getElementById('year-screen').style.display = 'block';
}

// Volver a las opciones
function goBack() {
    document.getElementById('photos-screen').style.display = 'none';
    document.getElementById('letter-screen').style.display = 'none';
    document.getElementById('year-screen').style.display = 'none';
    document.getElementById('options-screen').style.display = 'block';
}
