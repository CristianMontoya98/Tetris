"use strict";
import { L, Li, Z, Zi, Sqare, T, l } from "./figure.js";
/* definition of the variables to be 
used with respect to the canvas */
let canvas;
let context;

// Size of the figures
let widhtFigure = 35;
let heightFigure = 35;
//definition of colors
let background = "#68C2C8";

//Objects of the figures
let figure = randomFigure();

//matrix defining the stage with the values in 0 to asign the background color
let scenario = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

//function to asign the background color in the positions of the matrix with value 0
function paintScenario() {
    let color;
    let fila = 0;
  for (let i = 0; i < scenario.length; i++) {
    for (let j = 0; j < scenario[i].length; j++) {
      if (scenario[i][j] == 0) {
        color = background;
        context.fillStyle = color;
        context.fillRect(
          j * widhtFigure,
          i * heightFigure,
          widhtFigure,
          heightFigure
        );
      } else if (scenario[i][j] == 1) {
        color = "red";
        context.fillStyle = color;
        context.fillRect(
          j * widhtFigure,
          i * heightFigure,
          widhtFigure,
          heightFigure
        );
        context.strokeStyle = "black";
        context.strokeRect(
          j * widhtFigure,
          i * heightFigure,
          widhtFigure,
          heightFigure
        );
          fila++;
          console.log(fila);
      }
        else if (scenario[i][j] == 2) {
            color = "blue";
            context.fillStyle = color;
            context.fillRect(
              j * widhtFigure,
              i * heightFigure,
              widhtFigure,
              heightFigure
            );
            context.strokeStyle = "black";
            context.strokeRect(
              j * widhtFigure,
              i * heightFigure,
              widhtFigure,
              heightFigure
          );
          fila++;
          console.log(fila);
        }
        else if (scenario[i][j] == 3) {
        color = "green";
        context.fillStyle = color;
        context.fillRect(
          j * widhtFigure,
          i * heightFigure,
          widhtFigure,
          heightFigure
        );
        context.strokeStyle = "black";
        context.strokeRect(
          j * widhtFigure,
          i * heightFigure,
          widhtFigure,
          heightFigure
          );
          fila++;
          console.log(fila);
        }
        else if (scenario[i][j] == 4) {
            color = "yellow";
            context.fillStyle = color;
            context.fillRect(
              j * widhtFigure,
              i * heightFigure,
              widhtFigure,
              heightFigure
            );
            context.strokeStyle = "black";
            context.strokeRect(
              j * widhtFigure,
              i * heightFigure,
              widhtFigure,
              heightFigure
          );
          fila++;
          console.log(fila);
        }
        else if (scenario[i][j] == 5) {
            color = "pink";
            context.fillStyle = color;
            context.fillRect(
              j * widhtFigure,
              i * heightFigure,
              widhtFigure,
              heightFigure
            );
            context.strokeStyle = "black";
            context.strokeRect(
              j * widhtFigure,
              i * heightFigure,
              widhtFigure,
              heightFigure
          );
          fila++;
          console.log(fila);
        }
        else if (scenario[i][j] == 6) {
        color = "orange";
        context.fillStyle = color;
        context.fillRect(
          j * widhtFigure,
          i * heightFigure,
          widhtFigure,
          heightFigure
        );
        context.strokeStyle = "black";
        context.strokeRect(
          j * widhtFigure,
          i * heightFigure,
          widhtFigure,
          heightFigure
          );
          fila++;
          console.log(fila);
      } else if (scenario[i][j] == 7) {
          
            color = "brown";
            context.fillStyle = color;
            context.fillRect(
              j * widhtFigure,
              i * heightFigure,
              widhtFigure,
              heightFigure
            );
            context.strokeStyle = "black";
            context.strokeRect(
              j * widhtFigure,
              i * heightFigure,
              widhtFigure,
              heightFigure
          );
          fila++;
          console.log(fila);
            }
        
      }
      
      if (fila == scenario[i].length) {
          scenario.splice(i, 1);
          scenario.unshift([0,0,0,0,0,0,0,0,0,0]);
      }
      fila=0;
      
  }
}
//Generates a random number and create a new object of the figure in each case
function randomFigure() {
    let numRandom = Math.floor(Math.random() * 7);
    let figAux;
    if (numRandom == 0) {
        figAux = new L();
    }
    if (numRandom == 1) {
        figAux = new Li();
    }
    if (numRandom == 2) {
        figAux = new Z();
    }
    if (numRandom == 3) {
        figAux = new Zi();
    }
    if (numRandom == 4) {
        figAux = new Sqare();
    }
    if (numRandom == 5) {
        figAux = new T();
    }
    if (numRandom == 6) {
        figAux = new l();
    }
    return figAux;


  
}

