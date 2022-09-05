/*
-------------------------------------------
Toggle function for the Overlay Mobile menu
-------------------------------------------
*/

const overlay = document.getElementById('overlay1');

function toggleOverlay() {
  if (overlay.style.display === 'none') {
    overlay.style.display = 'block';
  }
}
toggleOverlay();

function toggleOffOverlay() {
  overlay.style.display = 'none';
}
toggleOffOverlay();