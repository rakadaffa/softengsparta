var button = document.getElementsByClassName('main-button')[0];

var home = document.getElementById('home');
var profile = document.getElementById('profile');
var interest = document.getElementById('interest');
var projects = document.getElementById('projects');

var popup = document.getElementById('popup1')
var close = document.getElementsByClassName('close')[0];

interest.onclick = function () {
  popup.style.display = 'block';
}

projects.onclick = function () {
  popup.style.display = 'block';
}

close.onclick = function () {
  popup.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = 'none';
  }
}