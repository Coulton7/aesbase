document.addEventListener('DOMContentLoaded', function(){
    var imgSrc =  document.querySelector('.field-product-image .flexslider .slides li:nth-child(1) img').getAttribute('src');
    document.querySelector('.block-productenquiry').style.backgroundImage =   'url(' + imgSrc + ')';
  });

  document.addEventListener('DOMContentLoaded', function(){

    var indImg;

    var automotive = document.querySelector('img[src="https://static.aesseal.com/graphics/Automotive.png"');
    var biofuel = document.querySelector('img[src="https://static.aesseal.com/graphics/Biofuels.png"');
    var chemical = document.querySelector('img[src="https://static.aesseal.com/graphics/Chemical-and-Pharmaceutical.png"');
    var food = document.querySelector('img[src="https://static.aesseal.com/graphics/Food-and-Beverage.png"');
    var marine = document.querySelector('img[src="https://static.aesseal.com/graphics/Marine.png"');
    var metal = document.querySelector('img[src="https://static.aesseal.com/graphics/Metal-Processing.png"');
    var mining = document.querySelector('img[src="https://static.aesseal.com/graphics/Mining-and-Minerals.png"');
    var oil = document.querySelector('img[src="https://static.aesseal.com/graphics/Oil-and-Gas.png"');
    var power = document.querySelector('img[src="https://static.aesseal.com/graphics/Power-Generation.png"');
    var pulp = document.querySelector('img[src="https://static.aesseal.com/graphics/Pulp-and-Paper.png"');
    var water = document.querySelector('img[src="https://static.aesseal.com/graphics/Water-and-Waste-Water.png"');

      if(automotive === true) {
        indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Industry-Solutions.jpg"
      } else if ( biofuel === true) {
        indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Biofuels.jpg"
      } else if ( chemical === true) {
        indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Chemical.jpg"
      } else if ( food === true) {
        indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Food-and-beverage.jpg"
      } else if ( marine === true) {
        indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Marine.jpg"
      } else if ( metal === true) {
        indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Metal-Processing.jpg"
      } else if ( mining === true) {
        indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Mining-and-Minerals.jpg"
      } else if ( oil === true) {
        indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Oil-and-Gas.jpg"
      } else if ( power === true) {
        indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Power-Generation.jpg"
      } else if ( pulp === true) {
        indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Pulp-and-Paper.jpg"
      } else if ( water === true) {
        indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Water-and-Waste-Water.jpg"
      } else {
        return
      }

    docuemtn.querySelector('.block-solutionsenquiry').style.backgroundImage =  'url(' + indImg + ')';
  });

