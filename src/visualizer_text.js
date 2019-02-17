class VisualizerText {
  constructor(pos_x, pos_y) {
    this.pos_x = pos_x
    this.pos_y = pos_y
    this.lineCount = 0;
  }

  newLine() {
    this.lineCount++;
    if (this.lineCount === 50) {
      this.lineCount = 1;
    }
  }

  draw(ctx, text) {
    // if (this.lineCount === 0) {
    //   ctx.fillStyle = '#000000';
    //   ctx.fillRect(0, 0, 400, 5000);
    // }
    this.newLine();
    if (this.lineCount === 1) {
      // ctx.clearRect(0, 0, 400, 5000);
      // ctx.fillStyle = '#000000';
      // ctx.fillRect(0, 0, 400,5000);
    }
    ctx.font = '10px sans-serif';
    ctx.strokeStyle = 'rgba(255, 0, 0, 1)';
    ctx.strokeText(text, this.pos_x, this.pos_y + (12 * this.lineCount));
  }
}

module.exports = VisualizerText;