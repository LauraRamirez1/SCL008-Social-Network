import {
    loginGoogle,
    signInSession
} from '../js/auth.js';

import { templateCreate } from '../views/templateCreate.js';


export const templateLogin = () => {
    const containerLogin = document.createElement('div');

    const contentLogin = ` <img src='./assets/img/RAM.png' alt='logo' class='logo-img'> 
                                <element id='signInbox' class='loginInBox'>
                              <div class="create">
            <input id='email-user' class='email' type='email' placeholder='Ingrese su correo'>
            <input id='password-user' class='password' type='password' placeholder='Ingrese su contraseña'>
            <button id='signInBtn' class='login-btn type='button'>INICIAR SESIÓN</button>
            <p id="alert-Error"></p>
        </div>
    </element>
    <element id='signIn' class='signIn'>
         <element id='signInGoogle' class='signInGoogle'>
            <h4>Ingrese con su cuenta Google</h4>
             <button id='googleBtn' class='googleBtn' type='button'> Google </button>
        </element>
        <element class='newUser'>
        <h4 id='newUserResg'>Si no tiene cuenta, registrese <a href='#/create'>aquí</a></h4>
        </element>
    </element>`
    containerLogin.innerHTML = contentLogin;

    const btn = containerLogin.querySelector('#signInBtn');
    btn.addEventListener('click', () => {
        let email = containerLogin.querySelector('#email-user').value;
        let password = containerLogin.querySelector('#password-user').value;

        if (email === '' || password === '') {
            document.getElementById('alert-Error').innerHTML = 'Ingrese sus datos de registro';
        } else {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    alert('bienvenido ' + email);

                })
                .catch(e => {
                    alert('Usuario o contraseña incorrectos');
                    console.log('error al autenticar');
                });
        }
        // signInSession(email, password);
    });

    const btnGoogle = containerLogin.querySelector('#googleBtn');
    btnGoogle.addEventListener('click', loginGoogle);

    const btnNewUser = containerLogin.querySelector('#newUserResg');
    btnNewUser.addEventListener('click', () => {


        templateCreate();
    });

    return containerLogin;
};