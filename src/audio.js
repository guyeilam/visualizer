class AudioOutput {
  constructor() {
    this.audioContext = new AudioContext();
    const proxyUrl = 'https://corsproxyglobe.herokuapp.com/';
    this.audioElement = new Audio();
    this.audioElement.controls = true;
    this.audioElement.loop = true;
    this.audioElement.autoplay = true;
    this.audioElement.crossOrigin = "anonymous";
    this.audioSrc = this.audioContext.createMediaElementSource(this.audioElement);
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 2048;
    this.audioSrc.connect(this.analyser);
    this.audioSrc.connect(this.audioContext.destination);
    this.musicSrc = [];
    this.musicSrc.push('s3.amazonaws.com/full-stack-upload-dev/Avicii+-+Broken+Arrows.mp3');
    this.audioElement.src = proxyUrl + this.musicSrc[0];
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