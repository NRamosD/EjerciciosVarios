const empezar = document.getElementById("Empezar");
const parar = document.getElementById("Parar");
const texto = document.getElementById("respuesta");

var recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = true;
recognition.interimResults = false;

recognition.onresult = (event) => {
    const results = event.results;
    console.log(results);
    const frase = results[results.length - 1][0].transcript;
    texto.value += frase;
};
recognition.onerror = (event)=>{
    console.log(event.error);
};/*
reproducir.addEventListener = ('click', ()=>{
    leerTexto(texto.value)
});*/
function leerTexto(texto){
    const speech = new SpeechSynthesisUtterance();
    speech.text = texto;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
};

empezar.addEventListener('click', () =>{
    recognition.start();
});
parar.addEventListener('click', () =>{
    recognition.abort();
    if(texto.value=="reloj"){
        document.getElementById("imagenACambiar").src = "/img/reloj.gif"
    }
    if(texto.value=="números"){
        document.getElementById("imagenACambiar").src = "/img/numeros.jpg"
    }
})



//ADIVINADOR
document.getElementById("num").disabled = true;

function nuevoIntento(){
    ran = Math.floor(Math.random() * (100 - 0) + 0);
    document.getElementById("num").disabled = false
    document.getElementById("intentar").disabled = false
}
var ran
function adivina() {
    let num = document.getElementById("num").value
    if(num>ran){
        document.getElementById("respuesta").innerHTML = "Es un número menor :/"
    }else if(num<ran){
        document.getElementById("respuesta").innerHTML = "Es un número mayor :/"
    }else{
        document.getElementById("respuesta").innerHTML = "¡LO CONSEGUISTE! 🥳"
        document.getElementById("intentar").disabled = true
        document.getElementById("num").disabled = true;
    }
    
}