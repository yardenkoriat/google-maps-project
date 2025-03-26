'use strict'

function initMap() {
  var mapOptions = {
    center: { lat: 32.0853, lng: 34.7818 }, // תל אביב
    zoom: 12
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
