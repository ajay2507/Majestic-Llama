$('#navbar a').click(function(e) {
var txt = $(e.target).text();
if(txt == "Am i Useful"){
	if($("#useful1").hasClass("animated bounceInDown") == false){
	$("#useful1").addClass("animated bounceInDown");
	$("#useful2").addClass("animated bounceInDown");
	$("#useful3").addClass("animated bounceInDown");
}}
});

$(document).ready(function() {

  $("#useful1").removeClass("animated bounceInDown");
	$("#useful2").removeClass("animated bounceInDown");
	$("#useful3").removeClass("animated bounceInDown");

	$('.education').hover(
		function(){

			$(this).find('.imgslider').slideDown(250);
		},
		function(){
			$(this).find('.imgslider').slideUp(250);
		}
	);
});
