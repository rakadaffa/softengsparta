var button = document.getElementsByClassName('main-button')[0];

var home = document.getElementById('home');
var profile = document.getElementById('profile');
var interest = document.getElementById('interest');
var projects = document.getElementById('projects');

var popup1 = document.getElementById('popup1')
var popup2 = document.getElementById('popup2')
var close1 = document.getElementsByClassName('close')[0];
var close2 = document.getElementsByClassName('close')[1];

interest.onclick = function () {
  popup1.style.display = 'block';
}

projects.onclick = function () {
  popup2.style.display = 'block';
}

close1.onclick = function () {
  popup1.style.display = 'none';
}

close2.onclick = function () {
  popup2.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == popup1 || event.target == popup2) {
    popup1.style.display = 'none';
    popup2.style.display = 'none';
  }
}