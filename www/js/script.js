﻿$(document).ready(function(){
	$("#a-obzor").click(function(){
		$("#a-obzor").addClass("active");
		$("#a-haract").removeClass("active");
		$("#a-video").removeClass("active");
		$("#obzor").css("display","block");
		$("#haract").css("display","none");
		$("#video").css("display","none");
	});
	$("#a-haract").click(function(){
		$("#a-obzor").removeClass("active");
		$("#a-haract").addClass("active");
		$("#a-video").removeClass("active");
		$("#obzor").css("display","none");
		$("#haract").css("display","block");
		$("#video").css("display","none");
	});
	$("#a-video").click(function(){
		$("#a-obzor").removeClass("active");
		$("#a-haract").removeClass("active");
		$("#a-video").addClass("active");
		$("#obzor").css("display","none");
		$("#haract").css("display","none");
		$("#video").css("display","block");
	});
	$(".informatsiya-p").click(function(){
		$("#fixed-modal").css("display","block");
	});
	$(".informatsiya-d").click(function(){
		$("#fixed-modal2").css("display","block");
	});
	$(".close").click(function(){
		$("#fixed-modal").css("display","none");
		$("#fixed-modal2").css("display","none");
	});
	$(".chastnoe").click(function(){
		$("#yuridicheskoe").removeClass("active");
		$("#chastnoe").addClass("active");
		$(".hidden").css("display","none");
		$(".hidden2").css("display","none");
		$(".hidden3").css("display","block");
	});
	$(".yuridicheskoe").click(function(){
		$("#chastnoe").removeClass("active");
		$("#yuridicheskoe").addClass("active");
		$(".hidden").css("display","block");
		$(".hidden2").css("display","inline-block");
		$(".hidden3").css("display","none");
	});
});