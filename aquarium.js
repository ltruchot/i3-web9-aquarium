import './style.scss';
import $ from 'jquery';

$('.aquarium').append('<div class="water"></div>');

$('body').append('<img class="family" src="family.png" />');

var fish1 = $('<div class="fish fish1"></div>');
var fish2 = $('<div class="fish fish2"></div>');
var fish3 = $('<div class="fish fish3"></div>');

var babelune = fish1.clone().css({
  width: '50px',
  height: '30px',
  top: '50px',
  left: '200px',
});

var kodseo = fish3.clone().css({
  width: '65px',
  height: '40px',
  top: '100px',
  left: '10px',
  transform: 'scale(-1, 1)',
});

var requinou = fish3.clone().css({
  width: '65px',
  height: '20px',
  top: '150px',
});

$('.water').append(babelune, kodseo, requinou);

setInterval(function () {
  var previousLeft = parseInt(babelune.css('left'), 10);
  babelune.css('left', `${previousLeft + 1}px`);
}, 250);
