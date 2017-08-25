var lat,lon;
function getData(){
if( navigator.geolocation )  
{
navigator.geolocation.getCurrentPosition(function(locat) {

var lat=locat.coords.latitude;
var lon=locat.coords.longitude;
    
var urlString = "https://api.apixu.com/v1/current.json?q=" + lat + "," + lon +"&key=15502b8611704aecae693340172508";
  
  
 $.ajax({
   type: 'GET',
   url: urlString, 
   complete: function (result) { 
  var data = $.parseJSON(result["responseText"]);   $(".cityname").html(data["location"]["name"]);
$(".temprtr").html(data["current"]["temp_c"]);
$(".tempf").html(data["current"]["temp_f"]);     
     $(".condition").html(data["current"]["condition"]["text"]);
 var icnn=data["current"]["condition"]["icon"];    
$(".icn").html("<img src='https:" + data["current"]["condition"]["icon"] + "'/>");     
     
    }
 });     
});
}
};

$(document).ready(function(){  
getData();

$(".btn").click(function(){
    var celciu= $(".temprtr").html();
    var fehrn=Math.round(parseInt($(".temprtr").text()) * 9 / 5 + 32);
  celciu=Math.round(parseInt(($(".tempf").text()-32)*5/9));
		if ($(".corf").html() == "C") {
			$(".corf").html("F");
      $(".temprtr").html(fehrn);
		}
		else {
			$(".corf").html("C");
      $(".temprtr").html(celciu);
		}
	});
                  
});