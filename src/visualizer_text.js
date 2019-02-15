class VisualizerText {
  constructor(pos_x, pos_y) {
    this.pos_x = pos_x
    this.pos_y = pos_y
    this.lineCount = 1;
  }

  newLine() {
    this.lineCount++;
    if (this.lineCount === 20) {
      this.lineCount = 0;
    }
  }

  draw(ctx, arr) {
    this.newLine();
    if (this.lineCount === 0) {
      // ctx.clearRect(0, 0, 400, 5000);
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, 400,5000);
    }
    ctx.font = '10px sans-serif';
    ctx.strokeStyle = 'rgb(255, 0, 0)';
    ctx.strokeText(arr.slice(0,20).toString(), this.pos_x, this.pos_y + (12 * this.lineCount));
  }
}

module.exports = VisualizerText;