<script>
	/* Imports */
	import Router from 'svelte-spa-router'
	import {mapmode} from './stores/mapstate';

	export let routes;
	let mapstate;

	mapmode.subscribe(value => {
		mapstate = value;
	});

</script>

<main class="main {mapstate.class}">
	<Router {routes}/>
</main>