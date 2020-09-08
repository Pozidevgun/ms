	
$(function(){
	
    let header = $(".header"),
	    introH = $(".header-component").innerHeight(),
	    scrollOffset = $(window).scrollTop();
/*fixed header*/
	checkScroll(scrollOffset);

	$(window).on("scroll", function(){

			scrollOffset = $(this).scrollTop();
			checkScroll(scrollOffset);

	});

	function checkScroll(scrollOffset) {
		scrollOffset = $(this).scrollTop();

			if(scrollOffset >= introH){
				header.addClass("header--fixed");
			}else{
				header.removeClass("header--fixed");
			}
	}
	/*Smooth scroll*/
	$(".logo").on("click", function(event){
		event.preventDefault();

		let blockId = $(this).data('scroll'),
			blockOffset = $(blockId).offset().top;
		
		$("html, body").animate({
			scrollTop: blockOffset

		}, 700);

	});
    $(".nav-burger__icon").on("click", function(event){
		event.preventDefault();
		$(".nav-burger").toggleClass("nav-burger--open");
	});
	let video 	= $('#videomain').get(0),
	playPause 	= $('#play1');

	playPause.on('click', playBtn)
	


function playBtn(){
			if(video.paused){
            	video.play();
				playPause.children().attr("src", "img/pause.png");
				playPause.removeClass("active");
        	}else{
            	video.pause();
				playPause.children().attr("src", "img/play-button.png");
			}
		}


});

