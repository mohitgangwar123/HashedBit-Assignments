function createDiv(width, height, text) {
  // Create a new div
  const newDiv = document.createElement('div');

  // Set styles
  newDiv.style.width = width + 'px';
  newDiv.style.height = height + 'px';
  newDiv.style.border = '1px solid black';
  newDiv.style.margin = '10px';
  newDiv.style.display = 'flex';
  newDiv.style.alignItems = 'center';
  newDiv.style.justifyContent = 'center';
  newDiv.style.backgroundColor = '#f2f2f2';

  // Set text content
  newDiv.textContent = text;

  // Append to the container
  const container = document.getElementById('container');
  container.appendChild(newDiv);
}
createDiv(450, 300, 'Hello Div!');

