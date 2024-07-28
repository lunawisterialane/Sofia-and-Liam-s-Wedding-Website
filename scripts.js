// a default starting location
let lat = 51.505;
let lng = -0.09;

// make a blank map and add some tiles
let map = L.map('map').setView([lat, lng], 4);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);