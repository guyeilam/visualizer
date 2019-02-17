const VisualizerText = require("./visualizer_text");
const SmallVisualizer = require("./small_visualizer");

class Visualizer {
  constructor(width, height) {
    this.DIM_X = width;
    this.DIM_Y = height;
    this.BG_COLOR = "#000000";
    this.color = 'rgb(100,100,100)';
    this.blue = 100;
    this.widthValue = 1;
    this.lineWidth = 1;
    this.radius = 1;
    this.startX = 1;
    this.bHeightFactor = 1;
    this.fadeFactor = 1;
    this.r = 150;
    this.numBars = 1024;
    this.time = new Date()
    this.textObjects = [];
    this.add(new VisualizerText(50, 50));
    this.smallVisualizer = new SmallVisualizer(this.DIM_X - 300, 100);
  }

  drawCircle(ctx, arr, x) {
    let radius = arr[x];
    let startX = this.startX;
    let transposeX = .5;
    let startY = 12.5;
    let transposeY = .5;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.widthValue;
    ctx.beginPath();
    // ctx.arc(startX + (transposeX * arr[x]), startY + (transposeY * arr[x]), radius, 0, Math.PI * 2, true);
    ctx.arc(this.DIM_X / 2, this.DIM_Y / 2, radius, 0, 2 * Math.PI);
    ctx.stroke();
  }

  drawLine(ctx, x1, y1, x2, y2, width, arr, i) {
    let red = Math.floor(255 * (i / arr.length));
    let green = 255 - this.blue;
    ctx.strokeStyle = `rgba(${red}, ${green}, ${this.blue}, 1)`;
    // ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - i) + ', ' + this.blue + ')';
    ctx.lineWidth = this.lineWidth;
    ctx.beginPath();
    // ctx.moveTo(x1, y1);
    // ctx.lineTo(x2, y2);
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  draw(ctx, arr) {
    let center_x = this.DIM_X / 2;
    let center_y = this.DIM_Y / 2;
    let r = this.r;

    // ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    ctx.fillStyle = `rgba(0,0,0,${this.fadeFactor})`;
    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);

    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.arc(center_x, center_y, 150, 0, 2 * Math.PI);
    ctx.stroke();

    let numBars = this.numBars;
    // this.drawOld(ctx, arr);
    // this.textObjects[0].draw(ctx, arr);
    for (let i = 0; i < arr.length; i++) {
      this.smallVisualizer.draw(ctx, arr, i, this.DIM_X, this.DIM_Y);

      if (i <= numBars) {
        let radians = Math.PI * 2 / numBars;
        let bHeight = arr[i] * this.bHeightFactor;
        let bWidth = this.lineWidth;

        let x = center_x + Math.cos(radians * i) * (r);
        let y = center_y + Math.sin(radians * i) * (r);
        let x_end = center_x + Math.cos(radians * i) * (r + bHeight);
        let y_end = center_y + Math.sin(radians * i) * (r + bHeight);

        this.drawLine(ctx, x, y, x_end, y_end, bWidth, arr, i);

        this.drawCircle(ctx, arr, i);
      }
    }
  }

  allObjects() {
    return [].concat(this.textObjects);
  }

  add(object) {
    if (object instanceof VisualizerText) {
      this.textObjects.push(object);
    } else {
      throw new Error("unknown type of object");
    }
  }

  remove(object) {
    if (object instanceof VisualizerText) {
      this.textObjects.splice(this.textObjects.indexOf(object), 1);
    } else {
      throw new Error("unknown type of object");
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

  changeBarCount(newBarCount) {
    this.numBars = newBarCount;
  }

  changeFade(newFade) {
    this.fadeFactor = newFade;
  }

}

module.exports = Visualizer;