import { createAccount } from './../js/auth.js';

export const templateCreate = () => {
    const containerCreate = document.createElement('div');
    // creamos el contenido del login
    const contentCreate = `<p>Crear cuenta</p>
                            <div class="create">
                                <input id='email-user' class='email' type='email' placeholder='Ingrese su correo'>
                                <input id='password-user' class='password' type='password' placeholder='Ingrese su contraseña'>
                                <input id='password-user2' class='password' type='password' placeholder='Repita su contraseña'>
                                <button id="create">Crear cuenta</button>
                                <p id="alert-Error"></p>
                            </div>`;
                            

    containerCreate.innerHTML = contentCreate;

    // le pido que busque el id del boton dentro del div creado
    const btn = containerCreate.querySelector('#create');
    // evento del botón que llama a la autentificación de google.
    btn.addEventListener('click', () => {
        let email = document.getElementById('email-user').value;
        let password = document.getElementById('password-user').value;
        let repeat = document.getElementById('password-user2').value;

        if(email === '' || password === '' || repeat === '') {
            alert('debe llenar los campos');
        } else {
            if( password !== repeat ) {
                alert('las contraseñas no coinciden');
            } else {
                createAccount(email, password)
                    .then( () => {
                        alert('usuario creado  ' + email );
                        // aqui puedes seguir trabajando
                    })
                    .catch( () => alert('error al registrar') );
            }           
        }
    });
    return containerCreate;
}