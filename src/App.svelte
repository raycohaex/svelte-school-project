<script>
	/* Imports */
	import Router from 'svelte-spa-router'

	export let routes;
</script>

<main class="main">
	<Router {routes}/>
</main>