class Visualizer {
  constructor(width, height) {
    this.DIM_X = width;
    this.DIM_Y = height;
    this.BG_COLOR = "#000000";
    this.color = 'rgb(100,100,100)';
    this.blue = 100;
    // this.widthValue = 1;
    this.lineWidth = 1;
    this.radius = 1;
    this.startX = 1;
    this.bHeightFactor = 1;
    this.r = 150;
  }

  drawCircle(ctx, arr, x) {
    let radius = arr[x];
    let startX = this.startX;
    let transposeX = .5;
    let startY = 12.5;
    let transposeY = .5;
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    // ctx.arc(startX + (transposeX * arr[x]), startY + (transposeY * arr[x]), radius, 0, Math.PI * 2, true);
    ctx.arc(this.DIM_X / 2, this.DIM_Y / 2, radius, 0, 2 * Math.PI);
    ctx.stroke();
  }

  drawLine(ctx, x1, y1, x2, y2, width, freq) {

    let lineColor = "rgb(" + freq + ", " + freq + ", " + this.blue + ")";

    ctx.strokeStyle = lineColor;
    ctx.lineWidth = this.lineWidth;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  draw(ctx, arr) {
    let x = 0;
    let sliceWidth = this.DIM_X * 1.0 / arr.length;
    
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    ctx.fillStyle = this.BG_COLOR;
    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);

    if (!arr) {
      return null;
    }

    let startX = this.startX;
    let transposeX = .5;
    let startY = 12.5;
    let transposeY = .5;  

    let center_x = this.DIM_X / 2;
    let center_y = this.DIM_Y / 2;
    let r = this.r;

    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.arc(center_x, center_y, 150, 0, 2 * Math.PI);
    ctx.stroke();

    let barCount = 200;

    for (let i = 0; i < barCount; i++) {
      // ctx.fillStyle = this.color;

      let radians = Math.PI * 2 / barCount;
      let bHeight = arr[i] * this.bHeightFactor;
      let bWidth = this.lineWidth;

      let x = center_x + Math.cos(radians * i) * (r);
      let y = center_y + Math.sin(radians * i) * (r);
      let x_end = center_x + Math.cos(radians * i) * (r + bHeight);
      let y_end = center_y + Math.sin(radians * i) * (r + bHeight);

      this.drawLine(ctx, x, y, x_end, y_end, bWidth, arr[i]);

      

      // ctx.fillRect(this.DIM_X - x, this.DIM_Y - arr[x], 10, ((arr[x] / 128.0) * this.DIM_Y / 4));

      this.drawCircle(ctx, arr, i);
    }
  }

  changeColor(newColor) {
    this.color = newColor;
  }

  changeBlue(newBlue) {
    this.blue = newBlue;
  }

  changeStartX(newStartX) {
    this.startX = newStartX;
  }

  changeWidth(newWidth) {
    this.lineWidth = newWidth;
  }

  changeHeight(newHeight) {
    this.bHeightFactor = newHeight;
  }

}

module.exports = Visualizer;