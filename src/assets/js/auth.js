export const loginGoogle = () => {
    console.log('google');
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            console.log('funciona', result);
            // seguir trabajando
        })
}

export const createAccount = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const signInSession = () => {
    return 'Ingreso OK';
}