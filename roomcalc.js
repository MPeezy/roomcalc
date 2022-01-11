function roomcalc()
{

    let goOn = true;

    while (goOn == true)
{
    console.log("Welcome to the GC Room Calculator");
    console.log("Please input a length:");
    let inputLen= prompt("Please input a length");
    
    
    console.log("Please input a width:");
    let inputWid=prompt("Please input a width");

    console.log("Please input a height:");
    let inputHeight= prompt("Please input a height");


    let length = inputLen;
    let width = inputWid;
    let height = inputHeight;


    let area = length * width;
    let volume = length * width * height;
    let perimeter = 2 * length + 2 * width;

    let carpetTiles = area / 5;
    let paintPerimeter = perimeter / 5;
    let paintWalls = (area + 2 * length * height + 2 * width * height) / 25;

  console.log("Length:") + (length);
  console.log ("Width:") + (width);
  console.log("Height:") + (height);
  console.log();
  console.log("Area:") + (area);
  console.log("Volume:") + (volume);
  console.log("Perimeter:") + (perimeter);
  console.log();
  console.log("Carpet Tiles:") + (carpetTiles);
  console.log("Perimeter Paint Cans:") + (paintPerimeter);
  console.log("Paint Cans for Walls:") + (paintWalls);
  console.log();


 let askAgain = true;

  while (askAgain == true)
  {

  
   let answer = prompt ("Would you like to continue? y/n");
  
    if (answer == "y")
    {
        askAgain = false;
        goOn = true;
    }
    else if (answer == "n")
    {
        askAgain = false;
        goOn = false;
        console.log("Good Bye!");
    }
    else
    {
       console.log("I'm sorry I didn't understand that ");
       console.log("Let's try that again");
    }
  }
}
}