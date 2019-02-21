const VisualizerText = require("./visualizer_text");
const SmallVisualizer = require("./small_visualizer");

class Visualizer {
  constructor(width, height) {
    this.DIM_X = width;
    this.DIM_Y = height;
    this.BG_COLOR = "#000000";
    this.circleRed = 20;
    this.circleGreen = 20;
    this.circleBlue = 150;
    this.circleAlpha = 1;
    // this.color = 'rgb(100,100,100)';
    this.blue = 100;
    this.widthValue = 1;
    this.lineWidth = 1;
    this.radius = 1;
    this.startX = 1;
    this.bHeightFactor = 1;
    this.fadeFactor = 1;
    this.radiusFactor = 1;
    this.r = 150;
    this.radiusFactorBars = 1;
    this.numBars = 1024;
    this.time = new Date()
    this.textObjects = [];
    this.add(new VisualizerText(50, this.DIM_Y - 400));
    this.smallVisualizer = new SmallVisualizer(this.DIM_X - 300, 100);
    this.settings = [];
  }

  drawCircle(ctx, arr, x) {
    let radius = arr[x] * this.radiusFactor;
    let startX = this.startX;
    let transposeX = .5;
    let startY = 12.5;
    let transposeY = .5;
    ctx.strokeStyle = `rgba(${this.circleRed}, ${this.circleGreen}, ${this.circleBlue}, ${this.circleAlpha})`;
    ctx.lineWidth = this.widthValue;
    ctx.beginPath();
    // ctx.arc(startX + (transposeX * arr[x]), startY + (transposeY * arr[x]), radius, 0, Math.PI * 2, true);
    ctx.arc(this.DIM_X / 2, this.DIM_Y / 2, radius, 0, 2 * Math.PI);
    ctx.stroke();
  }

  drawLine(ctx, x1, y1, x2, y2, width, arr, i) {
    let green = Math.floor(255 * (i / arr.length));
    let red = 255 - this.blue;
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

  drawText(ctx, text, rowHeight) {
    this.textObjects[0].draw(ctx, text, rowHeight);
  }

  draw(ctx, arr) {
    let time = new Date();

    let center_x = this.DIM_X / 2;
    let center_y = this.DIM_Y / 2;
    let r = this.r * this.radiusFactorBars;

    // ctx.clearRect(0, this.DIM_Y - 200, 100, 200);
    // ctx.fillStyle = 'rgba(0,0,0,1)';
    // ctx.fillRect(0, this.DIM_Y - 200, 100, 200);
    ctx.fillStyle = `rgba(0,0,0,${this.fadeFactor})`;
    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
    // ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y - 200);
    // ctx.fillRect(100, this.DIM_Y - 200, this.DIM_X - 100, 200);

    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.arc(center_x, center_y, r, 0, 2 * Math.PI);
    ctx.stroke();

    let numBars = this.numBars;
    // let numBars = this.numBars + Math.floor(((time.getMilliseconds() / 1000) * (1024 - this.numBars)));
    // this.drawOld(ctx, arr);
    // this.textObjects[0].draw(ctx, arr);
    for (let i = 0; i < arr.length; i++) {
      // let numBars = Math.floor((100-(time.getMilliseconds() / 100)) * 1024);
      // this.drawText(ctx, numBars, 1);
      this.smallVisualizer.draw(ctx, arr, i, this.DIM_X, this.DIM_Y);

      if (i <= numBars) {
        let radians = Math.PI * (5.8 / numBars);
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

  changeCircleRed(newRed) {
    this.circleRed = newRed;
  }

  changeCircleGreen(newGreen) {
    this.circleGreen = newGreen;
  }

  changeCircleBlue(newBlue) {
    this.circleBlue = newBlue;
  }

  changeCircleAlpha(newAlpha) {
    this.circleAlpha = newAlpha;
  }

  changeBlue(newBlue) {
    // let oldBlue = this.blue;
    // let diff = newBlue - oldBlue;
    // let step = diff / 10;
    // for (let i = 0; i < 10; i++) {
    //   setTimeout(() => { this.blue = oldBlue + (step * i) }, 1000 * i)
    // }
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

  changeCircleRadius(newRadiusFactor) {
    this.radiusFactor = newRadiusFactor;
  }

  changeRadiusBars(newRadiusFactor) {
    this.radiusFactorBars = newRadiusFactor;
  }


  saveSettings() {
    let settings = {
      bHeightFactor: this.bHeightFactor,
      fadeFactor: this.fadeFactor,
      radiusFactor: this.radiusFactor,
      r: this.r,
      radiusFactorBars: this.radiusFactorBars,
      numBars: this.numBars,
      circleRed: this.circleRed,
      circleGreen: this.circleGreen,
      circleBlue: this.circleBlue,
      circleAlpha: this.circleAlpha,
      blue: this.blue,
      widthValue: this.widthValue,
      lineWidth: this.lineWidth,
      blue: this.blue,
      widthValue: this.widthValue,
      lineWidth: this.lineWidth
    };
    this.settings.push(settings);
    return this.settings.length;
  }

  loadSettings(preset) {
    let settingsPreset = preset-1;
    this.bHeightFactor = this.settings[settingsPreset]['bHeightFactor'];
    this.fadeFactor = this.settings[settingsPreset]['fadeFactor'];
    this.radiusFactor = this.settings[settingsPreset]['radiusFactor'];
    this.r = this.settings[settingsPreset]['r'];
    this.radiusFactorBars = this.settings[settingsPreset]['radiusFactorBars'];
    this.numBars = this.settings[settingsPreset]['numBars'];
    this.circleRed = this.settings[settingsPreset]['circleRed'];
    this.circleGreen = this.settings[settingsPreset]['circleGreen'];
    this.circleBlue = this.settings[settingsPreset]['circleBlue'];
    this.circleAlpha = this.settings[settingsPreset]['circleAlpha'];
    this.blue = this.settings[settingsPreset]['blue'];
    this.widthValue = this.settings[settingsPreset]['widthValue'];
    this.lineWidth = this.settings[settingsPreset]['lineWidth'];
    this.blue = this.settings[settingsPreset]['blue'];
    this.widthValue = this.settings[settingsPreset]['widthValue'];
    this.lineWidt = this.settings[settingsPreset]['lineWidth'];
  }

}

module.exports = Visualizer;