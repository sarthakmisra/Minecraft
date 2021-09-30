var canvas = new fabric.Canvas("myCanvas");

block_w = 30;
block_h = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function playerupdate() {
    fabric.Image.fromURL("player.png",function(img) {
        player_object = img;

        player_object.scaleToWidth(150);

        player_object.scaleToHeight(140);

        player_object.set({
            top: player_y,
            left: player_x
        });
         canvas.add(player_object);
    });
}

var block_object = "";

function newimage(getimage) {
    fabric.Image.fromURL(getimage,function(img) {//
        block_object = img;

        block_object.scaleToWidth(block_w);

        block_object.scaleToHeight(block_h);

        block_object.set({
            top: player_y,
            left: player_x
        });
         canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80') { //checking if shift key y p key are pressed
        console.log("p and shift pressed together");
        block_w = block_w + 10;
        block_h = block_h + 10;
        document.getElementById("width").innerHTML = block_w;
        document.getElementById("height").innerHTML = block_h;
    }
    if(e.shiftKey && keyPressed == '77')
    {
        console.log("m and shift pressed together");
        block_w = block_w - 10;
        block_h = block_h - 10;
        document.getElementById("width").innerHTML = block_w;
        document.getElementById("height").innerHTML = block_h;
    }

    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }

    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }

    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
    if(keyPressed == '87')
    {
        newimage('wall.jpg');
        console.log("w");
    }
    if(keyPressed == '71')
    {
        newimage('ground.png');
        console.log("g");
    }
    if(keyPressed == '76')
    {
        newimage('light_green.png');
        console.log("l");
    }
    if(keyPressed == '84')
    {
        newimage('trunk.jpg');
        console.log("t");
    }
    if(keyPressed == '82')
    {
        newimage('roof.jpg');
        console.log("r");
    }
    if(keyPressed == '89')
    {
        newimage('yellow_wall.png');
        console.log("y");
    }
    if(keyPressed == '68')
    {
        newimage('dark_green.png');
        console.log("d");
    }
    if(keyPressed == '85')
    {
        newimage('unique.png');
        console.log("u");
    }
    if(keyPressed == '67')
    {
        newimage('cloud.jpg');
        console.log("c");
    }
}
function up() 
{
    if(player_y >= 0) 
    {
        player_y = player_y - block_h;
        console.log("block image height = " + block_h);
        console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y)
        canvas.remove(player_object);
        playerupdate();

    }

}
function down() {
    if(player_y <=500) 
    {
        player_y = player_y + block_h;
        console.log("block image height = " + block_h);
console.log("When Down key is pressed, X = " + player_x + " and y ="+player_y);
canvas.remove(player_object);
playerupdate();
    }

}
function left() {
    if(player_x >0) {
        player_x = player_x - block_w;
        console.log("block image width = " + block_w);
        console.log("When left arrow key is pressed, X =" + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        playerupdate();
    }
}
function right() {
    if(player_x <=850) {
        player_x = player_x + block_w;
        console.log("block image width = " + block_w);
        console.log("When Right arrow key is pressed, X =" + player_x + ", Y ="+player_y);
        canvas.remove(player_object);
        playerupdate();
    }
}
