import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyC4Z15ejUaUFAUY2LK3n9_5LXh9F6Vrscs",
    authDomain: "istio-training-4562b.firebaseapp.com",
    databaseURL: "https://istio-training-4562b.firebaseio.com",
    projectId: "istio-training-4562b",
    storageBucket: "istio-training-4562b.appspot.com",
    messagingSenderId: "5719957058"
};
// Initalize and export Firebase.
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();