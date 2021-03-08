$(function() {
  function setColor() {
    let red = $( "#red" ).slider( "value" ),
      green = $( "#green" ).slider( "value" ),
      blue = $( "#blue" ).slider( "value" );
    $( "#background-id" ).css( "background-color", "#" + "rgb(" + red + ", " + green + ", " + blue + ")" );
    $( "#text-id" ).css( "color", "#" + "rgb(" + red + ", " + green + ", " + blue + ")" );
  }

  $( "#red, #green, #blue" ).slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: setColor,
    change: setColor
  });

  $("#color" ).click(function() {
    $(".background").attr('id', '');
    $(".text").attr('id', 'text-id');
  });

  $("#backgroundColor" ).click(function() {
    $(".text").attr('id', '');  
    $(".background").attr('id', 'background-id');
  });
});
