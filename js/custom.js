/*!

	ontheway coming soon HTML5 creative Template
	Copyright (c) 2014, Subramanian 

	Author: Subramanian
	Profile: themeforest.net/user/FMedia/
	
	Version: 1.0.0
	Release Date: December 2014
	
*/	


"use strict";
		
/* Define required varaible */
	var isMobile = screen.width <= 767; 
	var mobileDevice = screen.width < 1024 && screen.height < 1024;
	var isSmartPhone = ((screen.width <= 959) || (screen.height <= 959));
	var ipad = (screen.width === 768 || screen.height === 768) && (screen.width === 1024 || screen.height === 1024) ;
	var lowResDesktop = window.innerWidth <= 979;
	var isMobileChk = screen.width < 768;
	var isTouch = false;	
	var isMouseDrag = ($("body").hasClass("not_mouseDrag") ||  $("body").hasClass("not_onepage_ver")) ? false : true;	
	var siteStartOpen = false;
	var scrollPos = 0;
	var flxDelay = 5000;
	var headerClose = false;
	var pageHeaderHeight = 90;
	var pageHeaderHeight_mini = 0;
	var defaultVolume = 0;
	var apiRS;
	var supersizedOnBody = true;	
	var superSliderLoad = false;
	var sSliderInter;	
	
	var isTouch = true;
	var swipeThreshold = 75;
	var siteStartOpen = false;
	var scrollPos = 0;
	var flxDelay = 5000;
	var fmUrl = undefined;
	var currentPage_menu = "home";
	var leftMenu = true;
	var pageAlignCenter =  false;
	var scrollHorizontal =  false;
	var onePageVersion =  false;
	var browserWebkit;	
	/* set top Menu height - to fix the browser bug */
	var topMenuHeight = 60;
	/* Enable/disable Menuauto Hide */
	var menuAutoHide = true;
	/* preload images are defined here */	
	var preLoadImgs = [];
	
	var cssAnimate = true;
	
	var animateSyntax = "transition";
	
	
	var BigVid;
	var bgVideopath = "videos/video.mp4";
	
	var agent;
	var ipadDevice;
	var iPhoneDevice;
	var iVersion;
	var retinaDevice;	

	var fancy_bgCol = "#fff";
	var fancy_bgCol_alpha = 1;
	
	var aniInEff = "animated fast fadeInDown";
	var aniOutEff = "animated fast fadeOutUp";


	
	
	/* set the Final date in YYYY/MM/DD HH:SEC:MIN formate  */
	var countdown_value = '2015/10/18 00:00:00 ';
	var countdown_finish = 'countdown finished';
	

	$(document).ready(function(){
							   
		
		/* Find touch device */		
		if (window.navigator.msMaxTouchPoints) {
			isTouch = Boolean(window.navigator.msMaxTouchPoints>1);			
		} else if (window.navigator.maxTouchPoints && window.navigator.pointerEnabled) {
			isTouch = Boolean(window.navigator.maxTouchPoints);			
		} else {
			isTouch = Modernizr.touch;
		}
		
	//	isTouch = true;
	
		
		var eventHoverMc = ('ontouchstart' in document.documentElement) ? 'touchend' : 'mouseover';
		var eventHoutMc = ('ontouchstart' in document.documentElement) ? 'mouseleave' : 'mouseleave';
		var eventClickMc = ('ontouchstart' in document.documentElement) ? 'touchend' : 'mousedown';
			
		cssAnimate = Modernizr.webgl ? true : false;
		animateSyntax = cssAnimate ? "transition" : "animate";		

		retinaDevice = window.devicePixelRatio !== undefined &&  window.devicePixelRatio > 1 ? true : false;
		
		if(retinaDevice){
			$("body").addClass("retinaDevice");
		}
		
		if(!isTouch){
			$("body").addClass("notTouchDevice");
		}else{
			$("body").addClass("touchDevice");
		}

		pageHeaderHeight = 55;
		
		
		
		
		// Find ipad device
		agent = (window.navigator.userAgent).toLowerCase();
		ipadDevice = agent.indexOf("ipad") > -1;
		iPhoneDevice = agent.indexOf("iphone") > -1;
		iVersion = agent.slice(agent.indexOf("version/")+8,agent.indexOf("version/")+11);
		
		fancy_bgCol = $('body').hasClass("white_ver") ? "#fff" : "#111";
		fancy_bgCol_alpha = .98;
		
		var iimg = !retinaDevice ? "images/supersized/pause.png" : "images/supersized/pause@2x.png";
		$("#pauseplay").attr("src",iimg);
		
		$(".addFxEmbossBtn li a").addClass("fxEmbossBtn");
		$(".addFxEmbossBtn li a").append('<span class="btn_hover"></span> ');

		
		
		if( ! ($.browser.msie && ($.browser.version <= 11)) && !isTouch ) {
			$("body").addClass("addCssTransition");
		}
		
		if( (($.browser.version < 10))) {
			$("body").addClass("itsBadIE");
		}
		
		if(isTouch){	
			$(".hideInTouchDevice").remove();
			$(".removeInTouchDevice").remove();				
		}

			
			
		/* Twitter initilize */				
							
		$(function () {
			// start jqtweet!
			try{
				JQTWEET.loadTweets( { numTweets: 5 } );
			}catch(e){}
		});	
				
				
				
/* Fit Text plugin Initialization */	
		try { $(".fittext1").fitText(1.1, { minFontSize: '12px', maxFontSize: '85px' }); } catch (e) { }
		try { $(".fittext2").fitText(1.2, { minFontSize: '12px', maxFontSize: '60px' }); } catch (e) { }
		try { $(".fittext3").fitText(1.1, { minFontSize: '12px', maxFontSize: '40px' }); } catch (e) { }
		
		
	// FitVids Initialization
		try {  $(".container").fitVids(); } catch (e) { }
		try {  $(".container-fluid").fitVids(); } catch (e) { }	

// Home page Diamond shape fix
	
		if(!Modernizr.testAllProps('transform')){
			$(".diamond_container").addClass('fixTransform');
		}
	
	
// Smart Menu
		$(".smartMenu_btn").on(eventClickMc, $(".smartMenu_btn"), function(){
			if($(".smartMenu").hasClass("closeIt")){
				$(".smartMenu").removeClass("closeIt");
				$(".smartMenu").addClass("openIt");					
			}else{
				$(".smartMenu").removeClass("openIt");
				$(".smartMenu").addClass("closeIt");					
			}
		});
		
	
// Mobile Menu	
		$(".mobile_menu_btn").on("click", function(){
			if($(".header_content").css("display") === "block"){
				$(".header_content").data("open", false);				
				$(".header").removeClass("menuOpen");
			}else{
				$(".header_content").data("open", true);				
				$(".header").addClass("menuOpen");
				
			}
			setTimeout( function(){ if(!isTouch){ $("html").getNiceScroll().resize(); }	 }, 500);
		});
	
		$(".showHiddenNav").on("click", function(){
			if($(".header_content .nav").hasClass("hiddenNavs")){
				$(".header_content .nav").removeClass("hiddenNavs");
			}else{
				$(".header_content .nav").addClass("hiddenNavs");				
			}
			setTimeout( function(){ if(!isTouch){ $("html").getNiceScroll().resize(); }	 }, 500);
		});
	
	
		$("#options .catName").each(function(){
			$(this).children(":first-child").clone().appendTo($(this));
			$(this).children(":last-child").addClass("iover")
			$(this).children(":first-child").addClass("nover")
		});
	

	$(".post_blog").each(function(){
			var p_mc = $(this);
			var len = $(this).children().length;
			p_mc.data("cm", 0);

			
			for (var ik=0; ik < len; ik++){
				var nm = $(this).children().eq(ik);				
				nm.data("nn", ik);	
				var psb = $(this).children().eq(ik);
				psb.on("mouseover", psb, function(){
					var ni = $(this);					
					if(p_mc.data("cm") !== ni.data("nn")){
						
						if(p_mc.data("cm") > ni.data("nn") ){
							p_mc.addClass("cursorMoveUp");
						}else{
							p_mc.removeClass("cursorMoveUp");
						}
					}

					p_mc.data("cm", ni.data("nn"));
								
				});				
			}
			
		});
	
// magnificPopup plugin Initialization 

		//Initialize Image
		$('.magnificPopup').each(function(){
			var mc = $(this);
			var tit = mc.attr("data-title") !== undefined ? "data-title" : "title";
			var typ = mc.attr("data-type") !== undefined ? mc.attr("data-type") : "image";
			mc.magnificPopup({
			  image: { titleSrc : tit },
			  type: typ,
			  removalDelay: 500, //delay removal by X to allow out-animation
			  callbacks: {
				change: function() {
					this.content.addClass("animated fadeInLeft");
				  },
			  },
			  closeOnContentClick: true,
			  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
			 });
		 });	
		  
		 
		 //Initialize Gallery
		 $('.magnificPopup_gallery').each(function() { // the containers for all your galleries
			$(this).magnificPopup({
				delegate: 'a', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				},
				callbacks: {
				change: function() {
					this.content.addClass("animated fadeInLeft");
				  },
				},
				closeOnContentClick: true,
				midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
			});
		}); 	
			 
		 
		 // Initialize portfolio item gallery
		 $('.magnificPopup_item_gallery').each(function(){
			 var mc = $(this);
			var  p_items = [];
			 mc.find(".i_gallery").children().each(function(){
				var mc2 = $(this);
				var tit = mc2.attr("data-title") !== undefined ? mc2.attr("data-title") : mc2.attr("title");
				p_items.push({ src : mc2.attr("data-href") , title : tit, type : mc2.attr("data-type") });
			});			
		 	mc.magnificPopup({	
				items:  p_items, // the selector for gallery item
				type: 'image', // this is default type
			  	removalDelay: 500, //delay removal by X to allow out-animation
				gallery: {
				  enabled:true
				},
			  	callbacks: {
				change: function() {
					this.content.addClass("animated fadeInLeft");
				  },
			  	},
			  	closeOnContentClick: true,
			 	midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
			});
		});
		
		// Initialize inline content
		$('.magnificPopup_inline').magnificPopup({
		  type:'inline',
		  callbacks: {
		  change: function() {
			  this.content.addClass("animated fadeInLeft");
			},
		  },
		  closeOnContentClick: true,
		  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
		});

	
		// Initialize popup detail text	
		$('.detail_text').each(function(){	
			var cont = $(this).find(".popup_text")
			$(this).find(".link_btn").magnificPopup({
			  items: {
				  src: cont,
				  type: 'inline'
			  },
			  removalDelay: 500, //delay removal by X to allow out-animation				  
			  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
			});
		});
		
		
// Initialize Background video show Hide button code
		
		$(".bgVideoBtn").each(function(){
			var on_ = $(this).find(".videoUnMute");
			var off_ = $(this).find(".videoMute");
			
			on_.on("click", function(){ 
				off_.show();
				on_.hide();
			});
			
			on_.on("click", function(){ 
				off_.hide();
				on_.show();
			});
			
		});

		
		
// Load Big Video for desktop 
		
			if(Modernizr.video){
						
				$(function() {
					BigVid = new $.BigVideo();
					BigVid.init();					
				});				

				$(".vidPlyPauBtn").data("view", true);
				
				$("body").find('.big_video').each(function(){
					var vmc = $(this);
					var vpath = "";
					var vVolume = "";
					if(vmc.attr("data-background-video") !== undefined){
						vpath = vmc.attr("data-background-video");
						vVolume = isNaN(vmc.attr("data-video-volume")) ? defaultVolume : Number(vmc.attr("data-video-volume"));
					};
					
					vmc.find(".vidPlyPauBtn").each(function() {
						$(this).data("vpath", vpath);
						$(this).data("vVolume", vVolume);
						$(this).data("vHolder", vmc);					
					
						$(this).on("click", function(){ 
							if(bgVideopath !== $(this).data("vpath")) {								
								$("#big-video-wrap").css({"display":"block"});				
								$("#big-video-vid").css({"display":"block"});
								$(this).data("vHolder").append($("#big-video-wrap"));	
								bgVideopath = $(this).data("vpath");	
								if(BigVid !== undefined){
									var vpp = bgVideopath.split(",");
									if(vpp < 2){
										BigVid.show(vpp[0] );
									}else{
										BigVid.show(vpp[0], {altSource:vpp[1]}  );
									}
									BigVid.getPlayer().volume($(this).data("vVolume")); 
								}	
								$("#big-video-wrap").css({"display":"block"});
								$("#big-video-vid").css({"display":"block"});
								$(this).find("i").addClass("highlight");	
													
							}else{											
								if($("#big-video-wrap").css("display") !== "none"){
									BigVid.getPlayer().pause();
									$(this).find("i").removeClass("highlight");
									$("#big-video-vid").css({"display":"none"});
									$("#big-video-wrap").css({"display":"none"});
								}else{														
									BigVid.getPlayer().play();
									$(this).find("i").addClass("highlight");
									$("#big-video-vid").css({"display":"block"});
									$("#big-video-wrap").css({"display":"block"});
								}
							}
						});							
					});
					
				});
				$("#big-video-wrap").css({"display":"none"});
			}
	  
	
		try {
		
			/* Contact page close button*/	
			$("body").find(".closeBtn").each(function(){
				$(this).on("click", function(){ 
					var sel =	$($(this).attr("data-content"));
					if( parseInt(sel.css("top")) < sel.height()-70){
						sel[animateSyntax]({"top":sel.height()-50},500, "easeInOutQuart");
						$(this).children(":first-child").children(":first-child").css({"right" : "0px"});
					}else{
						sel[animateSyntax]({"top":"0px"},500, "easeInOutQuart");
						$(this).children(":first-child").children(":first-child").css({"right" : "-40px"});
					}
				});
			});
			
			/* Add background if it placed below the parallax */
			$("body").find(".inverseStyle.parallax").each(function(){
				$(this).prepend('<div class="inverseStyle" style="position:absolute; width:100%; height:100%; top:0px; left:0px">  </div>')
			});
			
			
			$("body").find(".contentWrapper.lightStyle.parallax").each(function(){
				$(this).prepend('<div class="lightStyle" style="position:absolute; width:100%; height:100%; top:0px; left:0px">  </div>')
			});
			
		} catch (e) { }

		

// Initilize Tab
		
		$('body').find('ul.tabs > li > a').each( function(){
			 $($(this).attr('href')).data("vidd",  $($(this).attr('href')).find('.tabVideo .addVideo') );
		});
		
		$('body').find('ul.tabs > li > a').on('click', function(e) {
			
			//Get Location of tab's content
			var contentLocation = $(this).attr('href');
			//Let go if not a hashed one
			if(contentLocation.charAt(0)=="#") {
			
				e.preventDefault();
			
				//Make Tab Active
				$(this).parent().siblings().children('a').removeClass('active');
				$(this).addClass('active');
			
				//Show Tab Content & add active class
				$(contentLocation).show().addClass('active').siblings().hide().removeClass('active');
			//	$(contentLocation).css({"opacity":"0"})[animateSyntax]({"opacity":1},900);
				
				$('body').find('ul.tabs > li > a').each( function(){
					$($(this).attr('href')).find('.tabVideo .addVideo').remove();
				});

				$(contentLocation).find('.tabVideo').append($(contentLocation).data("vidd"))
				
				$("body").mainFm('scroll_update');
					
				$(contentLocation).find('.graph_container').each(function() {
					$("body").mainFm('graph_display',$(this));
				});
			}
		});



		
// Initilize tipsy 

		$('.hastip').tipsy({gravity: 's'});		
		$('.dotted-nav li a').tipsy({gravity: 'e'});

		$("body").find('.dotted-nav li a').on("click", function(){ 
			$(".tipsy").hide();
		});


	
// Initilize Graph
		
		$("body").find('.contentWrapper').each(function(){
			$(this).find('.graph_container').each(function(){
				$(this).find('li').each(function() {
					var selK = $(this).find(".display");
					$(this).each(function() {
						var vall = parseInt($(this).attr('data-level')) >= 100 ? "0%" : (100 - parseInt($(this).attr('data-level')))+"%";
						$(this).children(':first-child').css("width",vall);						
						selK.text(  parseInt($(this).attr('data-level')));
					});
				});
			});

		});
		
		
// Accordion
		
		jQuery(function($){
				 
			$('.accordion').each( function(){
				
				var allDt = $(this);
				var allPanels = allDt.find(' > dd').hide();
				allDt.find(' dt a').removeClass("active");
				 
				if($(this).attr("data-openFirstElement") === "true"){
				  $(this).children(":first-child").find("a").data('show',true);
				  $(this).children(":first-child").find("a").addClass("active");
				  var $target =  $(this).children(":first-child").next();
				  $target.addClass('active').slideDown();
				}
				

				$(this).find(' > dt > a').on("click", function(){ 
					var $this = $(this);
					var $target =  $this.parent().next();
					
					$("body").mainFm('intVideoObject', $this);				
					$("body").find('.tabVideo').each(function(){
						$(this).find('.vid').remove();
						$(this).find('img').show();
						$(this).find('.video_hover').show().css({"z-index":"5"});
					});
					
					$target.find("a.lazyload").each(function(){
						$("body").mainFm('lazyLoadInt', $(this));
					});
					
					$target.find("a.lazyload_single").each(function(){
						$("body").mainFm('lazyLoadInt', $(this));
					});
					
					$target.find("a.lazyload_fluid").each(function(){
						$("body").mainFm('lazyLoadInt', $(this));
					});
										
					
					$("body").mainFm('intVideoObject', $this);
									
					$("body").find('.tabVideo').each(function(){
						$(this).find('.vid').remove();
						$(this).find('img').show();
						$(this).find('.video_hover').show().css({"z-index":"5"});
					});
					
					
					if($(this).parent().parent().attr("data-autoHide") !== "false"){
						if($this.hasClass("active")){
							allDt.find(' dt a').removeClass("active");
							allPanels.removeClass('active').slideUp();
						}else{
						allDt.find(' dt a').removeClass("active");
						$this.addClass("active");
						$target =  $this.parent().next();
						if(!$target.hasClass('active')){
							allPanels.removeClass('active').slideUp();
							$target.addClass('active').slideDown();
						}
						
						}
					}else{	
						
						if($this.data('show')){
							$this.data('show',false);
							$this.removeClass("active");
							$target.removeClass('active').slideUp();
						}else{
							$this.data('show',true);
							$this.addClass("active");
							$target.addClass('active').slideDown();							
						}
						
					}
					
				
					
					return false;
				});
			});

		}); 
	
		jQuery(function($){
		  var allPanels = $('.accordion_autoHide > dd').hide();
		  $('.accordion_autoHide > dt > a').prepend('<span class="closeOpen" ></span>');
		  

		$('.accordion_autoHide > dt > a').on("click", function(){ 
			$('.accordion_autoHide dt a').removeClass("active");
			var $this = $(this);
			$this.addClass("active");
			$target =  $this.parent().next();
			if(!$target.hasClass('active')){
			  allPanels.removeClass('active').slideUp();
			  $target.addClass('active').slideDown();
			}

			setTimeout(function(){ $("body").mainFm('scroll_update'); },500);
			return false;
		});
	});
		
		
		
		
		
		var prevz = '<div class="setting_tools hideTool">';
		prevz += '<a class="iButton"><i class="icon icon-basic-gear" ></i></a>'; 	
		prevz += '<div class="setting_holder">';
		prevz += '<p class="noPadding">MOVE PANEL : &nbsp; <a class="button mUp"><i class="icon icon-arrows-move-top" ></i></a> <a  class="button mDown"><i class="icon icon-arrows-move-bottom" ></i></a></p>'; 
		prevz += '<hr class="separator_bar">';
		/*prevz += '<p class="first">MENU</p>';
		prevz += '<a class="mType1 button">Normal</a>';
		prevz += '<a class="mType2 button">Inverse</a>';*/
		
		prevz += '<p class="first">Background overlay color</p>';
		prevz += '<a class="overCol1 button squareButton homeBg_color1"></a>';
		prevz += '<a class="overCol2 button squareButton homeBg_color2"></a>';
		prevz += '<a class="overCol3 button squareButton homeBg_color3"></a>';
		
		prevz += '<p>Color</p>';
		prevz += '<a class="colWhite button"></a>';
		prevz += '<a class="colNight button"></a>';
	/*	prevz += '<a class="colBlack button"></a>';*/
		prevz += '<p>Highlight color</p>';
		prevz += '<a class="temHigLight1 button"></a>';	
		prevz += '<a class="temHigLight2 button"></a>';	
		prevz += '<a class="temHigLight3 button"></a>';
		prevz += '<p></p>';
		prevz += '</div></div>';
	//	$("body").prepend( prevz );
	
		var prevTst = '<a class="button tst"></a>'; 	
		prevTst += '<a class="button tst2"></a>';
	//	$("body").prepend( prevTst );		
		

});






		

