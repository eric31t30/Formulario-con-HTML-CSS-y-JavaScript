const inputs = document.querySelectorAll('.form-input');
const puntos = document.querySelectorAll('.puntos');
const ojos = document.querySelector(".ojos");

inputs.forEach((input) => {
    input.addEventListener('input', () => {

        const resultados = [];

        inputs.forEach(input => {
        const longitud = input.value.length;
        resultados.push(longitud);
        });

        ojos.classList.add('ojos-mov');

        const limiteDerecha = 90;
        const limiteIzquierda = 55;

        inputs.forEach(inputs => {
            inputs.addEventListener('input', () => {
            const inputLength = inputs.value.length;
            let moverse = inputLength * 3.5;
                
            moverse = Math.max(limiteIzquierda, Math.min(limiteDerecha, moverse));

            ojos.style.left = `${moverse}px`;
            });
        });
        
    });
});

inputs.forEach((input) => {
    input.addEventListener('blur', () => {
        ojos.classList.remove('ojos-mov');
        ojos.style.left = '75px';
    });
});

const user = document.getElementById('user');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const form = document.querySelector('.form');
const parrafo = document.querySelector('.texto-invalido');
const textInv1= document.querySelector('.texto-inv1');
const textInv2= document.querySelector('.texto-inv2');
const textInv3= document.querySelector('.texto-inv3');


form.addEventListener('submit', e=>{
    e.preventDefault();
    let mensajeinvalido1 = "";
    let mensajeinvalido2 = "";
    let mensajeinvalido3 = "";
    
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    
    let entrar = false;
    parrafo.innerHTML = "";

    textInv1.innerHTML = "";
    textInv2.innerHTML = "";
    textInv3.innerHTML = "";

    if(user.value.length <6){
        mensajeinvalido1 += "el usuario debe de tener al menos 6 letras";
        entrar = true
    }

    if(!regexEmail.test(email.value)){
        mensajeinvalido2 += "el email no es valido";
        entrar = true
    }

    if(pass.value.length <8){
        mensajeinvalido3 += "la contraseña no es valida";
        entrar = true
    }


    if(entrar){
        textInv1.innerHTML = mensajeinvalido1;
        textInv2.innerHTML = mensajeinvalido2;
        textInv3.innerHTML = mensajeinvalido3;
    }
});




const punto_password = document.querySelector('.punto-password');
const mostrar_contra_deco = document.querySelector('.mostrar-contra-deco');


punto_password.addEventListener('click',()=>{
    if(mostrar_contra_deco.offsetWidth == 19){
        mostrar_contra_deco.style.width = '0px';
    }else if(mostrar_contra_deco.offsetWidth == 0){
        mostrar_contra_deco.style.width = '19px';
    }
    
});

const input_password = document.getElementById('password');

punto_password.addEventListener('click',()=>{
    if(input_password.type === 'password'){
        input_password.type = 'text';
    }else if(input_password.type === 'text'){
        input_password.type = 'password';
    }
});


const root_animacion = document.documentElement;
const ambosojos = document.querySelectorAll('.ojos-diseño');
const punto_user = document.querySelector('.punto-user');
const punto_email = document.querySelector('.punto-email');


inputs.forEach((input) => {
    input.addEventListener('focus', (event) => {
        const focusedElement = event.target;

        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

        if (focusedElement) {
            root_animacion.style.setProperty('--ojos-animacion-inicio', 'rgb(253, 130, 7)');
        }
    });

    input.addEventListener('blur', () => {
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

        if(user.value.length <6 || !regexEmail.test(email.value) || pass.value.length <8){
            root_animacion.style.setProperty('--ojos-animacion-inicio', 'rgb(242, 7, 7)');
        }else if(!user.value.length <6 || regexEmail.test(email.value) || !pass.value.length <8){
            root_animacion.style.setProperty('--ojos-animacion-inicio', 'rgb(25, 247, 5)');
        }
    });
});








