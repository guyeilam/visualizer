/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/audio.js":
/*!**********************!*\
  !*** ./src/audio.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class AudioOutput {\n  constructor() {\n    this.audioContext = new AudioContext();\n    const proxyUrl = 'https://corsproxyglobe.herokuapp.com/';\n    this.audioElement = new Audio();\n    this.audioElement.controls = true;\n    this.audioElement.loop = true;\n    this.audioElement.autoplay = true;\n    this.audioElement.crossOrigin = \"anonymous\";\n    this.audioSrc = this.audioContext.createMediaElementSource(this.audioElement);\n    this.analyser = this.audioContext.createAnalyser();\n    this.analyser.fftSize = 2048;\n    this.audioSrc.connect(this.analyser);\n    this.audioSrc.connect(this.audioContext.destination);\n    this.musicSrc = [];\n    this.musicSrc.push('s3.amazonaws.com/full-stack-upload-dev/Avicii+-+Broken+Arrows.mp3');\n    this.musicSrc.push('s3.amazonaws.com/full-stack-upload-dev/Avicii+-+Hey+Brother+(Lyric).mp3');\n    this.audioElement.src = proxyUrl + this.musicSrc[1];\n  }\n\n  togglePlay(playState) {\n    let newPlayState;\n    if (this.audioContext.state === 'suspended') {\n      this.audioContext.resume();\n    }\n    if (playState === false) {\n      this.audioElement.play();\n      newPlayState = true;\n      // this.renderFrame();\n    } else if (playState === true) {\n      this.audioElement.pause();\n      newPlayState = false;\n    }\n    return newPlayState;\n  }\n}\n\nmodule.exports = AudioOutput;\n\n//# sourceURL=webpack:///./src/audio.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const AudioOutput = __webpack_require__(/*! ./audio */ \"./src/audio.js\");\nconst Visualizer = __webpack_require__(/*! ./visualizer */ \"./src/visualizer.js\");\n\nrenderFrame = () => {\n  if (playState === false) {\n    cancelAnimationFrame(animationFrame);\n  } else {\n    animationFrame = requestAnimationFrame(renderFrame);\n    audio.analyser.getByteFrequencyData(frequencyData);\n    visualizer.draw(ctx, frequencyData);\n  }\n}\n\nlet canvasEl;\nlet ctx;\nconst audio = new AudioOutput;\nconst visualizer = new Visualizer(window.innerWidth, window.innerHeight);\nconst frequencyData = new Uint8Array(audio.analyser.frequencyBinCount);\nlet animationFrame;\nlet playState = false;\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const playButton = document.querySelector('button');\n  playButton.addEventListener('click', () => {\n    playState = audio.togglePlay(playState);\n    renderFrame();\n  });\n  canvasEl = document.getElementById(\"mycanvas\");\n  canvasEl.width = visualizer.DIM_X;\n  canvasEl.height = visualizer.DIM_Y;\n  ctx = canvasEl.getContext(\"2d\");\n\n  let redRGBSlider = document.getElementById('redRGBSlider');\n  let blueRGBSlider = document.getElementById('blueRGBSlider');\n  let greenRGBSlider = document.getElementById('greenRGBSlider');\n  let circleAlphaSlider = document.getElementById('circleAlphaSlider');\n  let blueSlider = document.getElementById('blueSlider');\n  let widthSlider = document.getElementById('widthSlider');\n  let heightSlider = document.getElementById('heightSlider');\n  let barCountInput = document.getElementById('barCountInput');\n  let fadeInput = document.getElementById('fadeSlider');\n  let circleRadiusSlider = document.getElementById('circleRadiusSlider');\n\n  redRGBSlider.addEventListener('input', function () {\n    visualizer.changeCircleRed(this.value);\n  }, false);\n\n  greenRGBSlider.addEventListener('input', function () {\n    visualizer.changeCircleGreen(this.value);\n  }, false);\n\n  blueRGBSlider.addEventListener('input', function () {\n    visualizer.changeCircleBlue(this.value);\n  }, false);\n\n  circleAlphaSlider.addEventListener('input', function () {\n    visualizer.changeCircleAlpha(this.value);\n  }, false);\n\n  blueSlider.addEventListener('input', function () {\n    visualizer.changeBlue(this.value);\n  }, false);\n\n  widthSlider.addEventListener('input', function () {\n    visualizer.changeWidth(this.value);\n  }, false);\n\n  heightSlider.addEventListener('input', function () {\n    visualizer.changeHeight(this.value);\n  }, false);\n\n  barCountInput.addEventListener('input', function () {\n    visualizer.changeBarCount(this.value);\n  }, false);\n\n fadeInput.addEventListener('input', function () {\n    visualizer.changeFade(this.value);\n    visualizer.drawText(ctx, this.value);\n  }, false);\n\n  circleRadiusSlider.addEventListener('input', function () {\n    visualizer.changeCircleRadius(this.value);\n  }, false);\n\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/small_visualizer.js":
