status3 ="";

function nextslide3()
{
    window.location = "index4.html";
}

function preload()
{
   img3 = loadImage('20210926_115754.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modeloaded);
    document.getElementById("up3").innerHTML = "Status : Detecting Objects";
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
    status3 = true;
    objectDetector.detect(img, gotResult);
}