function initMap()
{
    var we = { lat: -74.69, lng: 164.09};
    var map = new google.maps.Map(
        document.getElementById("map"), {zoom: 2, center: we}
    );
    var marker = new google.maps.Marker({position: we, map: map});
    console.log('hello');
}