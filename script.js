// add divs to the sketch-grid

let size = prompt("How tall, in squares, do you want the sketch grid?");
// grab the grid from the DOM to play with
let grid = document.querySelector('.sketch-grid');
// set the gridTemplate for the value of size
grid.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;

// make a a bunch of squares to fit inside the grid
for (let index = 0; index < size*size; index++) {
  let square = document.createElement('div');
  square.className = 'square';
  grid.appendChild(square);
    
}

// grab all the squares I have made and turn em into an array
let squares = [... (document.querySelectorAll('.square'))];
// add evetnListener to each square that responds to mouseOver?
squares.forEach(square => square.addEventListener('mouseover', changeColor));

console.log(squares);

// test function attached to the eventListener on each square
function changeColor(e) {

    e.target.style.backgroundColor = '#1e3d3f'
  
}