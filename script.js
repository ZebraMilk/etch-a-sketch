let isMouseDown = false;
document.addEventListener('mousedown', toggleMouseDown);
document.addEventListener('mouseup', toggleMouseDown);

// Get the slider to listen to
let slider = document.querySelector('#size');
// Get the size value to play with
let size = slider.value;
// record the value of the slider and then update grid
slider.oninput = updateSize;
slider.onmouseup = resizeGrid;

// Grab size display to play with in later functions
let sizeDisplay = document.getElementById('size-display');
sizeDisplay.innerText = `${size}`;

// grab the grid from the DOM to play with
let grid = document.querySelector('.sketch-grid');
grid.preventDefault;
// abbreviate the color for use 
let color = document.getElementById('color');
let radioColor = document.getElementById('radio-color');

let reveal = document.getElementById('reveal');


// clear the drawing when shake button is pressed
document.getElementById('shake').addEventListener('click', resizeGrid);

resizeGrid();


reveal.addEventListener('change', setReveal);

radioColor.addEventListener('change', resizeGrid)


function setReveal() {
  let squares = [... document.getElementsByClassName('square')];
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
  if (!reveal.checked) {
  // default drawing
  e.target.style.backgroundColor = `${color.value}`;
  } else {
    // make the squares transparent
    e.target.style.background = 'rgba(0, 0, 0, 0)';
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


function clearGrid () {
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
  squares.forEach(square => square.addEventListener('mousemove', changeColor));
  squares.forEach(square => square.addEventListener('mouseup', changeColor));

}
