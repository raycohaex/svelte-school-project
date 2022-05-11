    <script>
        import MapUI from './../components/MapUI.svelte';
        import MapParty from '../components/MapParty.svelte';
        import MapCareer from '../components/MapCareer.svelte';
        import MapCasual from '../components/MapCasual.svelte';
        import { doc, getDoc, getFirestore } from "firebase/firestore";
        import { onDestroy, onMount } from 'svelte';
        import { initializeApp } from "firebase/app";
        import {mapmode} from './../stores/mapstate';

        let mapstate;
        var mapCollection = [];
        var markers = [];

        function initCasualMap() {
            var maps = document.getElementsByClassName("map-component");

            // The map, centered at Uluru
            for(var i=0; i<maps.length; i++) {
                let _map = document.getElementById(maps[i].id);
                let _bgColor = _map.dataset.backgroundcolor || '#ffffff';
                mapCollection[i] = new google.maps.Map(_map, {
                    disableDefaultUI: true,
                    zoom: 4,
                    center: {
                        lat: 51.4339328,
                        lng: 5.4669052
                    },
                    zoom: 17,
                    heading: 0,
                    draggable: false,
                    tilt: 55,
                    mapId: _map.dataset.mapid,
                    backgroundColor: _bgColor
                });
            }
        }

        var rotateDegrees = 0;
        if (window.DeviceOrientationEvent) {
            window.addEventListener("deviceorientation", function(event) {
                var rotateDegrees = event.alpha;

                handleOrientationEvent(rotateDegrees);
            }, true);
        }

        let heading = 0;

        var handleOrientationEvent = rotateDegrees => {
            if(Math.abs(heading - rotateDegrees) > 15) {
                heading = rotateDegrees;
                mapCollection.forEach((_m, i) => {
                    if(i === mapstate.tag){
                        _m.setHeading(rotateDegrees);
                    }                            
                });
            }
        };

        onMount(async () => {
            window.initMap = initCasualMap;
            if(window.google) {
                initCasualMap();
            }
            
            // const docRef = doc(db, "locations", "SF");
            // const docSnap = await getDoc(docRef);

            // if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            // } else {
            // // doc.data() will be undefined in this case
            // console.log("No such document!");
            // }
        });
        

        mapmode.subscribe(value => {
            mapstate = value;
        });

    </script>
    <!--The div element for the map -->
    <MapUI/>

    <div class="map-wrapper">
    
        <MapParty show={mapstate.tag == 0 ? true : false}/>
        <MapCareer show={mapstate.tag == 1 ? true : false}/>
        <MapCasual show={mapstate.tag == 2 ? true : false}/>

    </div>

    <!-- 
     The `defer` attribute causes the callback to execute after the full HTML
     document has been parsed. For non-blocking uses, avoiding race conditions,
     and consistent behavior across browsers, consider loading using Promises
     with https://www.npmjs.com/package/@googlemaps/js-api-loader.
    -->


<style src="./../scss/routes/home.scss"></style>