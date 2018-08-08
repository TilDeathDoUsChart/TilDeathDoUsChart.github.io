//EXPLORE
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("explore");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("w3-gray", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-gray";
}

//VISUALIZE
var slidevisualIndex = 1;
showvisualDivs(slidevisualIndex);

function plusvisualDivs(n) {
  showvisualDivs(slidevisualIndex += n);
}

function currentvisualDiv(n) {
  showvisualDivs(slidevisualIndex = n);
}

function showvisualDivs(n) {
  var i;
  var x = document.getElementsByClassName("visual");
  var dots = document.getElementsByClassName("visualdemo");
  if (n > x.length) {slidevisualIndex = 1}    
  if (n < 1) {slidevisualIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("w3-gray", "");
  }
  x[slidevisualIndex-1].style.display = "block";  
  dots[slidevisualIndex-1].className += " w3-gray";
}