$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    $("#survey").hide();
    $("#response").show();
  });
});
