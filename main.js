song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Initializing database');
}

function draw() {
    Image(video, 0, 0, 600, 500);
}

function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
    leftWristX = results[0].pose.x;
    leftWristY = results[0].pose.y;
    console.log("leftWristX = " + leftWristX + "leftWristY" + leftWristY);

    rightWristX = results[0].pose.x;
    rightWristY = results[0].pose.y;
    console.log("rightWristX = " + rightWristX + "rightWristY" + rightWristY);
}    
}