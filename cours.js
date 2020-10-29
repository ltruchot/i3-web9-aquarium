import './style.scss';
import $ from 'jquery';

$('li').addClass('toto');
$('p').prepend('<div></div>');

// va chercher sa couleur
var color = $('div#toto').css('color');
// change sa couleur
$('div#toto').css('color', 'red');
// change plusieurs chose
$('div#toto').css({
  'text-transform': 'uppercase',
  'font-size': '20px',
});

$('body').append('<img /><img /><img />');

var src = $('img').attr('src');
$('img').attr('src', 'chaton.jpg');
$('img').attr({
  src: 'chaton.jpg',
  alt: 'un joli chaton',
  'aria-hidden': 'toto',
});

$('img').on('click', function (e) {
  $(e.target).toggleClass('bordure');
});

var toto = $('<div class="toto">ronron</div>');
toto.addClass('titi');
toto.css('color', 'red');

$('body').append(toto);
$('.bordure').append($('img').eq(0));

console.log($('img').eq(0).closest('.titi'));

$('p').closest('div').css('background-color', 'blue');

$('.chiot1').siblings().addClass('bordure');

console.log($('.chiot1').parents());

var i = 0;
$('li').each(function () {
  if (i % 2 === 0) {
    $(this).addClass('yo');
  }
  i++;
});
