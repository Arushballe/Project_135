status = "";

function setup()
{
    canvas = createCanvas(380, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 480);
    video.hide();
}

function start()
{
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    object_name = document.getElementById("object_name").value;
    console.log(object_name);
}