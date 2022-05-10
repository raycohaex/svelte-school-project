    <script>
        import MapUI from './../components/MapUI.svelte';
        import MapParty from '../components/MapParty.svelte';
        import MapCareer from '../components/MapCareer.svelte';
        import MapCasual from '../components/MapCasual.svelte';
        import {mapmode} from './../stores/mapstate';

        let mapstate;

        mapmode.subscribe(value => {
            mapstate = value;
        });
    </script>
    <!--The div element for the map -->
    <MapUI/>

    <div class="map-wrapper">
    
        {#if mapstate.tag == 0}
        <MapParty/>
        {:else if mapstate.tag == 1}
        <MapCareer/>
        {:else if mapstate.tag == 2}
        <MapCasual/>
        {/if}
        
        
       

    </div>

    <!-- 
     The `defer` attribute causes the callback to execute after the full HTML
     document has been parsed. For non-blocking uses, avoiding race conditions,
     and consistent behavior across browsers, consider loading using Promises
     with https://www.npmjs.com/package/@googlemaps/js-api-loader.
    -->


<style src="./../scss/routes/home.scss"></style>