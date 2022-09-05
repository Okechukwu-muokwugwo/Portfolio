/*
-------------------------------
Toggle function for the Overlay
--------------------------------
*/

const overlay = document.getElementById('overlay1');
const statusBar = document.getElementById('status');

function toggleOverlay() {
  overlay.style.display = 'block';
  if (overlay.style.display === 'block') {
    statusBar.style.display = 'none';
  }
}
toggleOverlay();

function toggleOffOverlay() {
  overlay.style.display = 'none';
}
toggleOffOverlay();