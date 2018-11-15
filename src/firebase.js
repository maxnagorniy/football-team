import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

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
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB
}