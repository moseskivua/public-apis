// When true, moving the mouse draws on the section
let isDrawing = false;
let x = 0;
let y = 0;

const myDesigns = document.getElementById('myDesigns');
const context = myDesigns.getContext('2d');

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the section.

// Add the event listeners for mousedown, mousemove, and mouseup
myDesigns.addEventListener('mousedown', (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

myDesigns.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', (e) => {
  if (isDrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}