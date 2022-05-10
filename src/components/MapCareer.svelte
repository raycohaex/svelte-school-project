<script>
    import { onDestroy, onMount } from 'svelte';

    export let show;

    function initMap() {
            const uluru = { lat: -25.344, lng: 131.031 };
            // The map, centered at Uluru
            const map = new google.maps.Map(document.getElementById("map-career"), {
                disableDefaultUI: true,
                zoom: 4,
                center: {
                    lat: 51.4339328,
                    lng: 5.4669052
                },
                zoom: 17,
                heading: 0,
                tilt: 45,
                mapId: "52ea2c60021b929d" // dark party map
            });
            // The marker, positioned at Uluru
            const marker = new google.maps.Marker({
                position: uluru,
                map: map,
            });

        
            var rotateDegrees = 0;
            if (window.DeviceOrientationEvent) {
                window.addEventListener("deviceorientation", function(event) {
                    var rotateDegrees = event.alpha;

                    handleOrientationEvent(rotateDegrees);
                }, true);
            }

            let heading = 0;

            var handleOrientationEvent = rotateDegrees => {
                if(Math.abs(heading - rotateDegrees) > 8) {
                    heading = rotateDegrees;
                    map.setHeading(rotateDegrees);
                }
            };
        }

        onMount(async () => {
            window.initMap = initMap;
            if(window.google) {
                initMap();
            }
            
        });

</script>

<div id="map-career" class="map-component {show ? ' show' : ''}"></div>
