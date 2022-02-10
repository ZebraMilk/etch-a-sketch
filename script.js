let isMouseDown = false;
// Get the slider to listen to
let slider = document.querySelector('#size');
// Get the size value to play with
let size = slider.value;
// Grab size display to play with in later functions
let sizeDisplay = document.getElementById('size-display');
// grab the grid from the DOM to play with
let grid = document.querySelector('.sketch-grid');
// abbreviate the buttons and color selector for use 
let color = document.getElementById('color');
let radioColor = document.getElementById('radio-color');
let reveal = document.getElementById('reveal');
let random = document.getElementById('random');

// Add listeners to the radio buttons
reveal.addEventListener('change', setReveal);
radioColor.addEventListener('change', resizeGrid)
random.addEventListener('change', resizeGrid);

sizeDisplay.innerText = `${size}`;
// clear the drawing when shake button is pressed
document.getElementById('shake').addEventListener('click', resizeGrid);
document.addEventListener('mousedown', toggleMouseDown);
document.addEventListener('mouseup', toggleMouseDown);

// record the value of the slider and then update grid
grid.preventDefault;
slider.oninput = updateSize;
slider.onmouseup = resizeGrid;

resizeGrid();

function setReveal() {
  let squares = [...document.getElementsByClassName('square')];
  for (let index = 0; index < squares.length; index++) {
    squares[index].style.backgroundColor = '#000000'
  }
  grid.style['background-color'] = 'rgba(0, 0, 0, 0)';
  console.log(reveal.checked);
  console.log(reveal.value);
}

function toggleMouseDown(e) {
  // don't drag the grid if the mouse event happens in a square
  if (e.target.className == 'square') {
    e.preventDefault();
  }
  // toggle isMousedown from its previous state
  if (!isMouseDown) {
    isMouseDown = true;
  } else {
    isMouseDown = false;
  }
}

// change the color of a square based on the buttons selected
function changeColor(e) {
  // if mouse is not clicked, don't do anything
  if (!isMouseDown) return;
  // stop the drag behavior of the browser
  e.preventDefault();
  // check for reveal status
  if (radioColor.checked) {
    // default drawing
    e.target.style.backgroundColor = `${color.value}`;
  } else if (reveal.checked) {
    // make the squares transparent
    e.target.style.background = 'rgba(0, 0, 0, 0)';
  } else if (random.checked) {
    e.target.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}

// update the size value from the slider
function updateSize(e) {
  size = e.target.value;
  // Show the updated size as user slides the slider
  sizeDisplay.textContent = `${size}`;

}

// make a grid with the given dimensions
function resizeGrid() {
  clearGrid();
  grid.removeAttribute('opacity');
  // set the gridTemplate for the adjustable size
  grid.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
  // make a a bunch of squares to fit inside the grid
  for (let index = 0; index < size * size; index++) {
    let square = document.createElement('div');
    square.className = 'square';
    grid.appendChild(square);
  };
  listenSquares();
  reveal.checked = false;
}

function clearGrid() {
  // remove all the squares of grid
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  };
  grid.style['background-color'] = '#76948c';

}

// add listeners to each square 
function listenSquares() {
  // grab all the squares I have made and turn em into an array
  let squares = [... (document.querySelectorAll('.square'))];
  // add eventListener to each square that responds to mouseover?
  squares.forEach(square => square.addEventListener('mouseover', changeColor));
  squares.forEach(square => square.addEventListener('mouseup', changeColor));
}