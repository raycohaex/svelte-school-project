import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAC4EiK-am8EqmJKNAi3t04idBB-_5ieTk",
    authDomain: "pwaproject-348610.firebaseapp.com",
    projectId: "pwaproject-348610",
    storageBucket: "pwaproject-348610.appspot.com",
    messagingSenderId: "571191735541",
    appId: "1:571191735541:web:2d2ab70b736121791ac1bc"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();