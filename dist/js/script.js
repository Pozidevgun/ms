$(function(){
    let header = $(".header"),
	    introH = 900, // потому что из-за слика не получается правильно высчитать высоту
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
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		let	blockId = $(this).data('scroll'),
			blockOffset = $(blockId).offset().top;

		$("html, body").animate({
			scrollTop: blockOffset

		}, 700);

	});
    $(".nav-burger__icon").on("click", function(event){
		event.preventDefault();
		$(".nav-burger").toggleClass("nav-burger--open");
	});

	//video

 $('.video').on('click', function(){
	let a = $(this).find('.videomain').get(0),
		b = $(this).find('.play__button');

			if (a.paused == true){
				a.play();
				
				b.attr("src", "img/pause.png");
			}else{
				a.pause();
				b.attr("src", "img/play-button.png");
			}
 });
	/*$('.videomain').click(function() {
        this.paused ? this.play() : this.pause();
    });*/
	/*let video 	= $('.videomain'),
	playPause 	= $('.play');

	playPause.on('click', playBtn)*/
	


/*function playBtn(){
			if(video.paused){
            	video.play();
				playPause.children().attr("src", "img/pause.png");
				playPause.removeClass("active");
        	}else{
            	video.pause();
				playPause.children().attr("src", "img/play-button.png");
			}
		}*/

		//slider-top
			$('.slider__wrapper').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				prevArrow: '.prev',
				nextArrow: '.next',
				responsive: [
					{
					  breakpoint: 800,
					  settings: {
						dots: false
					  }
					},
				  ]
			});
			//slider-customer
			$('.slider-customer__wrapper').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				prevArrow: '.slider-customer__btn.prev',
				nextArrow: '.slider-customer__btn.next',
			});

			//accordion

			$('.accordion__header').on("click", function(){
				$(this).closest('.accordion__item').siblings().removeClass('accordion__item--active').find('.accordion__descr').slideUp(400);
				$(this).closest('.accordion__item').toggleClass('accordion__item--active').find('.accordion__descr').slideToggle(400);
				return false;
			});

			//card
			$('.card__top').on('mouseenter',function(){
				$(this).find('.card__hover').addClass('card__hover--active');
			});
			$('.card__top').on('mouseleave',function(){
				$(this).find('.card__hover').removeClass('card__hover--active');
			});
});

