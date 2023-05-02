import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth'

import "./components/export"

const firebaseConfig = {
    apiKey: "AIzaSyCNKg2PScok4omrJ5CNV0Efkw3pz8NjOGI",
    authDomain: "proyecto-1-b68c0.firebaseapp.com",
    projectId: "proyecto-1-b68c0",
    storageBucket: "proyecto-1-b68c0.appspot.com",
    messagingSenderId: "732529824845",
    appId: "1:732529824845:web:f2c7f9cecadfd0d369b804",
    measurementId: "G-K7FYWXNKDK"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)

//register new user
// createUserWithEmailAndPassword(auth, 'eedduxx@gmail.com', '1234567')
// .then((userCredential:any) => {
//     //signed in
//     const user = userCredential.user;
//     console.log(user)
// })
// .catch((error:any) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage);
// })

//log in user
signInWithEmailAndPassword(auth, 'eedduxx@gmail.com', 'wenasSoyUnMalwareXD')
.then((userCredential:any) => {
    //signed in
    const user2 = userCredential.user;
    console.log(user2)
})
.catch((error:any) => {
    const errorCode = error.code;
    const errorMessage = error.message;
})

// sendPasswordResetEmail(auth, 'eedduxx@gmail.com')
// .then(() => {
//     // Password reset email sent!
//     // ..
// })
// .catch((error:any) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
// });

onAuthStateChanged(auth, (user:any) => {
    if (user) {
        const uid = user.uid;
        console.log(uid)
    } else {
        console.log("yolo")
    }
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)