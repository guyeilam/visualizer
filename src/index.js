const AudioOutput = require("./audio");
const Visualizer = require("./visualizer");


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

    visualizer.draw(ctx, frequencyData);
  }
}

let canvasEl;
let ctx;
const audio = new AudioOutput;
const visualizer = new Visualizer;
const frequencyData = new Uint8Array(audio.analyser.frequencyBinCount);
let animationFrame;
let playState = false;

document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.querySelector('button');
  playButton.addEventListener('click', () => {
    playState = audio.togglePlay(playState);
    renderFrame();
  });
  canvasEl = document.getElementById("mycanvas");
  canvasEl.width = visualizer.DIM_X;
  canvasEl.height = visualizer.DIM_Y;
  ctx = canvasEl.getContext("2d");

  let redSlider = document.getElementById('redSlider');
  let blueSlider = document.getElementById('blueSlider');
  let greenSlider = document.getElementById('greenSlider');

  redSlider.addEventListener('input', function () {
    visualizer.changeColor(`rgb(${this.value}, ${greenSlider.value}, ${blueSlider.value})`);
  }, false);

  greenSlider.addEventListener('input', function () {
    visualizer.changeColor(`rgb(${redSlider.value}, ${this.value}, ${blueSlider.value})`);
  }, false);

  blueSlider.addEventListener('input', function () {
    visualizer.changeColor(`rgb(${redSlider.value}, ${greenSlider.value}, ${this.value})`);
  }, false);

});
