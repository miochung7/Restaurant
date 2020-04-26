document.body.className += "js-loading";

window.addEventListener("load", showPage, false);

function showPage() {
    document.body.className = document.body.className.replace("js-loading", "");
}


// Mapbox

mapboxgl.accessToken = 'pk.eyJ1IjoibWlvY2h1bmc3IiwiYSI6ImNrOG13cXoxbDA2c2UzbW1lcm1iZWZ5NnEifQ.5nuyV8naVrjogYKyx_TFzw';



const map = new mapboxgl.Map({
    container: 'map', //appears in the container with the ID map
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-0.126240, 51.511580], // Starting position [lng, lat]
    zoom: 11.89, // [Starting zoom]
});



// Custom Marker

var marker = new mapboxgl.Marker() // initialize a new marker
    .setLngLat([-0.126240, 51.511580]) // Marker [lng, lat] coordinates
    .addTo(map); // Add the marker to the map

// Geocode

var geocoder = new MapboxGeocoder({ // Initialize the geocoder
    accessToken: mapboxgl.accessToken, // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    marker: false, // Do not use the default marker style
    placeholder: '',
    proximity: {
        longitude: -0.126240,
        latitude: 51.511580
    }
});

// Add the geocoder to the map
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);

// Add zoom navigation control
map.addControl(new mapboxgl.NavigationControl());

window.addEventListener('resize', () => {
    map.zoomTo(0);
});