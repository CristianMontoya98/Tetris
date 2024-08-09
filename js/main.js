"use strict";
import { L, Li, Z, Zi, Sqare, T, l } from "./figure.js";

let play2 = document.getElementById("play2");
let message = document.getElementsByClassName("message")[0];
let text = document.getElementById("text");
let textP = document.getElementById("textPoints");
let textLv = document.getElementById("textMoveL");
let textLn = document.getElementById("textMoveR");
let textIn = document.getElementById("textMoveD");
let btnLeft = document.getElementById("btn-left");
let btnRight = document.getElementById("btn-right");
let btnRotate = document.getElementById("btn-rotate");
/* definition of the variables to be 
used */
let canvas;
let context;
let proxima;
let contextNext;
let puntos;
let nivel;
let lineas;
let pts = 0;
let nv = 0;
let ln = 0;
let inter = 500;
let lose = false;
// Size of the figures
let widhtFigure = 35;
let heightFigure = 35;
//definition of colors
let background = "#68C2C8";

//Objects of the figures
let figure = randomFigure();
let figure2 = randomFigure();


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
let aux = 0;
//Event listener to start the game
play2.addEventListener("click", () => {
  aux++;
  lose = false;
  message.style.display = "none";
  if (aux == 1) {
    
    start();
  }
  
  pts = 0;
  nv = 0;
  ln = 0;
});


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
      } else if (scenario[i][j] == 2) {
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
      } else if (scenario[i][j] == 3) {
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
      } else if (scenario[i][j] == 4) {
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
      } else if (scenario[i][j] == 5) {
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
      } else if (scenario[i][j] == 6) {
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
      }

      
    }

    

    if (fila == scenario[i].length) {
      scenario.splice(i, 1);
      scenario.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      ln++;
      pts += 10;
      validateLevel();
    }
    fila = 0;
  }
  for (let i = 0; i < 10; i++){
    if (scenario[0][i] != 0) {
      lose = true;
    }  
  }
  
  
}
//Function to detect when the player lose and re start everything
function screenLose() {
  if (lose == true) {
    message.style.display = "block";
    text.innerText = "¡PERDISTE!";
    textP.innerText = "PUNTOS : " + pts;
    textLv.innerText = "NIVEL : " + nv;
    textLn.innerText = "LINEAS : " + ln;
    textIn.innerText = "¡INTENTALO DE NUEVO!";
    for (let i = 0; i < scenario.length; i++) {
      for (let j = 0; j < scenario[i].length; j++) { 

        scenario[i][j] = 0;
        


      }
    }
  
  inter = 500;
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
    fig.coordinates[0][0] != 19 &&
    fig.coordinates[1][0] != 19 &&
    fig.coordinates[2][0] != 19 &&
    fig.coordinates[3][0] != 19 &&
    scenario[fig.coordinates[3][0] + 1][fig.coordinates[3][1]] == 0 &&
    scenario[fig.coordinates[2][0] + 1][fig.coordinates[2][1]] == 0 &&
    scenario[fig.coordinates[1][0] + 1][fig.coordinates[1][1]] == 0 &&
    scenario[fig.coordinates[0][0] + 1][fig.coordinates[0][1]] == 0
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
    fig.coordinates[0][1] != 9 &&
    fig.coordinates[1][1] != 9 &&
    fig.coordinates[2][1] != 9 &&
    fig.coordinates[3][1] != 9 &&
    scenario[fig.coordinates[3][0]][fig.coordinates[3][1] + 1] == 0 &&
    scenario[fig.coordinates[2][0]][fig.coordinates[2][1] + 1] == 0 &&
    scenario[fig.coordinates[1][0]][fig.coordinates[1][1] + 1] == 0 &&
    scenario[fig.coordinates[0][0]][fig.coordinates[0][1] + 1] == 0
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
    fig.coordinates[0][1] != 0 &&
    fig.coordinates[1][1] != 0 &&
    fig.coordinates[2][1] != 0 &&
    fig.coordinates[3][1] != 0 &&
    scenario[fig.coordinates[3][0]][fig.coordinates[3][1] - 1] == 0 &&
    scenario[fig.coordinates[2][0]][fig.coordinates[2][1] - 1] == 0 &&
    scenario[fig.coordinates[1][0]][fig.coordinates[1][1] - 1] == 0 &&
    scenario[fig.coordinates[0][0]][fig.coordinates[0][1] - 1] == 0
  ) {
    fig.coordinates[0][1]--;
    fig.coordinates[1][1]--;
    fig.coordinates[2][1]--;
    fig.coordinates[3][1]--;
  }
}