/*!*********************************!*\
  !*** ./src/small_visualizer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class SmallVisualizer {\n  constructor(pos_x, pos_y) {\n    this.pos_x = pos_x\n    this.pos_y = pos_y\n  }\n\n  draw(ctx, arr, i, dim_x, dim_y) {\n    \n    ctx.strokeStyle = 'rgb(255,255,255)';\n    ctx.lineWidth = 2;\n    let x1 = dim_x - 310;\n    let x2 = dim_x - 140;\n    let y1 = 30;\n    let y2 = 110;\n    ctx.beginPath();\n    ctx.moveTo(x1, y1);\n    ctx.lineTo(x2, y1);\n    ctx.moveTo(x2, y1);\n    ctx.lineTo(x2, y2);\n    ctx.moveTo(x2, y2);\n    ctx.lineTo(x1, y2);\n    ctx.moveTo(x1, y2);\n    ctx.lineTo(x1, y1);\n    ctx.stroke();\n    if ((i % 10) === 0) {\n      ctx.fillStyle = 'rgb(255, 255, 255)';\n      ctx.fillRect(this.pos_x + (i / 5), this.pos_y - (arr[i] / 8), 1, (arr[i] / 8));\n      // ctx.fillRect(this.pos_x + (i / 10), this.pos_y - (arr[i] / 8), 5, (arr[i] / 5));\n    }\n  }\n}\n\nmodule.exports = SmallVisualizer;\n\n//# sourceURL=webpack:///./src/small_visualizer.js?");

/***/ }),

