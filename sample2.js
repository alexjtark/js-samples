
var familyText = function() {
  if ($('.font-color select').val() == "White") {
    $('#family-name').css('color', 'white')
  } else if ($('.font-color select').val() == "Black") {
    $('#family-name').css('color', 'black')
  } else if ($('.font-color select').val() == "Grey") {
    $('#family-name').css('color', 'grey')
  } else if ($('.font-color select').val() == "Blue") {
    $('#family-name').css('color', 'blue')
  } else if ($('.font-color select').val() == "Pink") {
    $('#family-name').css('color', 'pink')
  } else {
    $('#family-name').css('color', 'black')
  }
}

var childText = function() {
  if ($('.font-color select').val() == "White") {
    $('#child-name').css('color', 'white')
  } else if ($('.font-color select').val() == "Black") {
    $('#child-name').css('color', 'black')
  } else if ($('.font-color select').val() == "Grey") {
    $('#child-name').css('color', 'grey')
  } else if ($('.font-color select').val() == "Blue") {
    $('#child-name').css('color', 'blue')
  } else if ($('.font-color select').val() == "Pink") {
    $('#child-name').css('color', 'pink')
  } else {
    $('#child-name').css('color', 'black')
  }
}

var textStyle = function() {
  if ($('.font select').val() == "Chloe") {
    $('.sample-box2').css("background-image", "url({{ 'chloe.jpg' | asset_url }})")
  } else if ($('.font select').val() == "Cricket Alphabet") {
    $('.sample-box2').css("background-image", "url({{ 'cricket-alphabet.jpg' | asset_url }})") 
  } else if ($('.font select').val() == "Noteworthy") {
    $('.sample-box2').css("background-image", "url({{ 'noteworthy.jpg' | asset_url }})") 
  } else if ($('.font select').val() == "Straight & Simple") {
    $('.sample-box2').css("background-image", "url({{ 'straight-simple.jpg' | asset_url }})") 
  } else if ($('.font select').val() == "Easton") {
    $('.sample-box2').css("background-image", "url({{ 'easton.jpg' | asset_url }})") 
  } else if ($('.font select').val() == "Savoye") {
    $('.sample-box2').css("background-image", "url({{ 'savoye.jpg' | asset_url }})") 
  } else if ($('.font select').val() == "Southwest") {
    $('.sample-box2').css("background-image", "url({{ 'southwest.jpg' | asset_url }})") 
  } else if ($('.font select').val() == "Kates ABCs") {
    $('.sample-box2').css("background-image", "url({{ 'kates-abcs.jpg' | asset_url }})") 
  } else if ($('.font select').val() == "Cake Basics") {
    $('.sample-box2').css("background-image", "url({{ 'cake-basics.jpg' | asset_url }})") 
  } else if ($('.font select').val() == "Family Album") {
    $('.sample-box2').css("background-image", "url({{ 'family-album.jpg' | asset_url }})") 
  } else if ($('.font select').val() == "Paper Lace") {
    $('.sample-box2').css("background-image", "url({{ 'paper-lace.jpg' | asset_url }})") 
  } else if ($('.font select').val() == "Quarter Note") {
    $('.sample-box2').css("background-image", "url({{ 'quarter-note.jpg' | asset_url }})") 
  } else if ($('.font select').val() == "Lovely Floral") {
    $('.sample-box2').css("background-image", "url({{ 'lovely-floral.jpg' | asset_url }})") 
  } else if ($('.font select').val() == "Varsity Leter") {
    $('.sample-box2').css("background-image", "url({{ 'varsity-letter.jpg' | asset_url }})") 
  }
} 


var treeMethods = function() {
  // familyName();
  // childName();
  $('.font-color select').change(function(){
    familyText();
    childText();
  });
  $('.wood-stain select').change(function(){
    woodStain();
  });
  $('.font select').change(function() {
    textStyle();
  });
}

var woodStain = function() {
  if ($('.wood-stain select').val() == "Special Walnut") {
    $('.sample-box').css("background-image", "url({{ 'walnut-wood1.jpg' | asset_url }})")
  } else if ($('.wood-stain select').val() == "Sun Bleached") {
    $('.sample-box').css("background-image", "url({{ 'sun-bleached.jpg' | asset_url }})") 
  } else if ($('.wood-stain select').val() == "Dark Walnut") {
   $('.sample-box').css("background-image", "url({{ 'dark-walnut.jpg' | asset_url }})")  
  }
  else if ($('.wood-stain select').val() == "White Wash") {
    $('.sample-box').css("background-image", "url({{ 'whitewash.jpg' | asset_url }})")
  } else if ($('.wood-stain select').val() == "Ipswich Pine") {
    $('.sample-box').css("background-image", "url({{ 'ipswich-wood.jpg' | asset_url }})")
  }
}
  
$(document).ready(function(){
  treeMethods();
});
