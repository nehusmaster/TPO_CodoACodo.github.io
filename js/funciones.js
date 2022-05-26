const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const tema = document.getElementById("subject");
const mensaje = document.getElementById("message");

let btnForm = document.getElementById('btnForm');

btnForm.addEventListener('click', function () {

    let confirmacionnumero = 0;

    let warnings = "";

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (regexEmail.test(correo.value)) {
        confirmacionnumero++;
    } else {
        alert('el email ingresado es incorrecto');
    }

    if (tema.value == '') {
        alert('Por favor ingrese un tema');
        confirmacionnumero = 0;
    } else {
        confirmacionnumero++;
    }

    if (mensaje.value == '') {
        alert('Por favor ingrese un mensaje');
        confirmacionnumero = 0;
    } else {
        confirmacionnumero++;
    }

    if(nombre.value == ''){
        alert('Por favor ingrese un nombre');
        confirmacionnumero = 0;
    }else{
        confirmacionnumero++;
    }

    if(confirmacionnumero == 4){
        alert('El mensaje se envió');
    }


})