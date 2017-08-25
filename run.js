var players = {};
var gameframe;
var c;

/*
 *
 */

window.addEventListener("resize", function() {
    gameframe.width = gameframe.offsetWidth;
    gameframe.height = gameframe.offsetHeight;
});

setInterval(function(){
    render();
}, 1000 / 30);

/*
 *
 */

function addPlayer(id, name, x, y){
    players[id] = {
        id: id,
        name: name,
        x: x,
        y: y
    }
}

/*
 *
 */

function ready(){
    gameframe = document.getElementById("gameframe");
    c = gameframe.getContext("2d");

    gameframe.width = gameframe.offsetWidth;
    gameframe.height = gameframe.offsetHeight;
}