const AudioOutput = require("./audio");

redraw = (arr1) => {
  // var x = charX;
  // var y = charY;
  // console.log(arr1);

  let red;
  let green;
  let blue;

  // console.log(arr1);
  canvasEl.width = canvasEl.width; // clears the canvas 
  if (!arr1) {
    return null;
  }
  for (let x = 0; x < arr1.length; x++) {
    for (var i = 0; i < arr1[x]; i++) {
      ctx.fillRect(x * 2, (canvasEl.height - arr1[x]), 1, arr1[x]);
    }
  }


  }

  // ctx.fillStyle = '#ccddff';
  // ctx.beginPath();
  // ctx.moveTo(50, 20);
  // ctx.lineTo(200, 50);
  // ctx.lineTo(10, 73);
  // ctx.closePath();
  // ctx.fill();
  // ctx.strokeStyle = 'rgb(0,128,0)';
  // ctx.lineWidth = 5;
  // ctx.stroke();


renderFrame = () => {
  if (playState === false) {
    cancelAnimationFrame(animationFrame);
  } else {
    animationFrame = requestAnimationFrame(renderFrame);
    audio.analyser.getByteFrequencyData(frequencyData);
  // let dataOutput = [];
  // for (let i = 0; i < frequencyData.length; i++) {
  //   if ((frequencyData[i] > 0) && (i % 40 === 0)) {
  //     dataOutput.push(frequencyData[i]);
  //     redraw(frequencyData[i]);
  //   }
  // }

    redraw(frequencyData);
  }
}

let canvasEl;
let ctx;
const audio = new AudioOutput;
const frequencyData = new Uint8Array(audio.analyser.frequencyBinCount);
let animationFrame;
let playState = false;
let colorSlider = 0;

let charX = 0;
let charY = 0;

document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.querySelector('button');
  playButton.addEventListener('click', () => {
    playState = audio.togglePlay(playState);
    renderFrame();
  });
  canvasEl = document.getElementById("mycanvas");
  canvasEl.width = 1000;
  canvasEl.height = 400;
  ctx = canvasEl.getContext("2d");

  let volumeControl = document.querySelector('#volume');

  volumeControl.addEventListener('input', function () {
    colorSlider = parseFloat(this.value * 100);
    ctx.fillStyle = `rgb(${colorSlider}, 0, 0)`;
  }, false);

  // ctx.fillStyle = "red";
  //x, y, width, height
  // ctx.fillRect(20, 41, 40, 50);
  // redraw();
});
