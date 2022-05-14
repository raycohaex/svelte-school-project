<script>
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import '../swiped-events';
    import {  Pagination, Scrollbar, A11y } from 'swiper';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import { onMount } from 'svelte';
    import 'swiper/css/scrollbar';

    export let locationName = 'Unknown location';
    export let events = [];
    export let active = false;

    onMount(async () => {
        document.getElementById('close-popup').addEventListener('swiped-down', function(e) {
            e.preventDefault();
            active = false; // the element that was swiped
        });
    });

</script>

<div class="location-popup-wrapper" class:active="{active === true}">
    <div class="location-popup">
        <header id="close-popup" swiped-right="{console.log('drag')}">
            <div class="drag-indicator"></div>
            <h2>{locationName}</h2>
        </header>
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            on:slideChange={() => console.log('slide change')}
            on:swiper={(e) => console.log(e.detail[0])}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            style="width: 100%;"
            >
                {#each events as event}
                    <SwiperSlide>
                        <img src="{event.image}" alt="">
                        <span class="event-name">{event.name}</span>
                        <p class="event-description">{event.description}</p>
                        <footer>
                            <div class="event-info">
                                <span class="event-date"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M96 32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32zM448 464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192H448V464z"/></svg>{event.startDate}</span>
                                <span class="event-entry"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 128C0 92.65 28.65 64 64 64H512C547.3 64 576 92.65 576 128V208C549.5 208 528 229.5 528 256C528 282.5 549.5 304 576 304V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V304C26.51 304 48 282.5 48 256C48 229.5 26.51 208 0 208V128z"/></svg>{event.entry}</span>
                            </div>
                            <a class="route-button" href="#">Route</a>
                        </footer>
                    </SwiperSlide>
                {/each}
            </Swiper>
    </div>
</div>

<style src="./../scss/components/locationpopup.scss"></style>