/* Initilize vimeo player */



function vimeo_video(mc){
	(function(){
	  // Listen for the ready event for any vimeo video players on the page
	  var  player = document.querySelector(mc);
	   $f(player).addEvent('ready', ready);
	  

	  function addEvent(element, eventName, callback) {
		  if (element.addEventListener) {
			  element.addEventListener(eventName, callback, false);
		  }
		  else {
			  element.attachEvent('on' + eventName, callback);
		  }
	  }

	  function ready(player_id) {
		  // Keep a reference to Froogaloop for this player
		  var container = document.getElementById(player_id).parentNode.parentNode,

			  froogaloop = $f(player_id);
		  
		  //buttons = container.querySelector('div dl.simple'),
			  var volumeBtn = container.querySelector('.volume');
			  
			  if(volumeBtn){
				  froogaloop.api('setVolume', 0);
			   
				  // Call setVolume when volume button clicked
				  addEvent(volumeBtn, 'click', function(e) {
					  // Don't do anything if clicking on anything but the button (such as the input field)
					  if (e.target != this) {
						  return false;
					  }
	
					  // Grab the value in the input field
					  var volumeVal = this.querySelector('input').value;
	
					  // Call the api via froogaloop
					  froogaloop.api('setVolume', volumeVal);
				  }, false);
	
				  // Call setLoop when loop button clicked 
			  }
	  }
  })();
}



/* cycle slideshow plugin  initilize */

function cycle_pluign(mc){
	var aniType = mc.attr("data-transition") ? mc.attr("data-transition") : 'scrollDown';
	var tim = !isNaN(mc.attr("data-starttime")) ? Number(mc.attr("data-starttime")) : 0;
	var tim_end = !isNaN(mc.attr("data-endtime")) ? Number(mc.attr("data-endtime")) : 2000;
	var easingType = mc.attr("data-easing") ? mc.attr("data-easing") : 'easeInOutBack';
	mc.hide();
	var nextBtn = mc.find(".next");
	var prevBtn = mc.find(".prev");
	mc.parent().find(".cycleNextPrev").append(nextBtn);
	mc.parent().find(".cycleNextPrev").append(prevBtn);
	setTimeout(function(){
		mc.show();
		mc.cycle({
			fx: aniType, // choose your transition type, ex: fade, scrollUp, shuffle, etc...
			speed:    1000, 
			easing: easingType,
			containerResize: 1,
			slideResize:      1,
			timeout:  tim_end ,
			pause:   true,
			next: nextBtn,
            prev: prevBtn
		});
	}, tim)
}	


