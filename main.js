function preload(){
    music=loadSound('music.mp3');
}

function play1(){
music.play();
music.setVolume(1);
music.rate(1.5);
}

function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video,ml);
    poseNet.on('pose',gr);
}

function ml(){
    console.log("Model is Loaded");
}

function gr(results){
    if(results>0){
        rwx=results[0].pose.rightWrist.x;
        lwx=results[0].pose.leftWrist.x;
        console.log(results);
    }
}

function draw(){
image(video,0,0,600,500);
}
