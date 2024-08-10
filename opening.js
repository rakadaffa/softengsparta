document.getElementById('big-button').addEventListener('click', function() {
  // Show the loader
  document.getElementById('loader').style.display = 'block';
  
  // Navigate to the new page after a short delay
  setTimeout(function() {
    window.location.href = 'profile.html';
  }, 100); // Delay to ensure loader visibility
});

// Optionally, hide the loader on the new page (profile.html)
window.addEventListener('load', function() {
  document.getElementById('loader').style.display = 'none';
});