function fullscreenchanged(event) {
  // document.fullscreenElement will point to the element that
  // is in fullscreen mode if there is one. If not, the value
  // of the property is null.
  if (document.fullscreenElement) {
    console.log(`Element: ${document.fullscreenElement.id} entered fullscreen mode.`);
  } else {
    console.log('Leaving fullscreen mode.');
  }
};

const el = document.getElementById('fullscreen-div');

el.addEventListener('fullscreenchange', fullscreenchanged);
// or
el.onfullscreenchange = fullscreenchanged;

// When the toggle button is clicked, enter/exit fullscreen
document.getElementById('toggle-fullscreen').addEventListener('click', (event) => {
  if (document.fullscreenElement) {
    // exitFullscreen is only available on the Document object.
    document.exitFullscreen();
  } else {
    el.requestFullscreen();
  }
});
