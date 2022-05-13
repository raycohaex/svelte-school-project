<script>
    export let locationName = 'Unknown location';
    export let events = [{
        name: 'Test',
        image: 'https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Begrippenlijst.svg',
        startDate: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
    },
    ];
</script>

<div class="location-wrapper">
    <header>
        <h2>{locationName}</h2>
    </header>
    {#each events as event}
        <img src="{event.image}" alt="">
        <span class="event-name">{event.name}</span>
        <span class="event-date">{event.startDate}</span>
    {/each}
</div>