song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
s_1 = "";
s_2 = ""
score_left = 0;
score_right = 0
function preload() {
    song1 = loadSound("bella-ciao.mp3");
    song2 = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw() {
    image(video, 0, 0, 500, 500);
    s_1 = song1.isPlaying()
    if(score_left>0.2){
        fill('red');
        circle(leftWristX,leftWristY,20);
        song2.stop();
        if(s_1 == "false"){
            song1.play()
            document.getElementById("abc").innerHTML = "Bella-ciao";
        }
    }
}
s_2 = song2.isPlaying()
    if(score_right>0.2){
        fill('red');
        circle(rightWristX,rightWristYWristY,20);
        song1.stop();
        if(s_2 == "false"){
            song2.play()
            document.getElementById("abc").innerHTML = "Harry Potter song";
        }
    }
}


function modelLoaded() {
    console.log("Model loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        leftWristX = results[0].leftWrist.x;
        leftWristY = results[0].leftWrist.y;
        rightWristX = results[0].rightWrist.x;
        rightWristY = results[0].rightWrist.y;
        score_left = results[0].pose.keypoints[9].score;
        score_right = results[0].pose.keypoints[10].score;
    }
}
