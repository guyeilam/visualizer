class VisualizerText {
  constructor(pos_x, pos_y) {
    this.pos_x = pos_x
    this.pos_y = pos_y
  }

  draw(ctx, arr, i) {
    ctx.font = '10px sans-serif';
    ctx.strokeStyle = 'rgb(255, 255, 255)';
    ctx.strokeText(arr[i], this.pos_x, this.pos_y + (12 * i));
  }
}

module.exports = VisualizerText;