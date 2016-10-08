(function(){


	let catalogo ={

		controller : CatalogoController,
		templateUrl: 'app/components/catalogo/index.html'
	}

	function CatalogoController(Api_service){

		let auto = this;

		
		Api_service.alls().then(function(response){

			auto.data = response.data;

			console.log(auto.data);

		})
 
  

 
 var owl = $("#owl-demo");



  owl.owlCarousel({
      items : 3, //10 items above 1000px browser width
      itemsDesktop : [1000,3], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });

 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })


	}

	angular

		.module('autonomo')
		.component('catalogoComponent', catalogo);



})();