import {
    loginGoogle,
    signInSession
} from '../js/auth.js';

import { templateCreate } from '../views/templateCreate.js';

export const templateLogin = () => {
    const containerLogin = document.createElement('div');

    const contentLogin = `<element id='signInbox' class='loginInBox'>
                                <form class="create">
                                    <input id='email-user' class='email' type='email' placeholder='Ingrese su correo'>
                                    <input id='password-user' class='password' type='password' placeholder='Ingrese su contraseña'>
                                    <button id='signInBtn' class='login-btn' type='button'>INICIAR SESIÓN</button>
                                    <p id="alert-Error"></p>
                                </form>
                            </element>
                            <element id='signIn' class='signIn'>
                                    <img src='./assets/img/logistica.gif' alt='logo' class='logo-img'>
                                <element id='signInGoogle' class='signInGoogle'>
                                    <h4>Ingrese con su cuenta Google</h4>
                                     <button id='googleBtn' class='googleBtn' type='button'></button>
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
            document.getElementById('alert-Error').innerHTML = 'Ingrese sus datos de registro'
        } else {
            document.getElementById('alert-email').innerHTML = ''
        }
        signInSession(email, password);
    });

    const btnGoogle = containerLogin.querySelector('#googleBtn');
    btnGoogle.addEventListener('click', loginGoogle);

    const btnNewUser = containerLogin.querySelector('#newUserResg');
    btnNewUser.addEventListener('click', () => {

        templateCreate();
    });
    return containerLogin;
};