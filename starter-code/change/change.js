console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );


  $("#left").on('change', function addNow(event) {
    var left = $("input#left").val();
    var right = $("input#right").val();
    var leftVal = parseInt(left) || 0;
    var rightVal = parseInt(right) || 0;
    var total = leftVal + rightVal;
    $("#total").val(total);
    console.log(result);

  });

})
