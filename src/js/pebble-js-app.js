Pebble.addEventListener("ready",
  function(e) {
var watchID = navigator.geolocation.watchPosition(function(position) {
var strLoc = "Lat: " + position.coords.latitude + ", Long: " + position.coords.longitude;
var transactionId = Pebble.sendAppMessage( { "0": 42, "1": strLoc }, function(e) {
    console.log("Successfully delivered message with transactionId="  + e.data.transactionId);
  },
  function(e) {
    console.log("Unable to deliver message with transactionId=" + e.data.transactionId + " Error is: " + e.error.message); }
);
	transactionId(); 
});	  
watchID();
  });