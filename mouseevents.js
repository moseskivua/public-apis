const button = document.querySelector('button.btn');

button.addEventListener('click', (event) => {
  button.textContent = `Click count: ${event.detail}`;
});
