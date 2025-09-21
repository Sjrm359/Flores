// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Te regalo un beso, te regalo una flor", time: 11 },
  { text: "Te regalo el verano y una brisa de amor", time: 14 },
  { text: "Te regalo mil besos pa ponértelos hoy", time: 16 },
  { text: "Te regalo versos que hacen esta canción", time: 24 },
  { text: "Te regalo el cielo y una puesta de sol", time: 27 },
  { text: "Te regalo sonrisas pa q opaques el sol", time: 29 },
  { text: "Y no puedo, sacarte de mi mente", time: 37 },
  { text: "Voltéa de una vez...", time: 43 },
  { text: "Sabes q quiero, te siento y q no puedo", time: 48 },
  { text: "Sabes q temo un poco de ti", time: 51 },
  { text: "Sabes q quiero, te siento y q me muero", time: 60 },
  { text: "Sabes q tienes...un poquitito de mi", time: 63 },
  { text: "Siempre dirás, conmigo jamás", time: 67 },
  { text: "Te regalo el cielo y un milenio de amor", time: 86 },
  { text: "Te hago real un sueño q te cambia de humor", time: 88 },
  { text: "Y aunque no me veas, sé q escuchas mi voz", time: 92 },
  { text: "No recibo premios por ganarme tu amor", time: 97 },
  { text: "Estoy desesperado y perdiendo el control", time: 101 },
  { text: "Sabes q quiero, te siento y q no puedo", time: 106 },
  { text: "Sabes q temo un poco de ti", time: 110 },
  { text: "Sabes q quiero, te siento y q me muero", time: 119 },
  { text: "Sabes q tienes...un poquitito de mi", time: 123 },
  { text: "Siempre dirás, conmigo jamás", time: 126 },
  { text: "Conmigo jamás", time: 130 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);