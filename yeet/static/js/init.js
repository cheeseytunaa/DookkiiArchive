document.addEventListener("contextmenu", event => event.preventDefault());

$(document).keydown((event) => {
  if ((event.keyCode == 123) || (event.ctrlKey && event.shiftKey && event.keyCode == 73)) {
    hok_pe_oii();
    return false;
  } else if ((event.keyCode == 116) || (event.ctrlKey && event.keyCode == 82)) {
    transition(window.location);
    return false;
  };
});

window.onload = onload_transition()
// setTimeout(() => {
//   AOS.init({once: true})
// }, 3500);

function hok_pe_oii() {
  swal("Hôk pé ơii!", "Em đòi mở dev-console à. Anh ko cho đâuuuu~", "error");
}

function random(range) {
  return Math.floor(Math.random() * range);
}
function get_color(variable) {
  let root = document.querySelector(':root');
  let root_styles = getComputedStyle(root);
  return root_styles.getPropertyValue(variable);
}

$(function(){
  $("#yes").hover(function() {
    $(this).text("Có cái nịt 😏");
    $(this).removeClass("btn-success");
    $(this).addClass("btn-danger");
  },
  function() {
    $(this).text("Có chứ");
    $(this).removeClass("btn-danger");
    $(this).addClass("btn-success");
  });
});

$("button").click(function(){
  $("div#hehehe").fadeOut();
  $("div#more_hehehe").fadeIn();
  startConfetti();
  let audio = new Audio("static/js/rung_dong_1.mp3");
  audio.play();
});