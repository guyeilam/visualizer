
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
  for (let i = 0; i < arr1.length; i++) {
    // ctx.fillStyle = '#ccddff';
    // ctx.beginPath();
    // ctx.moveTo(5, 200);
    // ctx.lineTo(5, arr1[i]);
    // ctx.closePath();
    // ctx.fill();
    // ctx.strokeStyle = 'rgb(0,128,0)';
    // ctx.lineWidth = 5;
    // ctx.stroke();  

    if ((i % 5) === 0) {
      red = red + (i % 255);
    }

    if ((i % 2) === 0) {
      blue = blue + (i % 255);;
    }

    if ((i % 3) === 0) {
      green = green + (i % 255);;
    }

    ctx.fillStyle = `rgb(${(255 - (i % 255))}, 10, ${i})`;

    ctx.fillRect(i + (i % 10), 0, 10, ((arr1[i] / 128.0) * canvasEl.height / 4));

    // ctx.fillRect(i, -100, 10, arr1[i]);


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
}

renderFrame = () => {
  animationFrame = requestAnimationFrame(renderFrame);
  analyser.getByteFrequencyData(frequencyData);
  let dataOutput = [];
  for (let i = 0; i < frequencyData.length; i++) {
    if ((frequencyData[i] > 0) && (i % 40 === 0)) {
      dataOutput.push(frequencyData[i]);
      redraw(frequencyData[i]);
    }
  }
  console.log(dataOutput);

  // redraw(frequencyData);
}

let animationFrame;
let analyzer;
let canvasEl;
let ctx;
const audioContext = new AudioContext();
var audioElement = new Audio();
audioElement.src = 'https://api.soundcloud.com/tracks/42328219/stream?client_id=b1495e39071bd7081a74093816f77ddb';
audioElement.controls = true;
audioElement.loop = true;
audioElement.autoplay = true;
audioElement.crossOrigin = "anonymous";
audioSrc = audioContext.createMediaElementSource(audioElement);
analyser = audioContext.createAnalyser();
analyser.fftSize = 2048;
audioSrc.connect(analyser);
audioSrc.connect(audioContext.destination);
var frequencyData = new Uint8Array(analyser.frequencyBinCount);
let charX = 0;
let charY = 0;

document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.querySelector('button');
  playButton.addEventListener('click', function () {
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
    if (this.dataset.playing === 'false') {
      audioElement.play();
      this.dataset.playing = 'true';
      renderFrame();
    } else if (this.dataset.playing === 'true') {
      audioElement.pause();
      cancelAnimationFrame(animationFrame);
      this.dataset.playing = 'false';
    }

  }, false);

  audioElement.addEventListener('ended', () => {
    playButton.dataset.playing = 'false';
    // animationFrame.closeAnimationFrame();
  }, false);

  canvasEl = document.getElementById("mycanvas");
  canvasEl.width = 500;
  canvasEl.height = 500;
  ctx = canvasEl.getContext("2d");

  // ctx.fillStyle = "red";
  //x, y, width, height
  // ctx.fillRect(20, 41, 40, 50);
  redraw();
});
