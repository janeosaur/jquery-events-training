console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  // phrases that are clicked = get/save the text
  // append to h2 and concatenate

$('span').on('click', onClick);

  function onClick() {
    newPhrase = $(this).text();
    $('h2').append(newPhrase);
  };

});
