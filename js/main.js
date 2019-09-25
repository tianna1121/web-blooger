$(document).ready(function() {
  console.log("heeeeeee");
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  /* click event on taggle menu */
  $toggleCollapse.click(function() {
    $nav.toggleClass("collapse");
  });
});
