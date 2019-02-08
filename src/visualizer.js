class Visualizer {
  constructor() {
    this.DIM_X = 500;
    this.DIM_Y = 500;
    this.BG_COLOR = "#000000";
    this.color = 'rgb(100,100,100)';
  }

  draw(ctx, arr) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    ctx.fillStyle = this.BG_COLOR;
    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);

    if (!arr) {
      return null;
    }
    for (let x = 0; x < arr.length; x++) {
      
      for (var i = 0; i < arr[x]; i++) {
        // ctx.fillStyle = `rgb(0,${x % 255},${i})`;
        ctx.fillStyle = this.color;
        ctx.fillRect(x * 2, (this.DIM_Y - arr[x]), 1, arr[x]);
      }
    }
  }

  changeColor(newColor) {
    this.color = newColor;
  }

}

module.exports = Visualizer;