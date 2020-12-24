import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBZWpoFv5LCq8qUlgoOBlXLut3R0VW4hKY",
    authDomain: "facebook-8d2e3.firebaseapp.com",
    projectId: "facebook-8d2e3",
    storageBucket: "facebook-8d2e3.appspot.com",
    messagingSenderId: "242882630245",
    appId: "1:242882630245:web:5464585cc36a9286df6c8c"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const storage = firebaseApp.storage()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth , storage , provider , firebaseConfig}

export default db