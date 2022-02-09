

// Get the slider to listen to
let slider = document.querySelector('#size');
// Get the size slider to play with
let size = slider.value;
// add listener to record the value of the slider nad then update grid
slider.oninput = updateSize;
slider.addEventListener('mouseup', resizeGrid);

// Grab size display to play with in later functions
let sizeDisplay = document.getElementById('size-display');
sizeDisplay.innerText = `${size}`

// grab the grid from the DOM to play with
let grid = document.querySelector('.sketch-grid');


resizeGrid()






// change the color of a square based on the buttons selected
function changeColor(e) {
  // default drawing
  e.target.style.backgroundColor = '#1e3d3f'
  // cases for the options selected
  
}

// update the size value from the range
function updateSize(e) {
  size = e.target.value;
  // Show the updated size as user slides the slider
  sizeDisplay.textContent = `${size}`;
}  


// make a grid-draw function
function resizeGrid() {
  clearGrid();
  // set the gridTemplate for the adjustable size
  grid.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
  // make a a bunch of squares to fit inside the grid
  for (let index = 0; index < size * size; index++) {
    let square = document.createElement('div');
    square.className = 'square';
    grid.appendChild(square);
  };
  listenSquares();
}

// Clear the grid
function clearGrid () {
  // remove all the children of grid
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  };
}

// add listeners to each square 
function listenSquares() {
  // grab all the squares I have made and turn em into an array
  let squares = [... (document.querySelectorAll('.square'))];
  // add eventListener to each square that responds to mouseOver?
  // squares.forEach(square => square.addEventListener('mouseover', checkMouseDown));
  squares.forEach(square => square.addEventListener('mouseover', changeColor));
}
