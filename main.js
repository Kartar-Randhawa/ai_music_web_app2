song1="";
song2="";
function preload(){
    song1=loadSound("ganni.mp3")
    song2=loadSound("samaan.mp3")
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
     video=createCapture(VIDEO);
     video.hide();
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song1.play();
    song2.play();
}