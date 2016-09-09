$('#navbar a').click(function(e) {
var txt = $(e.target).text();
console.log(txt);
if(txt == "Am i Useful"){
	if($("#useful1").hasClass("animated bounceInDown") == false){
	$("#useful1").addClass("animated bounceInDown");
	$("#useful2").addClass("animated bounceInDown");
	$("#useful3").addClass("animated bounceInDown");
}}
});

$(document).ready(function() {
  alert("loading");
  $("#useful1").removeClass("animated bounceInDown");
	$("#useful2").removeClass("animated bounceInDown");
	$("#useful3").removeClass("animated bounceInDown");
});

$('.hover1').mouseover(function() {
  $('.text').css("visibility","visible");
});

$('.hover1').mouseout(function() {
  $('.text').css("visibility","hidden");
});
