// Función para calificar el formulario de Cardiología
function checkCardiologyAnswers() {
    let q1 = document.getElementById("q1-cardiology").value;
    let q2 = document.getElementById("q2-cardiology").value;
    let q3 = document.getElementById("q3-cardiology").value;
    let feedback = document.getElementById("feedback-cardiology");

    if (q1 === "2" && q2 === "2" && q3 === "2") {
        feedback.textContent = "¡Respuestas correctas! 💙";
        feedback.style.color = "green";
        document.getElementById("form-cardiology").style.display = "none";
        document.getElementById("form-anesthesiology").style.display = "block";
    } else {
        feedback.textContent = "Amor, estás segura de que están bien?🤔 Revisa e intenta de nuevo amor😑";
        feedback.style.color = "red";
    }
}

// Función para calificar el formulario de Anestesiología
function checkAnesthesiologyAnswers() {
    let q1 = document.getElementById("q1-anesthesiology").value;
    let q2 = document.getElementById("q2-anesthesiology").value;
    let q3 = document.getElementById("q3-anesthesiology").value;
    let feedback = document.getElementById("feedback-anesthesiology");

    if (q1 === "2" && q2 === "2" && q3 === "2") {
        feedback.textContent = "¡Respuestas correctas! 💉";
        feedback.style.color = "green";
        document.getElementById("form-anesthesiology").style.display = "none";
        document.getElementById("form-surgery").style.display = "block";
    } else {
        feedback.textContent = "Amor, estás segura de que están bien?🤔 Revisa e intenta de nuevo amor😑";
        feedback.style.color = "red";
    }
}

// Función para calificar el formulario de Cirugía
function checkSurgeryAnswers() {
    let q1 = document.getElementById("q1-surgery").value;
    let q2 = document.getElementById("q2-surgery").value;
    let q3 = document.getElementById("q3-surgery").value;
    let feedback = document.getElementById("feedback-surgery");

    if (q1 === "2" && q2 === "2" && q3 === "2") {
        feedback.textContent = "¡Respuestas correctas! 🦠";
        feedback.style.color = "green";
        document.getElementById("form-surgery").style.display = "none";
        document.getElementById("form-neurology").style.display = "block";
    } else {
        feedback.textContent = "Amor, estás segura de que están bien?🤔 Revisa e intenta de nuevo amor😑";
        feedback.style.color = "red";
    }
}

// Función para calificar el formulario de Neurología
function checkNeurologyAnswers() {
    let q1 = document.getElementById("q1-neurology").value;
    let q2 = document.getElementById("q2-neurology").value;
    let q3 = document.getElementById("q3-neurology").value;
    let feedback = document.getElementById("feedback-neurology");

    if (q1 === "2" && q2 === "2" && q3 === "2") {
        feedback.textContent = "¡Respuestas correctas! 🧠";
        feedback.style.color = "green";
        
        // Ocultar el contenedor principal con los formularios
        document.getElementById("main-container").classList.add("hidden");
        
        // Mostrar solo el #success-page
        document.getElementById("success-page").classList.remove("hidden");
        
    } else {
        feedback.textContent = "Amor, estás segura de que están bien?🤔 Revisa e intenta de nuevo amor😑";
        feedback.style.color = "red";
    }
}

// Función para mostrar un mensaje de amor aleatorio
function showLoveMessage() {
    const messages = [
        "Eres el amor de mi vida 💖", 
        "No hay nadie en el mundo como tú 😘", 
        "Cada día a tu lado es un regalo 🎁", 
        "Siempre estaré aquí para ti 💑",
        "Eres la dosis exacta que necesita mi corazón ❤️💊",
        "Tu amor es el mejor antídoto contra cualquier tristeza 💉",
        "Contigo, cada latido es un diagnóstico de felicidad 🥰",
        "Eres la receta perfecta para mi alma 💙📜",
        "Mi amor por ti es crónico y sin posibilidad de cura 😘🩺",
        "Eres el latido que mantiene estable mi corazoncito ❤️"
    ];
    document.getElementById("love-message").textContent = messages[Math.floor(Math.random() * messages.length)];
}

// Función para mostrar u ocultar la sorpresa
function mostrarSorpresa() {
    var sorpresa = document.getElementById("sorpresa");
    if (sorpresa.style.display === "none") {
        sorpresa.style.display = "block";
    } else {
        sorpresa.style.display = "none";
    }
}
