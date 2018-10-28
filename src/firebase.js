import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB69pSbAPAmhw2jdYUbchNbCq9-V9nEwEI",
    authDomain: "football-team-f935a.firebaseapp.com",
    databaseURL: "https://football-team-f935a.firebaseio.com",
    projectId: "football-team-f935a",
    storageBucket: "football-team-f935a.appspot.com",
    messagingSenderId: "135704926865"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');

export {
    firebase,
    firebaseMatches,
    firebasePromotions
}