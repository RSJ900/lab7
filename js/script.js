function init(){
//add your javascrip between these two lines of code
var button = document.getElementById("entrybutton");
  function myFunction() {
    var haha = document.getElementById("entryinput").value;
    alert("Ryne Jones: " + haha);
    document.getElementById("textoutput").innerHTML = haha;
  }
  button.addEventListener("click", myFunction);
}







window.addEventListener('load', init);