/***/ "./src/visualizer.js":
/*!***************************!*\
  !*** ./src/visualizer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const VisualizerText = __webpack_require__(/*! ./visualizer_text */ \"./src/visualizer_text.js\");\nconst SmallVisualizer = __webpack_require__(/*! ./small_visualizer */ \"./src/small_visualizer.js\");\n\nclass Visualizer {\n  constructor(width, height) {\n    this.DIM_X = width;\n    this.DIM_Y = height;\n    this.BG_COLOR = \"#000000\";\n    this.circleRed = 100;\n    this.circleGreen = 100;\n    this.circleBlue = 100;\n    this.circleAlpha = 1;\n    // this.color = 'rgb(100,100,100)';\n    this.blue = 100;\n    this.widthValue = 1;\n    this.lineWidth = 1;\n    this.radius = 1;\n    this.startX = 1;\n    this.bHeightFactor = 1;\n    this.fadeFactor = 1;\n    this.radiusFactor = 1;\n    this.r = 150;\n    this.numBars = 1024;\n    this.time = new Date()\n    this.textObjects = [];\n    this.add(new VisualizerText(50, 500));\n    this.smallVisualizer = new SmallVisualizer(this.DIM_X - 300, 100);\n  }\n\n  drawCircle(ctx, arr, x) {\n    let radius = arr[x] * this.radiusFactor;\n    let startX = this.startX;\n    let transposeX = .5;\n    let startY = 12.5;\n    let transposeY = .5;\n    ctx.strokeStyle = `rgba(${this.circleRed}, ${this.circleGreen}, ${this.circleBlue}, ${this.circleAlpha})`;\n    ctx.lineWidth = this.widthValue;\n    ctx.beginPath();\n    // ctx.arc(startX + (transposeX * arr[x]), startY + (transposeY * arr[x]), radius, 0, Math.PI * 2, true);\n    ctx.arc(this.DIM_X / 2, this.DIM_Y / 2, radius, 0, 2 * Math.PI);\n    ctx.stroke();\n  }\n\n  drawLine(ctx, x1, y1, x2, y2, width, arr, i) {\n    let red = Math.floor(255 * (i / arr.length));\n    let green = 255 - this.blue;\n    ctx.strokeStyle = `rgba(${red}, ${green}, ${this.blue}, 1)`;\n    // ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - i) + ', ' + this.blue + ')';\n    ctx.lineWidth = this.lineWidth;\n    ctx.beginPath();\n    // ctx.moveTo(x1, y1);\n    // ctx.lineTo(x2, y2);\n    ctx.moveTo(x1, y1);\n    ctx.lineTo(x2, y2);\n    ctx.stroke();\n  }\n\n  drawText(ctx, text) {\n    this.textObjects[0].draw(ctx, text);\n  }\n\n  draw(ctx, arr) {\n    let center_x = this.DIM_X / 2;\n    let center_y = this.DIM_Y / 2;\n    let r = this.r;\n\n    // ctx.clearRect(0, this.DIM_Y - 200, 100, 200);\n    // ctx.fillStyle = 'rgba(0,0,0,1)';\n    // ctx.fillRect(0, this.DIM_Y - 200, 100, 200);\n    ctx.fillStyle = `rgba(0,0,0,${this.fadeFactor})`;\n    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);\n    // ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y - 200);\n    // ctx.fillRect(100, this.DIM_Y - 200, this.DIM_X - 100, 200);\n\n    ctx.strokeStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(center_x, center_y, 150, 0, 2 * Math.PI);\n    ctx.stroke();\n\n    let numBars = this.numBars;\n    // this.drawOld(ctx, arr);\n    // this.textObjects[0].draw(ctx, arr);\n    for (let i = 0; i < arr.length; i++) {\n      this.smallVisualizer.draw(ctx, arr, i, this.DIM_X, this.DIM_Y);\n\n      if (i <= numBars) {\n        let radians = Math.PI * 2 / numBars;\n        let bHeight = arr[i] * this.bHeightFactor;\n        let bWidth = this.lineWidth;\n\n        let x = center_x + Math.cos(radians * i) * (r);\n        let y = center_y + Math.sin(radians * i) * (r);\n        let x_end = center_x + Math.cos(radians * i) * (r + bHeight);\n        let y_end = center_y + Math.sin(radians * i) * (r + bHeight);\n\n        this.drawLine(ctx, x, y, x_end, y_end, bWidth, arr, i);\n\n        this.drawCircle(ctx, arr, i);\n      }\n    }\n  }\n\n  allObjects() {\n    return [].concat(this.textObjects);\n  }\n\n  add(object) {\n    if (object instanceof VisualizerText) {\n      this.textObjects.push(object);\n    } else {\n      throw new Error(\"unknown type of object\");\n    }\n  }\n\n  remove(object) {\n    if (object instanceof VisualizerText) {\n      this.textObjects.splice(this.textObjects.indexOf(object), 1);\n    } else {\n      throw new Error(\"unknown type of object\");\n    }\n  }\n\n  changeColor(newColor) {\n    this.color = newColor;\n  }\n\n  changeCircleRed(newRed) {\n    this.circleRed = newRed;\n  }\n\n  changeCircleGreen(newGreen) {\n    this.circleGreen = newGreen;\n  }\n\n  changeCircleBlue(newBlue) {\n    this.circleBlue = newBlue;\n  }\n\n  changeCircleAlpha(newAlpha) {\n    this.circleAlpha = newAlpha;\n  }\n\n  changeBlue(newBlue) {\n    // let oldBlue = this.blue;\n    // let diff = newBlue - oldBlue;\n    // let step = diff / 10;\n    // for (let i = 0; i < 10; i++) {\n    //   setTimeout(() => { this.blue = oldBlue + (step * i) }, 1000 * i)\n    // }\n    this.blue = newBlue;\n  }\n\n  changeStartX(newStartX) {\n    this.startX = newStartX;\n  }\n\n  changeWidth(newWidth) {\n    this.lineWidth = newWidth;\n  }\n\n  changeHeight(newHeight) {\n    this.bHeightFactor = newHeight;\n  }\n\n  changeBarCount(newBarCount) {\n    this.numBars = newBarCount;\n  }\n\n  changeFade(newFade) {\n    this.fadeFactor = newFade;\n  }\n\n  changeCircleRadius(newRadiusFactor) {\n    this.radiusFactor = newRadiusFactor;\n  }\n\n}\n\nmodule.exports = Visualizer;\n\n//# sourceURL=webpack:///./src/visualizer.js?");

/***/ }),

/***/ "./src/visualizer_text.js":
/*!********************************!*\
  !*** ./src/visualizer_text.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class VisualizerText {\n  constructor(pos_x, pos_y) {\n    this.pos_x = pos_x\n    this.pos_y = pos_y\n    this.lineCount = 0;\n  }\n\n  newLine() {\n    this.lineCount++;\n    if (this.lineCount === 50) {\n      this.lineCount = 1;\n    }\n  }\n\n  draw(ctx, text) {\n    // if (this.lineCount === 0) {\n    //   ctx.fillStyle = '#000000';\n    //   ctx.fillRect(0, 0, 400, 5000);\n    // }\n    this.newLine();\n    if (this.lineCount === 1) {\n      // ctx.clearRect(0, 0, 400, 5000);\n      // ctx.fillStyle = '#000000';\n      // ctx.fillRect(0, 0, 400,5000);\n    }\n    ctx.font = '10px sans-serif';\n    ctx.strokeStyle = 'rgba(255, 0, 0, 1)';\n    ctx.strokeText(text, this.pos_x, this.pos_y + (12 * this.lineCount));\n  }\n}\n\nmodule.exports = VisualizerText;\n\n//# sourceURL=webpack:///./src/visualizer_text.js?");

/***/ })

/******/ });