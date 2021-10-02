status2 ="";

function nextslide2()
{
    window.location = "index3.html";
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modeloaded);
    document.getElementById("up2").innerHTML = "Status : Detecting Objects";
}

function preload()
{
   img2 = loadImage('20210926_114611.jpg');
}

function gotResult(error, results)
{
    if (error)
    {
        console.error(error);
    }
    console.log(results);
}

function modeloaded()
{
    console.log("Model Loaded!")
    status2 = true;
    objectDetector.detect(img, gotResult);
}