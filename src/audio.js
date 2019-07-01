class AudioOutput {
  constructor() {
    this.audioContext = new AudioContext();
    this.currentTrack = 0;
    this.proxyUrl = 'https://corsproxyglobe.herokuapp.com/';
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
    this.musicSrc.push('s3.amazonaws.com/full-stack-upload-dev/Avicii+-+Hey+Brother+(Lyric).mp3');
    this.musicSrc.push('s3.amazonaws.com/notefloat-dev/sandstorm.mp3');
    this.musicSrc.push("https://s3.amazonaws.com/full-stack-upload-dev/7.+Jackson+5+-+I+Want+You+Back.mp3");
    this.musicSrc.push('api.soundcloud.com/tracks/42328219/stream?client_id=b1495e39071bd7081a74093816f77ddb');
    this.audioElement.src = this.proxyUrl + this.musicSrc[this.currentTrack];
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

  nextTrack() {
    this.currentTrack = (this.currentTrack + 1) % this.musicSrc.length;
    this.audioElement.src = this.proxyUrl + this.musicSrc[this.currentTrack];
  }
}

module.exports = AudioOutput;