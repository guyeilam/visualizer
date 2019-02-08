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

eval("class AudioOutput {\n  constructor() {\n    this.audioContext = new AudioContext();\n    this.audioElement = new Audio();\n    this.audioElement.src = 'https://api.soundcloud.com/tracks/42328219/stream?client_id=b1495e39071bd7081a74093816f77ddb';\n    this.audioElement.controls = true;\n    this.audioElement.loop = true;\n    this.audioElement.autoplay = true;\n    this.audioElement.crossOrigin = \"anonymous\";\n    this.audioSrc = this.audioContext.createMediaElementSource(this.audioElement);\n    this.analyser = this.audioContext.createAnalyser();\n    this.analyser.fftSize = 2048;\n    this.audioSrc.connect(this.analyser);\n    this.audioSrc.connect(this.audioContext.destination);\n    // this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);\n  }\n\n  togglePlay(playState) {\n    let newPlayState;\n    if (this.audioContext.state === 'suspended') {\n      this.audioContext.resume();\n    }\n    if (playState === false) {\n      this.audioElement.play();\n      newPlayState = true;\n      // this.renderFrame();\n    } else if (playState === true) {\n      this.audioElement.pause();\n      newPlayState = false;\n    }\n    return newPlayState;\n  }\n\n  // draw(ctx) {\n  //   ctx.fillStyle = 'rgb(100,0,0)';\n\n  // }\n\n  // renderFrame() {\n  //   if (playState === false) {\n  //     cancelAnimationFrame(animationFrame);\n  //   } else {\n  //     animationFrame = requestAnimationFrame(renderFrame);\n  // }\n\n  // renderFrame() {\n  //   const animationFrame = requestAnimationFrame(this.renderFrame);\n  //   this.analyser.getByteFrequencyData(this.frequencyData);\n    // let dataOutput = [];\n    // for (let i = 0; i < frequencyData.length; i++) {\n    //   if ((frequencyData[i] > 0) && (i % 40 === 0)) {\n    //     dataOutput.push(frequencyData[i]);\n    //     redraw(frequencyData[i]);\n    //   }\n    // }\n    // refrequencyData);\n\n    // redraw(frequencyData);\n}\n\n\n\nmodule.exports = AudioOutput;\n\n//# sourceURL=webpack:///./src/audio.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const AudioOutput = __webpack_require__(/*! ./audio */ \"./src/audio.js\");\n\nredraw = (arr1) => {\n  // var x = charX;\n  // var y = charY;\n  // console.log(arr1);\n\n  let red;\n  let green;\n  let blue;\n\n  // console.log(arr1);\n  canvasEl.width = canvasEl.width; // clears the canvas \n  if (!arr1) {\n    return null;\n  }\n  for (let x = 0; x < arr1.length; x++) {\n    for (var i = 0; i < arr1[x]; i++) {\n      ctx.fillRect(x * 2, (canvasEl.height - arr1[x]), 1, arr1[x]);\n    }\n  }\n\n\n  }\n\n  // ctx.fillStyle = '#ccddff';\n  // ctx.beginPath();\n  // ctx.moveTo(50, 20);\n  // ctx.lineTo(200, 50);\n  // ctx.lineTo(10, 73);\n  // ctx.closePath();\n  // ctx.fill();\n  // ctx.strokeStyle = 'rgb(0,128,0)';\n  // ctx.lineWidth = 5;\n  // ctx.stroke();\n\n\nrenderFrame = () => {\n  if (playState === false) {\n    cancelAnimationFrame(animationFrame);\n  } else {\n    animationFrame = requestAnimationFrame(renderFrame);\n    audio.analyser.getByteFrequencyData(frequencyData);\n  // let dataOutput = [];\n  // for (let i = 0; i < frequencyData.length; i++) {\n  //   if ((frequencyData[i] > 0) && (i % 40 === 0)) {\n  //     dataOutput.push(frequencyData[i]);\n  //     redraw(frequencyData[i]);\n  //   }\n  // }\n\n    redraw(frequencyData);\n  }\n}\n\nlet canvasEl;\nlet ctx;\nconst audio = new AudioOutput;\nconst frequencyData = new Uint8Array(audio.analyser.frequencyBinCount);\nlet animationFrame;\nlet playState = false;\nlet colorSlider = 0;\n\nlet charX = 0;\nlet charY = 0;\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const playButton = document.querySelector('button');\n  playButton.addEventListener('click', () => {\n    playState = audio.togglePlay(playState);\n    renderFrame();\n  });\n  canvasEl = document.getElementById(\"mycanvas\");\n  canvasEl.width = 1000;\n  canvasEl.height = 400;\n  ctx = canvasEl.getContext(\"2d\");\n\n  let volumeControl = document.querySelector('#volume');\n\n  volumeControl.addEventListener('input', function () {\n    colorSlider = parseFloat(this.value * 100);\n    ctx.fillStyle = `rgb(${colorSlider}, 0, 0)`;\n  }, false);\n\n  // ctx.fillStyle = \"red\";\n  //x, y, width, height\n  // ctx.fillRect(20, 41, 40, 50);\n  // redraw();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });