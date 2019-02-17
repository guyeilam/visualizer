const AudioOutput = require("./audio");
const Visualizer = require("./visualizer");

renderFrame = () => {
  if (playState === false) {
    cancelAnimationFrame(animationFrame);
  } else {
    animationFrame = requestAnimationFrame(renderFrame);
    audio.analyser.getByteFrequencyData(frequencyData);
    visualizer.draw(ctx, frequencyData);
  }
}

let canvasEl;
let ctx;
const audio = new AudioOutput;
const visualizer = new Visualizer(window.innerWidth, window.innerHeight);
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

  let redRGBSlider = document.getElementById('redRGBSlider');
  let blueRGBSlider = document.getElementById('blueRGBSlider');
  let greenRGBSlider = document.getElementById('greenRGBSlider');
  let circleAlphaSlider = document.getElementById('circleAlphaSlider');
  let blueSlider = document.getElementById('blueSlider');
  let widthSlider = document.getElementById('widthSlider');
  let heightSlider = document.getElementById('heightSlider');
  let barCountInput = document.getElementById('barCountInput');
  let fadeInput = document.getElementById('fadeSlider');
  let circleRadiusSlider = document.getElementById('circleRadiusSlider');

  redRGBSlider.addEventListener('input', function () {
    visualizer.changeCircleRed(this.value);
  }, false);

  greenRGBSlider.addEventListener('input', function () {
    visualizer.changeCircleGreen(this.value);
  }, false);

  blueRGBSlider.addEventListener('input', function () {
    visualizer.changeCircleBlue(this.value);
  }, false);

  circleAlphaSlider.addEventListener('input', function () {
    visualizer.changeCircleAlpha(this.value);
  }, false);

  blueSlider.addEventListener('input', function () {
    visualizer.changeBlue(this.value);
  }, false);

  widthSlider.addEventListener('input', function () {
    visualizer.changeWidth(this.value);
  }, false);

  heightSlider.addEventListener('input', function () {
    visualizer.changeHeight(this.value);
  }, false);

  barCountInput.addEventListener('input', function () {
    visualizer.changeBarCount(this.value);
  }, false);

 fadeInput.addEventListener('input', function () {
    visualizer.changeFade(this.value);
    visualizer.drawText(ctx, this.value);
  }, false);

  circleRadiusSlider.addEventListener('input', function () {
    visualizer.changeCircleRadius(this.value);
  }, false);

});
