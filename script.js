/*
-------------------------------------------
Toggle function for the Overlay Mobile menu
-------------------------------------------
*/

const overlay = document.getElementById('overlay1');
const statusBar = document.getElementById('status');

function toggleOverlay() {
    overlay.style.display = 'block';
    if(overlay.style.display === 'block') {
      statusBar.style.display = 'none';
    } 
}

function toggleOffOverlay() {
  overlay.style.display = 'none';
}