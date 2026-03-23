document.addEventListener('DOMContentLoaded', function(){

  if(document.querySelectorAll('.block-productenquiry').length > 0) {
    var prodImg = document.querySelector('.views-view-responsive-grid--horizontal .views-view-responsive-grid__item:nth-child(1) img').getAttribute('src');

    document.querySelector('.block-productenquiry').style.backgroundImage = "url('" + prodImg + "')"
  }

  if(document.querySelectorAll('.block-solutionsenquiry').length > 0) {
    var indImg;

    var automotive = document.querySelector('img[src="https://static.aesseal.com/graphics/Automotive.webp"');
    var biofuel = document.querySelector('img[src="https://static.aesseal.com/graphics/Biofuels.webp"');
    var chemical = document.querySelector('img[src="https://static.aesseal.com/graphics/industry/Chemical.webp"');
    var construction = document.querySelector('img[src="https://static.aesseal.com/graphics/construction.webp"')
    var food = document.querySelector('img[src="https://static.aesseal.com/graphics/Food-and-Beverage.webp"');
    var marine = document.querySelector('img[src="https://static.aesseal.com/graphics/Marine.webp"');
    var metal = document.querySelector('img[src="https://static.aesseal.com/graphics/Metal-Processing.webp"');
    var mining = document.querySelector('img[src="https://static.aesseal.com/graphics/Mining-and-Minerals.webp"');
    var oil = document.querySelector('img[src="https://static.aesseal.com/graphics/Oil-and-Gas.webp"');
    var power = document.querySelector('img[src="https://static.aesseal.com/graphics/Power-Generation.webp"');
    var pharmacutical = document.querySelector('img[src="https://static.aesseal.com/graphics/industry/Pharmaceutical.webp"');
    var pulp = document.querySelector('img[src="https://static.aesseal.com/graphics/Pulp-and-Paper.webp"');
    var water = document.querySelector('img[src="https://static.aesseal.com/graphics/Water-and-Waste-Water.webp"');

    if(automotive) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Automotive.jpg"
    } else if (biofuel) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Biofuels.jpg"
    } else if (chemical) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Chemical.jpg"
    } else if (construction) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatmobile/Construction.jpg"
    } else if (food) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Food-and-beverage.jpg"
    } else if (marine) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Marine.jpg"
    } else if (metal) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Metal-Processing.jpg"
    } else if (mining) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Mining-and-Minerals.jpg"
    } else if (oil) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Oil-and-Gas.jpg"
    } else if (power) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Power-Generation.jpg"
    }else if (pharmacutical) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Pharmaceutical.jpg"
    } else if (pulp) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Pulp-and-Paper.jpg"
    } else if (water) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Water-and-Waste-Water.jpg"
    }

  document.querySelector('.block-solutionsenquiry').style.backgroundImage =  "url('" + indImg + "')";
  }
});
