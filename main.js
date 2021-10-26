song="";

function preload() {
    song = loadsound("music.mp3");
}

scoreRigthWrist = 0;
scoreLeftWrist = 0;

RightWristX = 0;
RightWristY = 0;

LeftWristX = 0;
LeftWristY = 0;

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    PoseNet = ml5.PoseNet(video, modelLoaded);
    PoseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        ScoreRightWrist = results[0].pose.keypoints[10].score;
        ScoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("ScoreRigthWrist = " + ScoreRightWrist + "ScoreLeftWrist = " + ScoreLeftWrist);

        RightWristX = results[0].pose.RightWrist.x;
        RightWristY = results[0].pose.RightWrist.y;
        console.log("RightWristX = " + RightWristX + "RightWristY = " +RightWristY);

        LeftWristX = results[0].pose.leftWrist.x;
        LeftWristY = results[0].pose.leftWrist.y;
        console.log("LeftWristX = " + leftWristX + "LeftWristY" + leftWristY);
    }
    }