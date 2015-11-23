# mathjax-node [![Build Status](https://travis-ci.org/mathjax/MathJax-node.svg?branch=develop)](https://travis-ci.org/mathjax/MathJax-node)

This repository contains files that provide APIs to call MathJax from 
node.js programs.  There is an API for converting individual math 
expressions (in any of MathJax's input formats) into SVG images or MathML 
code, and there is an API for converting HTML snippets containing any of 
MathJax input formats into HTML snippets containing SVG or MathML.

See the comments in the individual files for more details.

The `bin` directory contains a collection of command-line programs for 
converting among MathJax's various formats.  These can be used as examples 
of calling the MathJax API.

Use

    npm install mathjax-node

to install mathjax-node and its dependencies.


# Getting started

mathjax-node provides one library, `lib/mj-single.js`. Below are two  very minimal examples -- be sure to check out the examples in `./bin/` for more advanced configurations.

* `lib/mj-single.js` is optimized for processing single equations.


```javascript
// a simple TeX-input example
var mjAPI = require("./lib/mj-single.js");
mjAPI.config({
  MathJax: {
    // traditional MathJax configuration
  }
});
mjAPI.start();

var yourMath = 'E = mc^2';

mjAPI.typeset({
  math: yourMath,
  format: "TeX", // "inline-TeX", "MathML"
  mml:true, //  svg:true,
}, function (data) {
  if (!data.errors) {console.log(data.mml)}
});
```
