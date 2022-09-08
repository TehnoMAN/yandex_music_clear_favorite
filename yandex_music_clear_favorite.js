var a = 0;
var c = prompt("Введите количество песен", 5);
if (c != null) {
  del();
}
function del(){
  document.querySelector('button.d-track__hover-hidden').click();
  a++;
  if (a < c) setTimeout(del, 100);
}
