
// group project/hw Maggie, Shreiya and Tiffany W06 DAY01
// https://developers.google.com/maps/documentation/javascript/places
var endPoint = "https:www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDq5r-MVpLn0CiSpGVgDHbwYFvUCQJVGp0";

var map;
var lat;
var lng;
var window;
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

// var apiPublicKeyQuery = "?key=" + GEO_API_KEY;


function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');
}

function error(err) {
  console.log('ERROR(' + err.code + '): ' + err.message);
}

navigator.geolocation.getCurrentPosition(success, error, options);

function initMap() {
   navigator.geolocation.getCurrentPosition(function (position) {
       var position = {
               lat: position.coords.latitude,
               lng: position.coords.longitude
           };
           console.log('position',position);
       map = new google.maps.Map(document.getElementById('map'), {
           center: position,
           zoom: 15
       });
       var marker = new google.maps.Marker({
           position: position,
           map: map,
           title:"Hello World!"
       });
       // To add the marker to the map, call setMap();
       marker.setMap(map);
   });



}

var findBtn = document.getElementById('findme');
findBtn.addEventListener('click', function() {

    $.post({
            url: endPoint,
            dataType: 'json'
        })
        .done(function(response) {
            console.log('response', response);
            var lat = response.location.lat;
            var lng = response.location.lng;
            var location = response;
            var mapContainer = document.getElementById('whereami');
            //mapContainer.appendChild(lat);
            mapContainer.appendChild(document.createTextNode('lat: ' + lat + '  long: ' + lng));
            // initMap();

        });

});

// adding google places
var google;
var searchPlaces = new google.maps.places.PlacesService(map);
  searchPlaces.nearbySearch(request, callback);
  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }
  function createMarker(place) {
        var placeLoc = place.geometry.location;
        var placeMarker = new google.maps.placeMarker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          window.setContent(placeMarker.name);
          window.open(map, this);
        )};
             }
                }):
