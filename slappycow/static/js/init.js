document.addEventListener("contextmenu", event => event.preventDefault());

$(document).keydown((event) => {
  if ((event.keyCode == 123) || (event.ctrlKey && event.shiftKey && event.keyCode == 73)) {
    // hok_pe_oii();
    // return false;
    return true;
  } else if ((event.keyCode == 116) || (event.ctrlKey && event.keyCode == 82)) {
    transition(window.location);
    return false;
  };
});

window.onload = onload_transition()
setTimeout(() => {
  AOS.init({once: true})
}, 3500);

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