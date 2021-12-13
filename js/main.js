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
let color1 = "red";
let color2 = "blue";
let color3 = "green";

//Objects of the figures
let le = new L();
let li = new Li();
let z = new Z(); 
let zi = new Zi();
let sq = new Sqare();
let t = new T();
let el = new l();
let figure = el;


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
  for (let i = 0; i < scenario.length; i++) {
    for (let j = 0; j < scenario[i].length; j++) {
      if (scenario[i][j] == 0) {
        color = background;
      }
      context.fillStyle = color;
      context.fillRect(
        j * widhtFigure,
        i * heightFigure,
        widhtFigure,
        heightFigure
      );
    }
  }
}

function paintFigure(fig) {
  context.fillStyle = "red";
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

//moveDown function, move the figure down until it hits the ground
function moveDown(fig) {
    
  if (fig.coordinates[0][0] != 19 && fig.coordinates[1][0] != 19 && fig.coordinates[2][0] != 19 && fig.coordinates[3][0] != 19 ) {
    fig.coordinates[0][0]++;
    fig.coordinates[1][0]++;
    fig.coordinates[2][0]++;
    fig.coordinates[3][0]++;
  }
}
function moveRight(fig) { 
    if (fig.coordinates[0][1] != 9 && fig.coordinates[1][1] != 9 && fig.coordinates[2][1] != 9 && fig.coordinates[3][1] != 9) {
    fig.coordinates[0][1]++;
    fig.coordinates[1][1]++;
    fig.coordinates[2][1]++;
    fig.coordinates[3][1]++;
  }
}
function moveLeft(fig) {
    
  if (fig.coordinates[0][1] != 0 && fig.coordinates[1][1] != 0 && fig.coordinates[2][1] != 0 && fig.coordinates[3][1] != 0) {
    fig.coordinates[0][1]--;
    fig.coordinates[1][1]--;
    fig.coordinates[2][1]--;
    fig.coordinates[3][1]--;
  }
}

function movements() {
    document.addEventListener('keydown', (push) => {
        if (push.key == 'ArrowRight') {
            moveRight(figure);
            paintScenario();
            paintFigure(figure);
        }
        if (push.key == 'ArrowLeft') {
            moveLeft(figure);
            paintScenario();
            paintFigure(figure);
        }
        if (push.key == 'ArrowDown') {
            moveDown(figure);
            paintScenario();
            paintFigure(figure);
      }
      if (push.key == 'ArrowUp') {
        
        paintScenario();
        
        figure.rotate();
        figure.count++;
        if (figure.count >= figure.rotation) {
          figure.count=0;
        }
        paintFigure(figure);
      }
    });
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
  }, 1000);
}
start();

