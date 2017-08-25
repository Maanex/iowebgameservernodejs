var imgPlayer=document.createElement('imgPlayer');
imgPlayer.src='./imgPlayer.png';

function render(){
    c.fillStyle = "#628440";
    c.fillRect(0, 0, gameframe.width, gameframe.height);

    Object.keys(players).forEach(p => {
        var player = players[p];
        c.fillStyle = "#f00";
        // c.fillRect(player.x - 20, player.y - 20, 40, 40);
        c.drawImage(imgPlayer, player.x - 20, player.y - 20, 40, 40);
    });
}