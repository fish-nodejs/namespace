"use strict";
$.sayHi();
var $;
(function ($) {
    function sayHi() {
        console.log('hi');
    }
    $.sayHi = sayHi;
})($ || ($ = {}));
var a = 2;
var $;
(function ($) {
    function sayHello() {
        console.log('hello');
    }
    $.sayHello = sayHello;
})($ || ($ = {}));
// let a = 3 // reflict with jQ.ts
