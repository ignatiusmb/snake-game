var sb = document.getElementById("score");
var scoreboard = sb.getContext("2d");
var pg = document.getElementById("play");
var playground = pg.getContext("2d");
// var playground = document.getElementById("play").getContext("2d");
// var scoreboard = document.getElementById("score").getContext("2d");
var score = 0;
var w = 640;
var h = 480;
var food;
var snake;
var snakeSize = 20;