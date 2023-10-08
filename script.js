// Identificadores de las etiquetas html

let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("password");

let name = document.getElementById("name");
let username = document.getElementById("username");
let registrer = document.getElementById("registrer");
let email = document.getElementById("email");
let remember = document.getElementById("remember");
let forgot_password = document.getElementById("forgot_password");
let question_account = document.getElementById("question_account");
let btn = document.getElementById("btn");
let titule = document.getElementById("titule");
let messaje = document.getElementById("messaje");

// Funcion para ver la contraseña al hacker click en el ojo
eyeIcon.onclick = function() {

    if (password.type == "password") {
        eyeIcon.src = "img/eye-open.png";
        password.type = "text";
       

    } else {
        eyeIcon.src = "img/eye-closed.png";
        password.type = "password";
    }
};

// Rutas de imágenes de fondo
const imagenes = [
    'img/fondos/fondo1.jpg',
    'img/fondos/fondo2.jpg',
    'img/fondos/fondo3.jpg',
    'img/fondos/fondo4.jpg',
    'img/fondos/fondo5.jpg',
    'img/fondos/fondo6.jpg',
];

let indice = 0;
let fondo = document.querySelector(".fondo");

// Funcion que cambia la imagen de fondo del login
function cambiarImagen() {
    const imagen = document.getElementById('miImagen');
    fondo.src = imagenes[indice];
    indice = (indice + 1) % imagenes.length;
}

setInterval(cambiarImagen, 10000);

// Funcion para covertir pantalla de login o de registro
var currentState = "Login";
name.style.display = "none";

registrer.onclick = function() {

    if (currentState === "Login") {

        currentState = "Registrer";
        titule.innerHTML = "Registration";
        messaje.innerHTML = "Provide the following to create an account"; 
        email.value = "";
        password.value = "";
        name.style.display = "block";
        remember.childNodes[1].nodeValue = "I agree to the terms & conditions";
        btn.innerHTML = "Registrer";
        question_account.childNodes[0].nodeValue = "Already have an account?";
        registrer.innerHTML = "Login"
        forgot_password.style.display = "none";

    } else {

        currentState = "Login";
        titule.innerHTML = "Login";
        messaje.innerHTML = "Please login to use the plattaform";
        username.value = "";
        email.value = "";
        password.value = "";
        name.style.display = "none";
        remember.childNodes[1].nodeValue = "Remember me";
        btn.innerHTML = "Login";
        question_account.childNodes[0].nodeValue = "Don't have an account?";
        registrer.innerHTML = "Registrer";
        forgot_password.style.display = "block";
    }
}