    <script>
        // Initialize and add the map
        function initMap() {
        // The location of Uluru
        const uluru = { lat: -25.344, lng: 131.031 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
            disableDefaultUI: true,
            zoom: 4,
            center: {
                lat: 51.4339328,
                lng: 5.4669052
            },
            zoom: 17,
            heading: 0,
            tilt: 45,
            mapId: "f4792ebdc438caa1"
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
            position: uluru,
            map: map,
        });
        }
        window.initMap = initMap;

        
    </script>
    <!--The div element for the map -->
    <div class="ui-layer">
        
    </div>
    <div class="map-wrapper">
        <div id="map"></div>
    </div>

    <!-- 
     The `defer` attribute causes the callback to execute after the full HTML
     document has been parsed. For non-blocking uses, avoiding race conditions,
     and consistent behavior across browsers, consider loading using Promises
     with https://www.npmjs.com/package/@googlemaps/js-api-loader.
    -->


<style src="./../scss/routes/home.scss"></style>