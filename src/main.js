// Initialize Firebase
var config = {
    apiKey: "AIzaSyBfP3Doa6vzdzVfv826PeruRFH_ZNjpNv4",
    authDomain: "scl008-social-network.firebaseapp.com",
    databaseURL: "https://scl008-social-network.firebaseio.com",
    projectId: "scl008-social-network",
    storageBucket: "scl008-social-network.appspot.com",
    messagingSenderId: "560229280221"
};
firebase.initializeApp(config);

import { initRouter } from './route.js';

const init = () => {
    initRouter();
}

window.addEventListener('load', init);