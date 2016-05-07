var tape = require('tape');
var mjAPI = require("..//lib/mj-single.js");

tape('basic test: check MathJax core', function(t) {
    t.plan(2);

    var tex = '\\textstyle{}'; // Other possible test candidates \\bull, \\vline
    mjAPI.start();

    mjAPI.typeset({
        math: tex,
        format: "inline-TeX",
        mml: true,
        svg: true,
        mathoidStyle: true
    }, function(data) {
        console.log(JSON.stringify(data,null,2));
        t.equal(data.svg.indexOf('margin-'),-1,'There should be no margins');
        t.ok(data.mathoidStyle.indexOf('width')>0,'Mathoid style must include width info');
    });
});