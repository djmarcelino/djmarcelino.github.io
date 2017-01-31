

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
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
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
