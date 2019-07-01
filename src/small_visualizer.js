class SmallVisualizer {
  constructor(pos_x, pos_y) {
    this.pos_x = pos_x
    this.pos_y = pos_y
  }

  draw(ctx, arr, i, dim_x, dim_y) {
    ctx.strokeStyle = 'rgb(255,255,255)';
    ctx.lineWidth = 2;
    let x1 = dim_x - 310;
    let x2 = dim_x - 140;
    let y1 = dim_y - 180;
    let y2 = dim_y - 100;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y1);
    ctx.moveTo(x2, y1);
    ctx.lineTo(x2, y2);
    ctx.moveTo(x2, y2);
    ctx.lineTo(x1, y2);
    ctx.moveTo(x1, y2);
    ctx.lineTo(x1, y1);
    ctx.stroke();
    if ((i % 10) === 0) {
      ctx.fillStyle = 'rgb(255, 255, 255)';
      ctx.fillRect(this.pos_x + (i / 5), this.pos_y - (arr[i] / 8), 1, (arr[i] / 8));
    }
  }
}

export default SmallVisualizer;