//Function to validate the key that is pressed and asign a movement
function movements() {

  btnLeft.addEventListener('click', (ev) => {
    moveLeft(figure);
      paintScenario();
      paintFigure(figure);
  });

  btnRight.addEventListener('click', (ev) => {
    moveRight(figure);
      paintScenario();
      paintFigure(figure);
  });

  btnRotate.addEventListener('click', (ev) => {
    paintScenario();

      figure.rotate();
      figure.count++;
      if (figure.count >= figure.rotation) {
        figure.count = 0;
      }
      paintFigure(figure);
  });

  document.addEventListener("keydown", (push) => {
    if (push.key == "d") {
      moveRight(figure);
      paintScenario();
      paintFigure(figure);
    }
    if (push.key == "a") {
      moveLeft(figure);
      paintScenario();
      paintFigure(figure);
    }
    if (push.key == "s") {
      moveDown(figure);
      paintScenario();
      paintFigure(figure);
    }
    if (push.key == "w") {
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

  figure = figure2;
  figure2 = randomFigure();
  cleanNext();
  nextFigure(figure2);
}

function nextFigure(fig) {
  let size1 = 20;
  let size2 = 20;
  let margin1 = -50;
  let margin2 = 40;
  contextNext.fillStyle = fig.color;
  contextNext.fillRect(
    (fig.coordinates[0][1] * size1)+margin1,
    (fig.coordinates[0][0] * size1)+margin2,
    size2,
    size2
  );
  contextNext.fillRect(
    (fig.coordinates[1][1] * size1)+margin1,
    (fig.coordinates[1][0] * size1)+margin2,
    size2,
    size2
  );
  contextNext.fillRect(
    (fig.coordinates[2][1] * size1)+margin1,
    (fig.coordinates[2][0] * size1)+margin2,
    size2,
    size2
  );
  contextNext.fillRect(
    (fig.coordinates[3][1] * size1)+margin1,
    (fig.coordinates[3][0] * size1)+margin2,
    size2,
    size2
  );

  contextNext.strokeStyle = "black";
  contextNext.strokeRect(
    (fig.coordinates[0][1] * size1)+margin1,
    (fig.coordinates[0][0] * size1)+margin2,
    size2,
    size2
  );
  contextNext.strokeRect(
    (fig.coordinates[1][1] * size1)+margin1,
    (fig.coordinates[1][0] * size1)+margin2,
    size2,
    size2
  );
  contextNext.strokeRect(
    (fig.coordinates[2][1] * size1)+margin1,
    (fig.coordinates[2][0] * size1)+margin2,
    size2,
    size2
  );
  contextNext.strokeRect(
    (fig.coordinates[3][1] * size1)+margin1,
    (fig.coordinates[3][0] * size1)+margin2,
    size2,
    size2
  );
}
function cleanNext() {
  contextNext.fillStyle = "gray";
  contextNext.fillRect(0,0,proxima.width, proxima.height);
}

//Function to validate the increment of the level every 100 points and divide the interval in 3 to increase the speed of the figures
function validateLevel() {
  if (pts % 100 == 0) {
    nv++;
    inter /= 3;
    
  }
}

//starting function, initialize the canvas and context variables and execute other functions
function start() {
  puntos = document.getElementById("puntos");
  nivel = document.getElementById("nivel");
  lineas = document.getElementById("lineas");
  canvas = document.getElementById("canva");
  context = canvas.getContext("2d");
  proxima = document.getElementById("nextImage");
  contextNext = proxima.getContext("2d");
  movements();
  
  setInterval(function () {
    paintScenario();
    paintFigure(figure);
    moveDown(figure);
    puntos.innerText = pts;
    lineas.innerText = ln;
    nivel.innerText = nv;
    screenLose();
  }, inter);
}
