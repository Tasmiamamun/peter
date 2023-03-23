nose_x=0
nose_y=0
right_wrist_x=0
left_wrist_x=0
difference=0



function setup(){
    canvas=createCanvas(500,400)
    canvas.center()
    video=createCapture(VIDEO)
    poseNet=ml5.poseNet(video,model_loaded)
    poseNet.on('pose',got_poses)
}

function model_loaded(){
    console.log("Modal is loaded")
}

function got_poses(results){
    console.log(results)
    nose_x=results[0].pose.nose.x
    nose_y=results[0].pose.nose.y
    right_wrist_x=results[0].pose.rightWrist.x
    left_wrist_x=results[0].pose.leftWrist.x
    difference=floor(left_wrist_x-right_wrist_x)
}






function draw(){
    background("purple")
    textSize(difference)
    text("Peter",nose_x,nose_y)
}