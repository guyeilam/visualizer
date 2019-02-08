class AudioOutput {
  constructor() {
    this.audioContext = new AudioContext();
    this.audioElement = new Audio();
    this.audioElement.src = 'https://api.soundcloud.com/tracks/42328219/stream?client_id=b1495e39071bd7081a74093816f77ddb';
    this.audioElement.controls = true;
    this.audioElement.loop = true;
    this.audioElement.autoplay = true;
    this.audioElement.crossOrigin = "anonymous";
    this.audioSrc = this.audioContext.createMediaElementSource(this.audioElement);
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 2048;
    this.audioSrc.connect(this.analyser);
    this.audioSrc.connect(this.audioContext.destination);
    // this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);
  }

  togglePlay(playState) {
    let newPlayState;
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
    if (playState === false) {
      this.audioElement.play();
      newPlayState = true;
      // this.renderFrame();
    } else if (playState === true) {
      this.audioElement.pause();
      newPlayState = false;
    }
    return newPlayState;
  }

  // draw(ctx) {
  //   ctx.fillStyle = 'rgb(100,0,0)';

  // }

  // renderFrame() {
  //   if (playState === false) {
  //     cancelAnimationFrame(animationFrame);
  //   } else {
  //     animationFrame = requestAnimationFrame(renderFrame);
  // }

  // renderFrame() {
  //   const animationFrame = requestAnimationFrame(this.renderFrame);
  //   this.analyser.getByteFrequencyData(this.frequencyData);
    // let dataOutput = [];
    // for (let i = 0; i < frequencyData.length; i++) {
    //   if ((frequencyData[i] > 0) && (i % 40 === 0)) {
    //     dataOutput.push(frequencyData[i]);
    //     redraw(frequencyData[i]);
    //   }
    // }
    // refrequencyData);

    // redraw(frequencyData);
}



module.exports = AudioOutput;