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

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const app = new App({
	target: document.body,
	props: {
		routes: routes
	}
});



export default app;