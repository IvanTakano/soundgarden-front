
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  method:"GET"
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

