/*
function menuSpin(x) {
    x.classList.toggle("change");
}

function openNav() {
if(document.getElementById("overlay").style.visibility == "visible")
{
    document.getElementById("overlay").style.visibility = "hidden";
    document.getElementById("overlay").style.opacity = "0";
    document.getElementById("logo").style.color = "#FFFFFF";
    document.getElementById("bar1").style.backgroundColor = "#FFFFFF";
    document.getElementById("bar2").style.backgroundColor = "#FFFFFF";
    document.getElementById("bar3").style.backgroundColor = "#FFFFFF";
    
    if($(window).scrollTop() > 1) {
        $(".headerwrapper").addClass("active");
        $('#header').css('padding', '12px 0');
    } else {
        $(".headerwrapper").removeClass("active");
        $('#header').css('padding', '24px 0');
    }

}
else
{   
    document.getElementById("overlay").style.visibility = "visible";
    document.getElementById("overlay").style.opacity = "1";
    document.getElementById("logo").style.color = "#F47920";
    document.getElementById("bar1").style.backgroundColor = "#F47920";
    document.getElementById("bar2").style.backgroundColor = "#F47920";
    document.getElementById("bar3").style.backgroundColor = "#F47920";
    $('#header').css('padding', '24px 0');
    $(".headerwrapper").removeClass("active");
}}


*/






function initMap() {
                var Latlng = {lat: 1.279896, lng: 103.855430};
                var map = new google.maps.Map(document.getElementById('googlemapwrapper'), {
                    zoom: 17,
                    center: Latlng,
                    gestureHandling: 'cooperative',
                    scrollwheel: false,
                    navigationControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    draggable: true,
                    styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]

                });
                var marker = new google.maps.Marker({
                    lat: 1.2798475,
                    lng: 103.8532363,
                    position: Latlng,
                    map: map
                });
              }
