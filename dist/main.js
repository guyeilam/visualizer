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

eval("class AudioOutput {\n  constructor() {\n    this.audioContext = new AudioContext();\n    this.audioElement = new Audio();\n    this.audioElement.src = 'https://api.soundcloud.com/tracks/42328219/stream?client_id=b1495e39071bd7081a74093816f77ddb';\n    this.audioElement.controls = true;\n    this.audioElement.loop = true;\n    this.audioElement.autoplay = true;\n    this.audioElement.crossOrigin = \"anonymous\";\n    this.audioSrc = this.audioContext.createMediaElementSource(this.audioElement);\n    this.analyser = this.audioContext.createAnalyser();\n    this.analyser.fftSize = 2048;\n    this.audioSrc.connect(this.analyser);\n    this.audioSrc.connect(this.audioContext.destination);\n    // this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);\n  }\n\n  togglePlay(playState) {\n    let newPlayState;\n    if (this.audioContext.state === 'suspended') {\n      this.audioContext.resume();\n    }\n    if (playState === false) {\n      this.audioElement.play();\n      newPlayState = true;\n      // this.renderFrame();\n    } else if (playState === true) {\n      this.audioElement.pause();\n      newPlayState = false;\n    }\n    return newPlayState;\n  }\n\n  // draw(ctx) {\n    \n\n  // }\n\n  // renderFrame() {\n  //   if (playState === false) {\n  //     cancelAnimationFrame(animationFrame);\n  //   } else {\n  //     animationFrame = requestAnimationFrame(renderFrame);\n  // }\n\n  // renderFrame() {\n  //   const animationFrame = requestAnimationFrame(this.renderFrame);\n  //   this.analyser.getByteFrequencyData(this.frequencyData);\n    // let dataOutput = [];\n    // for (let i = 0; i < frequencyData.length; i++) {\n    //   if ((frequencyData[i] > 0) && (i % 40 === 0)) {\n    //     dataOutput.push(frequencyData[i]);\n    //     redraw(frequencyData[i]);\n    //   }\n    // }\n    // refrequencyData);\n\n    // redraw(frequencyData);\n}\n\n\n\nmodule.exports = AudioOutput;\n\n//# sourceURL=webpack:///./src/audio.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const AudioOutput = __webpack_require__(/*! ./audio */ \"./src/audio.js\");\nconst Visualizer = __webpack_require__(/*! ./visualizer */ \"./src/visualizer.js\");\n\nrenderFrame = () => {\n  if (playState === false) {\n    cancelAnimationFrame(animationFrame);\n  } else {\n    animationFrame = requestAnimationFrame(renderFrame);\n    audio.analyser.getByteFrequencyData(frequencyData);\n    visualizer.draw(ctx, frequencyData);\n  }\n}\n\nlet canvasEl;\nlet ctx;\nconst audio = new AudioOutput;\nconst visualizer = new Visualizer(window.innerWidth, window.innerHeight);\nconst frequencyData = new Uint8Array(audio.analyser.frequencyBinCount);\nlet animationFrame;\nlet playState = false;\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const playButton = document.querySelector('button');\n  playButton.addEventListener('click', () => {\n    playState = audio.togglePlay(playState);\n    renderFrame();\n  });\n  canvasEl = document.getElementById(\"mycanvas\");\n  canvasEl.width = visualizer.DIM_X;\n  canvasEl.height = visualizer.DIM_Y;\n  ctx = canvasEl.getContext(\"2d\");\n\n  let redRGBSlider = document.getElementById('redRGBSlider');\n  let blueRGBSlider = document.getElementById('blueRGBSlider');\n  let greenRGBSlider = document.getElementById('greenRGBSlider');\n  let blueSlider = document.getElementById('blueSlider');\n  let widthSlider = document.getElementById('widthSlider');\n  let heightSlider = document.getElementById('heightSlider');\n  let barCountInput = document.getElementById('barCountInput');\n\n  redRGBSlider.addEventListener('input', function () {\n    visualizer.changeColor(`rgb(${this.value}, ${greenRGBSlider.value}, ${blueRGBSlider.value})`);\n  }, false);\n\n  greenRGBSlider.addEventListener('input', function () {\n    visualizer.changeColor(`rgb(${redRGBSlider.value}, ${this.value}, ${blueRGBSlider.value})`);\n  }, false);\n\n  blueRGBSlider.addEventListener('input', function () {\n    visualizer.changeColor(`rgb(${redRGBSlider.value}, ${greenRGBSlider.value}, ${this.value})`);\n  }, false);\n\n  blueSlider.addEventListener('input', function () {\n    visualizer.changeBlue(this.value);\n  }, false);\n\n  widthSlider.addEventListener('input', function () {\n    visualizer.changeWidth(this.value);\n  }, false);\n\n  heightSlider.addEventListener('input', function () {\n    visualizer.changeHeight(this.value);\n  }, false);\n\n  barCountInput.addEventListener('input', function () {\n    visualizer.changeBarCount(this.value);\n  }, false);\n\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/small_visualizer.js":
/*!*********************************!*\
  !*** ./src/small_visualizer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class SmallVisualizer {\n  constructor(pos_x, pos_y) {\n    this.pos_x = pos_x\n    this.pos_y = pos_y\n  }\n\n  draw(ctx, arr, i, dim_x, dim_y) {\n    \n    ctx.strokeStyle = 'rgb(255,255,255)';\n    ctx.lineWidth = 2;\n    let x1 = dim_x - 310;\n    let x2 = dim_x - 120;\n    let y1 = 30;\n    let y2 = 110;\n    ctx.beginPath();\n    ctx.moveTo(x1, y1);\n    ctx.lineTo(x2, y1);\n    ctx.moveTo(x2, y1);\n    ctx.lineTo(x2, y2);\n    ctx.moveTo(x2, y2);\n    ctx.lineTo(x1, y2);\n    ctx.moveTo(x1, y2);\n    ctx.lineTo(x1, y1);\n    ctx.stroke();\n    if ((i % 10) === 0) {\n      ctx.fillStyle = 'rgb(255, 255, 255)';\n      ctx.fillRect(this.pos_x + (i / 5), this.pos_y - (arr[i] / 8), 1, (arr[i] / 8));\n    }\n  }\n}\n\nmodule.exports = SmallVisualizer;\n\n//# sourceURL=webpack:///./src/small_visualizer.js?");

/***/ }),

