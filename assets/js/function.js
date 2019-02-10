$(function(){




$(".msg").hide().delay(20000).fadeIn("slow");
$(".jw_form").hide();
$(".jw_primetext").delay(14600).fadeOut("slow").css("color","#fff");
$(".jw_whats").hide().delay(15000).fadeIn("slow").addClass("animated slideInLeft");
$(".jw_face").hide().delay(17000).fadeIn("slow").addClass("animated slideInLeft");
$(".jw_insta").hide().delay(19000).fadeIn("slow").addClass("animated slideInLeft");
$(".typed-cursor").css("font-size","2em");

$(".jw_want").hide().delay(20200).fadeIn("slow").click(function () {
	$(".jw_form").fadeIn("slow").addClass("animated slideInUp");
	$(".jw_want").fadeOut("slow");
});
$(".objetivo").delay(14600).css("background-color","#fff");
$(".objetivo").css("background-color","#fff").delay(14600).css("background-color","transparent");

});