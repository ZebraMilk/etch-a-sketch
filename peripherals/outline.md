# I'll Etch your Sketch, Dwayne!

## Flow

- User enters site, loads site, and empty gird display (maybe a brief Welcome!)
- User can click on options on the left of the screen
  - Size of grid - slider
  - cursor mode
    - colro picker
    - greyscale (more opaque for every pass/click)
    - random
    - rainbow (cycles through color values after every pass through any square)
    - reveal (pixels all start out black and user reveals a pixel image beneath)
      - start with a randome image 1-5
      - scale the image to the correct pixel size indicated by the user
    - erase (removes background color to default.)

User has selected their options
  - the cursor option is recorded and passed to changeColor()
    - use the id of the option selected to affect what changeColor does



## Functions/filters

- clearSelections() - allow the user to only have one option at a time
- shake() - clears the current drawing
- changeColor() - has cases for each of the options?
- optionSelect() - returns the id of the option selected so changeColor can use it

  

## options
- greyscale
  - every pass adds something to the opacity of the color selected
  - square.style.setElement() use a variable, and += some value everytim mouseEnter?

- random - easy, use snipet
- erase - set-background - default
- reveal?





### 