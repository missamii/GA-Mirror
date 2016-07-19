console.log('i am alive');


var endPoint = "https:www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyA30BtAT-lBL3irQvEz_0w-yxeQNwz156o";

var map;
var lat;
var lng;

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');
};

function error(err) {
  console.log('ERROR(' + err.code + '): ' + err.message);
};

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



};

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
