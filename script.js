
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

/*
  Put the JavaScript code you want below.
*/
// function who display form element.
function display_form() {

  let vilain_name = document.getElementById('vilain_name').value;
  let vilain_power = document.getElementById('vilain_power').value;
  let story = document.getElementById('story').value;

  document.write("<h1>Thank you.</h1>");
  document.write("<h2>Your super vilain name's is:</h2>" + vilain_name + "<br/>");
  document.write("<h2>Your super vilain power is:</h2>" + vilain_power + "<br/>");
  document.write("<h2>Your motivation and plan to conquer the world is:</h2>");
  document.write(story + "<br/>");
}

document.querySelector("#display").addEventListener("click", display_form, false);
