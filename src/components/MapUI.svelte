<script>
    let active = {
        uiLayerControlsMenuToggle: false
    }

    let height = window.innerHeight;
</script>

<div class="ui-layer-controls {active.uiLayerControlsMenuToggle ? 'active' : ''}" style="height:{height}px;">
    <div class="ui-layer-controls-menu-toggle {active.uiLayerControlsMenuToggle ? 'active' : ''}" on:click={() => active.uiLayerControlsMenuToggle = !active.uiLayerControlsMenuToggle}></div>     
    <div class="ui-layer-controls-menu-container {active.uiLayerControlsMenuToggle ? 'active' : ''}">
        <div class="switch-app-category-container">
            <div class="switch-app-category-button active">
                <svg width="100%" height="100%" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                    <g transform="matrix(0.703682,0,0,1,75.8938,0)">
                        <path d="M502,57.63C512,47.653 502,27 478.3,27L33.72,27C9.962,27 0.625,48.294 9.962,57.63L244.078,271.63L244.078,448L175.1,448C148.59,448 139.45,455.387 139.45,464.5C139.45,467.537 135.164,470 144,470L368,470C376.836,470 372.55,467.537 372.55,464.5C372.55,455.387 362.51,448 336,448L268.784,448L268.784,271.6L502,57.63ZM478.28,48.294L319.329,190.706L192.656,190.706L33.72,48.294L478.28,48.294Z" style="fill:white;fill-rule:nonzero;"/>
                    </g>
                </svg>                
                <span>Clubbing</span>
            </div>
            <div class="switch-app-category-button">
                <svg width="100%" height="100%" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                    <g transform="matrix(0.703682,0,0,1,75.8938,0)">
                        <path d="M502,57.63C512,47.653 502,27 478.3,27L33.72,27C9.962,27 0.625,48.294 9.962,57.63L244.078,271.63L244.078,448L175.1,448C148.59,448 139.45,455.387 139.45,464.5C139.45,467.537 135.164,470 144,470L368,470C376.836,470 372.55,467.537 372.55,464.5C372.55,455.387 362.51,448 336,448L268.784,448L268.784,271.6L502,57.63ZM478.28,48.294L319.329,190.706L192.656,190.706L33.72,48.294L478.28,48.294Z" style="fill:white;fill-rule:nonzero;"/>
                    </g>
                </svg>                
                <span>Business</span>
            </div>
            <div class="switch-app-category-button">
                <svg width="100%" height="100%" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                    <g transform="matrix(0.703682,0,0,1,75.8938,0)">
                        <path d="M502,57.63C512,47.653 502,27 478.3,27L33.72,27C9.962,27 0.625,48.294 9.962,57.63L244.078,271.63L244.078,448L175.1,448C148.59,448 139.45,455.387 139.45,464.5C139.45,467.537 135.164,470 144,470L368,470C376.836,470 372.55,467.537 372.55,464.5C372.55,455.387 362.51,448 336,448L268.784,448L268.784,271.6L502,57.63ZM478.28,48.294L319.329,190.706L192.656,190.706L33.72,48.294L478.28,48.294Z" style="fill:white;fill-rule:nonzero;"/>
                    </g>
                </svg>                
                <span>Casual</span>
            </div>
        </div>
        <div>
            <select class="select-range">
            <option default>Today</option>
            <option>Friday + weekend</option>
            <option>Week</option>
          </select>
        </div>
    </div>     
</div>


<style src="./../scss/components/mapui.scss"></style>