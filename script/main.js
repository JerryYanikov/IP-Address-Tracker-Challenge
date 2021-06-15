const searchButton = document.getElementById('search');
const userInput = document.getElementById('userInput');
const ipAddress = document.getElementById('ipAddress');
const locationRes = document.getElementById('location');
const timezone = document.getElementById('timezone');
const infoBox = document.getElementById('info');
const isp = document.getElementById('isp');
let map = document.getElementById('map');
let deflat = 0;
let deflng = 0;
let defzoom = 3;

searchButton.addEventListener('click', function (e) {
    fetch('https://geo.ipify.org/api/v1?apiKey=at_ERnzX65n56nNnyKOGHsrLWqBx1p0t&ipAddress=' + userInput.value)
        .then(response => response.json()).then(
            function retrive(data) {
                ipAddress.innerText = data.ip;
                locationRes.innerText = (data.location.city + ", " + data.location.country + " " + data.location.geonameId);
                timezone.innerText = ('UTC ' + data.location.timezone)
                isp.innerText = data.isp;
                deflat = data.location.lat;
                deflng = data.location.lng;
                defzoom = 15;
                initMap();
                // infoBox.innerText = 'Wrong Input';
                // infoBox.innerHTML = style.fontSize = "2rem";
            }
        );
});

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: deflat,
            lng: deflng
        },
        zoom: defzoom,
    });
}