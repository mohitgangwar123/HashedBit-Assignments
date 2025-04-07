const paragraph = document.getElementById('useless-paragraph');
const button = document.getElementById('toggle-button');

button.addEventListener('click', function () {
  if (paragraph.style.display === 'none') {
    paragraph.style.display = 'block'; // Show it
  } else {
    paragraph.style.display = 'none'; // Hide it
  }
});