//Function to paint the figure respect the coordinates of each one
function paintFigure(fig) {
  context.fillStyle = fig.color;
  context.fillRect(
    fig.coordinates[0][1] * widhtFigure,
    fig.coordinates[0][0] * heightFigure,
    widhtFigure,
    heightFigure
  );
  context.fillRect(
    fig.coordinates[1][1] * widhtFigure,
    fig.coordinates[1][0] * heightFigure,
    widhtFigure,
    heightFigure
  );
  context.fillRect(
    fig.coordinates[2][1] * widhtFigure,
    fig.coordinates[2][0] * heightFigure,
    widhtFigure,
    heightFigure
  );
  context.fillRect(
    fig.coordinates[3][1] * widhtFigure,
    fig.coordinates[3][0] * heightFigure,
    widhtFigure,
    heightFigure
  );

  context.strokeStyle = "black";
  context.strokeRect(
    fig.coordinates[0][1] * widhtFigure,
    fig.coordinates[0][0] * heightFigure,
    widhtFigure,
    heightFigure
  );
  context.strokeRect(
    fig.coordinates[1][1] * widhtFigure,
    fig.coordinates[1][0] * heightFigure,
    widhtFigure,
    heightFigure
  );
  context.strokeRect(
    fig.coordinates[2][1] * widhtFigure,
    fig.coordinates[2][0] * heightFigure,
    widhtFigure,
    heightFigure
  );
  context.strokeRect(
    fig.coordinates[3][1] * widhtFigure,
    fig.coordinates[3][0] * heightFigure,
    widhtFigure,
    heightFigure
  );
}

//moveDown function, move the figure down until it hits the ground or other figure
function moveDown(fig) {
  if (
    (fig.coordinates[0][0] != 19 &&
    fig.coordinates[1][0] != 19 &&
    fig.coordinates[2][0] != 19 &&
    fig.coordinates[3][0] != 19) &&
    (scenario[fig.coordinates[3][0] + 1][fig.coordinates[3][1]] == 0 &&
    scenario[fig.coordinates[2][0] + 1][fig.coordinates[2][1]] == 0 &&
    scenario[fig.coordinates[1][0] + 1][fig.coordinates[1][1]] == 0 &&
    scenario[fig.coordinates[0][0] + 1][fig.coordinates[0][1]] == 0)
  ) {
    fig.coordinates[0][0]++;
    fig.coordinates[1][0]++;
    fig.coordinates[2][0]++;
    fig.coordinates[3][0]++;
  } else {
    fixedFigure(fig);
  }
}
//Move the figure to the right when is inside the canvas size and is not other figure in the next coordinate
function moveRight(fig) {
  if (
    (fig.coordinates[0][1] != 9 &&
    fig.coordinates[1][1] != 9 &&
    fig.coordinates[2][1] != 9 &&
    fig.coordinates[3][1] != 9) &&
    (scenario[fig.coordinates[3][0]][fig.coordinates[3][1] + 1] == 0 &&
        scenario[fig.coordinates[2][0]][fig.coordinates[2][1] + 1] == 0&&
        scenario[fig.coordinates[1][0]][fig.coordinates[1][1] + 1] == 0 &&
        scenario[fig.coordinates[0][0]][fig.coordinates[0][1] + 1] == 0)
  ) {
    fig.coordinates[0][1]++;
    fig.coordinates[1][1]++;
    fig.coordinates[2][1]++;
    fig.coordinates[3][1]++;
  }
}

//Move the figure to the left when is inside the canvas size and is not other figure in the next coordinate
function moveLeft(fig) {
  if (
    (fig.coordinates[0][1] != 0 &&
    fig.coordinates[1][1] != 0 &&
    fig.coordinates[2][1] != 0 &&
          fig.coordinates[3][1] != 0) &&
          (scenario[fig.coordinates[3][0]][fig.coordinates[3][1] - 1] == 0 &&
            scenario[fig.coordinates[2][0]][fig.coordinates[2][1] - 1] == 0&&
            scenario[fig.coordinates[1][0]][fig.coordinates[1][1] - 1] == 0 &&
            scenario[fig.coordinates[0][0]][fig.coordinates[0][1] - 1] == 0)
  ) {
    fig.coordinates[0][1]--;
    fig.coordinates[1][1]--;
    fig.coordinates[2][1]--;
    fig.coordinates[3][1]--;
  }
}

//Function to validate the key that is pressed and asign a movement
function movements() {
  document.addEventListener("keydown", (push) => {
    if (push.key == "ArrowRight") {
      moveRight(figure);
      paintScenario();
      paintFigure(figure);
    }
    if (push.key == "ArrowLeft") {
      moveLeft(figure);
      paintScenario();
      paintFigure(figure);
    }
    if (push.key == "ArrowDown") {
      moveDown(figure);
      paintScenario();
      paintFigure(figure);
    }
    if (push.key == "ArrowUp") {
      paintScenario();

      figure.rotate();
      figure.count++;
      if (figure.count >= figure.rotation) {
        figure.count = 0;
      }
      paintFigure(figure);
    }
  });
}
//Function to fix the figure in the bottom or over other figure
function fixedFigure(fig) {
    let elemento;
    if (fig.color == "red") {
        elemento = 1;
    }
    if (fig.color == "blue") {
        elemento = 2;
    }
    if (fig.color == "green") {
        elemento = 3;
    }
    if (fig.color == "yellow") {
        elemento = 4;
    }
    if (fig.color == "pink") {
        elemento = 5;
    }
    if (fig.color == "orange") {
        elemento = 6;
    }
    if (fig.color == "brown") {
        elemento = 7;
    }
  for (let i = 0; i < fig.coordinates.length; i++) {
    scenario[fig.coordinates[i][0]][fig.coordinates[i][1]] = elemento;
    }
    
  figure = randomFigure();
}

//starting function, initialize the canvas and context variables and execute other functions
function start() {
  canvas = document.getElementById("canva");
  context = canvas.getContext("2d");
  movements();
  setInterval(function () {
    paintScenario();
    paintFigure(figure);
    moveDown(figure);
  }, 500);
}
start();
