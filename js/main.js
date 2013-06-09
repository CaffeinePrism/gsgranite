function initialize() {
	var gsgranite = new google.maps.LatLng(37.660666, -122.115809);
	var center = new google.maps.LatLng(37.66200, -122.11700);
	var homedepot = new google.maps.LatLng(37.6633357, -122.1184911);
	var bounds = new google.maps.LatLngBounds();
	bounds.extend(gsgranite);
	bounds.extend(homedepot);
	var contentString =
		'<h1 style="font-size: 1.5em; width: 15em;">Golden Stone Granite Marble and Building Supplies Inc</h1>'+
		'<div id="bodyContent">'+
		'21615 Hesperian Boulevard<br />'+
		'Hayward, CA 94541<br />'+
		'(510) 266-3633.</p>'+
		'<a href="https://maps.google.com/maps?daddr=Golden+Stone+Granite+Marble+and+Building+Supplies+Inc,+21615+Hesperian+Boulevard,+Hayward,+CA+94541&z=18">'+
		'Directions</a> '+
		'</div>'+
		'</div>';
    var mapOptions = {
        zoom: 18,
        center: center,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
    var marker = new google.maps.Marker({
        position: gsgranite,
        map: map,
        title: "GS Granite"
    });
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
    infowindow.open(map,marker);
    map.fitBounds(bounds);
}
function loadmaps() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
  document.body.appendChild(script);
}
$(document).ready(function(){
	$('#menu').visualNav({
		contentClass      : 'outer',
		animationTime     : 800
	});
	loadmaps();
	$( ".carousel" ).carousel();
});
$("#baa img").click(function() {
    $("#telefrancais img").attr("src", "granite/" + $(this).attr("src").split("/")[2]);
    $("#telefrancais h3").html($("#telefrancais img").attr("src").split("/")[1].replace(/_/g, ' ').split(".")[0]);
});
$("#telefrancais img").click(function() {
	window.open('granite/' + $("#telefrancais img").attr("src").split("/")[1],'','width=950px,height=500px');
});
$("#disclaimer p").hide();
$('#toggler').text("[show]");
$("#disclaimer > h2").click(function() {
	$("#disclaimer p").toggle();
	var text = $("#disclaimer p").is(":visible") ? '[hide]' : '[show]';
	$('#toggler').text(text);
});
$("body").prepend("<div id='note'>TO DEAR LEADER: Resize the browser window for more fun!</div>");