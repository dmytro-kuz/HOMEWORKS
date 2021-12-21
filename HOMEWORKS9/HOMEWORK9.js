// ******************Task1********************

$( "a[href^='https://']" ).attr( "target", "_blank" );



// ******************Task2********************

$('h2.head').css('background', 'green');
$('h2.head>.inner').css('font-size', '35px');



// ******************Task3********************

$('h3+div:first').after($('h3:first'));
$('h3+div:last').after($('h3:last'));



******************Task4********************

$("input").on("click", function () {
    if ($("input:checked").length === 3) {
      $("input").attr("disabled", "disabled");
    }
  });


