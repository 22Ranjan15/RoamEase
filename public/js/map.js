mapboxgl.accessToken = mapToken;

const parsedCoordinates = JSON.parse(coordinates);

const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: parsedCoordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

// Create popup first
const popup = new mapboxgl.Popup({offset: 25})
    .setHTML(`<h4>${listingLocation}, ${listingCountry}</h4><p>Exact location will be provided after booking</p>`);

// Create marker with popup
const marker = new mapboxgl.Marker({color: "red"})
    .setLngLat(parsedCoordinates)
    .setPopup(popup)
    .addTo(map);
