status4 ="";

function nextslide4()
{
    window.location = "index5.html";
}

function preload()
{
   img4 = loadImage('20210926_114835.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modeloaded);
    document.getElementById("up4").innerHTML = "Status : Detecting Objects";
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
    status4 = true;
    objectDetector.detect(img, gotResult);
}