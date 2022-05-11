import "./scss/main.scss";

import App from './App.svelte';
import Home from './routes/Home.svelte'
import Dashboard from './routes/Dashboard.svelte'
import NotFound from './routes/NotFound.svelte'

const routes = {
    // Exact path
    '/': Home,
    // Wildcard parameter
    '/dashboard': Dashboard,
    // Catch-all
    // This is optional, but if present it must be the last
    '*': NotFound,
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC4EiK-am8EqmJKNAi3t04idBB-_5ieTk",
  authDomain: "pwaproject-348610.firebaseapp.com",
  projectId: "pwaproject-348610",
  storageBucket: "pwaproject-348610.appspot.com",
  messagingSenderId: "571191735541",
  appId: "1:571191735541:web:2d2ab70b736121791ac1bc"
};

const app = new App({
    firebaseConfig: firebaseConfig,
	target: document.body,
	props: {
		routes: routes
	}
});



export default app;