// Bootstrap specific functions and styling
jQuery(document).ready(function(){jQuery('.comment-reply-link').addClass('btn btn-sm btn-default');jQuery('#submit, button[type=submit], html input[type=button], input[type=reset], input[type=submit]').addClass('btn btn-default');jQuery('.widget_rss ul').addClass('media-list');jQuery('.postform').addClass('form-control');jQuery('table#wp-calendar').addClass('table table-striped');jQuery('#submit, .tagcloud, button[type=submit], .comment-reply-link, .widget_rss ul, .postform, table#wp-calendar').show("fast")});

// jQuery powered scroll to top
jQuery(document).ready(function(){jQuery(window).scroll(function(){if(jQuery(this).scrollTop()>100){jQuery(".scroll-to-top").fadeIn()}else{jQuery(".scroll-to-top").fadeOut()}});jQuery(".scroll-to-top").click(function(){jQuery("html, body").animate({scrollTop:0},800);return false})})

//Elinimate styling conflict when 2 custom menus present
jQuery(document).ready(function(){if ($('ul#menu-our-services-1').length == 0) { $('ul#menu-our-services li').addClass('normal-display') };});


jQuery(document).ready(function(){$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".navbar-default1").addClass("navbar-dark");
    } else {
        $(".navbar-default1").removeClass("navbar-dark");
    }
	});
   $(".color").hover(function(){$(this).find("a").css("color", "white");}, function(){$(this).find("a").css("color", "black");});
$('.anchorLink').click(function(){$('html, body').animate({scrollTop: $( $(this).attr('href') ).offset().top}, 500);return false;});
$('#myModal1').on('shown.bs.modal',function(){ $(this).find('iframe').attr('src','/case-study-one') });
// Reveal text for advanced recent posts.
$(".reveal").hover(function(){$(this).find(".showing").css("display", "none");}, function(){$(this).find(".showing").css("display", "table");});
$(".reveal").hover(function(){$(this).find(".showing1").css("display", "none");}, function(){$(this).find(".showing1").css("display", "table");});

	function myheight(){
	   var height = $(document).find(".grandparent").width();
	   var height2 = $(document).find(".effect-bubba").width();
	   $(document).find(".parent").css("height", height);
	   $(document).find(".effect-bubba").css("height", height2);
	   $(document).find(".showing3").css("height", height);
	};


	$( document ).ready(function() {
	   myheight();
	   if ($('body').hasClass('page-id-2')) {$('head').append('<style> div#content { background-color: #08415E!important;} </style>');};
	   
	});

	$(window).resize(function(){
	   myheight();
	})
	$(".grandparent").hover(function(){
	   $(this).find(".parent").css("display", "table");
	   $(this).find(".showing3").css("display", "none");
	}, function()
	                       {
	   $(this).find(".parent").css("display", "none");
	   $(this).find(".showing3").css("display", "table-cell");
	});
	$('button.btn.btn-primary.btn-lg.outline.entypo-calendar.action-button').click(function(){
	   window.location.href='/marketing-leverage-analysis';
	});


	$("#slideshow > div:gt(0)").hide();

	setInterval(function() { 
	  $('#slideshow > div:first')
	    .fadeOut(1000)
	    .next()
	    .fadeIn(1000)
	    .end()
	    .appendTo('#slideshow');
	},  4000);
});

$(window).bind("load", function() {
   if ($('article').hasClass('status-publish')) {$('.cta_button').attr('target', '_blank')};
});
