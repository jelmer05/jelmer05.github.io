jQuery(document).ready(function ($) {
  var mastheadheight = $(".ds-header").outerHeight();
  //console.log(mastheadheight);
  $(".ds-banner,.ds-main-section").css("margin-top", mastheadheight);

  $(window)
    .scroll(function () {
      if ($(window).scrollTop() >= 10) {
        $(".ds-header").addClass("ds-fixed-header");
      } else {
        $(".ds-header").removeClass("ds-fixed-header");
      }
    })
    .scroll();
});
let output = new CountUp("myTargetElement", 5);
if (!output.error) {
  output.start();
} else {
  console.error(output.error);
}

function dark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}