/***/ "./src/visualizer.js":
/*!***************************!*\
  !*** ./src/visualizer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const VisualizerText = __webpack_require__(/*! ./visualizer_text */ \"./src/visualizer_text.js\");\nconst SmallVisualizer = __webpack_require__(/*! ./small_visualizer */ \"./src/small_visualizer.js\");\n\nclass Visualizer {\n  constructor(width, height) {\n    this.DIM_X = width;\n    this.DIM_Y = height;\n    this.BG_COLOR = \"#000000\";\n    this.color = 'rgb(100,100,100)';\n    this.blue = 100;\n    this.widthValue = 1;\n    this.lineWidth = 1;\n    this.radius = 1;\n    this.startX = 1;\n    this.bHeightFactor = 1;\n    this.r = 150;\n    this.numBars = 300;\n    this.time = new Date()\n    this.textObjects = [];\n    this.add(new VisualizerText(50, 50));\n    this.smallVisualizer = new SmallVisualizer(this.DIM_X - 300, 100);\n  }\n\n  \n\n  drawCircle(ctx, arr, x) {\n    let radius = arr[x];\n    let startX = this.startX;\n    let transposeX = .5;\n    let startY = 12.5;\n    let transposeY = .5;\n    ctx.strokeStyle = this.color;\n    ctx.lineWidth = this.widthValue;\n    ctx.beginPath();\n    // ctx.arc(startX + (transposeX * arr[x]), startY + (transposeY * arr[x]), radius, 0, Math.PI * 2, true);\n    ctx.arc(this.DIM_X / 2, this.DIM_Y / 2, radius, 0, 2 * Math.PI);\n    ctx.stroke();\n  }\n\n  drawLine(ctx, x1, y1, x2, y2, width, arr, i) {\n    ctx.strokeStyle = `rgba(${Math.floor(255 - i)}, 0, ${this.blue}, 1)`;\n    // ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - i) + ', ' + this.blue + ')';\n    ctx.lineWidth = this.lineWidth;\n    ctx.beginPath();\n    // ctx.moveTo(x1, y1);\n    // ctx.lineTo(x2, y2);\n    ctx.moveTo(x1, y1);\n    ctx.lineTo(x2, y2);\n    ctx.stroke();\n  }\n\n  drawOld(ctx, arr) {\n    let x = 0;\n    let sliceWidth = this.DIM_X * 1.0 / arr.length;\n    \n    // ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n    // ctx.fillStyle = this.BG_COLOR;\n    // ctx.clearRect(0, 0, 100, 100);\n    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';\n    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);\n    // ctx.fillStyle = this.BG_COLOR;\n    // ctx.fillRect(0, 0, 100, 100);\n\n    if (!arr) {\n      return null;\n    }\n\n    let startX = this.startX;\n    let transposeX = .5;\n    let startY = 12.5;\n    let transposeY = .5;  \n\n    let center_x = this.DIM_X / 2;\n    let center_y = this.DIM_Y / 2;\n    let r = this.r;\n\n    ctx.strokeStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(center_x, center_y, 150, 0, 2 * Math.PI);\n    ctx.stroke();\n\n    let numBars = this.numBars;\n    \n    \n    // ctx.rotate(((2 * Math.PI) / 60) * this.time.getSeconds() + ((2 * Math.PI) / 60000) * this.time.getMilliseconds());\n    // ctx.translate(105, 0);\n\n    for (let i = 0; i < numBars; i++) {\n      // ctx.fillStyle = this.color;\n\n      let radians = Math.PI * 2 / numBars;\n      let bHeight = arr[i] * this.bHeightFactor;\n      let bWidth = this.lineWidth;\n\n      let x = center_x + Math.cos(radians * i) * (r);\n      let y = center_y + Math.sin(radians * i) * (r);\n      let x_end = center_x + Math.cos(radians * i) * (r + bHeight);\n      let y_end = center_y + Math.sin(radians * i) * (r + bHeight);\n\n      this.drawLine(ctx, x, y, x_end, y_end, bWidth, arr, i);\n\n\n      this.drawCircle(ctx, arr, i);\n\n      \n    }\n  }\n\n  draw(ctx, arr) {\n    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n    ctx.fillStyle = this.BG_COLOR;\n    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);\n\n    let numBars = this.numBars;\n    for (let i = 0; i < numBars; i++) {\n      this.textObjects[0].draw(ctx, arr, i);\n      this.smallVisualizer.draw(ctx, arr, i, this.DIM_X, this.DIM_Y);\n      // this.allObjects().forEach((object) => {\n      //   object.draw(ctx, arr, i);\n      // });\n    }\n  }\n\n  allObjects() {\n    return [].concat(this.textObjects);\n  }\n\n  add(object) {\n    if (object instanceof VisualizerText) {\n      this.textObjects.push(object);\n    } else {\n      throw new Error(\"unknown type of object\");\n    }\n  }\n\n  remove(object) {\n    if (object instanceof VisualizerText) {\n      this.textObjects.splice(this.textObjects.indexOf(object), 1);\n    } else {\n      throw new Error(\"unknown type of object\");\n    }\n  }\n\n  changeColor(newColor) {\n    this.color = newColor;\n  }\n\n  changeBlue(newBlue) {\n    this.blue = newBlue;\n  }\n\n  changeStartX(newStartX) {\n    this.startX = newStartX;\n  }\n\n  changeWidth(newWidth) {\n    this.lineWidth = newWidth;\n  }\n\n  changeHeight(newHeight) {\n    this.bHeightFactor = newHeight;\n  }\n\n  changeBarCount(newBarCount) {\n    this.numBars = newBarCount;\n  }\n\n}\n\nmodule.exports = Visualizer;\n\n//# sourceURL=webpack:///./src/visualizer.js?");

/***/ }),

/***/ "./src/visualizer_text.js":
/*!********************************!*\
  !*** ./src/visualizer_text.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class VisualizerText {\n  constructor(pos_x, pos_y) {\n    this.pos_x = pos_x\n    this.pos_y = pos_y\n  }\n\n  draw(ctx, arr, i) {\n    ctx.font = '10px sans-serif';\n    ctx.strokeStyle = 'rgb(255, 255, 255)';\n    ctx.strokeText(arr[i], this.pos_x, this.pos_y + (12 * i));\n  }\n}\n\nmodule.exports = VisualizerText;\n\n//# sourceURL=webpack:///./src/visualizer_text.js?");

/***/ })

/******/ });