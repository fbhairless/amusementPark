$(function() {
  $("#height form").submit(function(event) {
    var riderHeight = $('input#riderHeight').val();
      if (parseInt(riderHeight) < 48) {
        $("#overSeventyTwo").hide();
        $("#noRestrict").hide();
        $("#underFortyEight").show();
      }
      else if (parseInt(riderHeight) > 72) {
        $("#underFortyEight").hide();
        $("#noRestrict").hide();
        $("#overSeventyTwo").show();
      }
      else {
        $("#underFortyEight").hide();
        $("#overSeventyTwo").hide();
        $("#noRestrict").show();
      }
      event.preventDefault();
    });
});
