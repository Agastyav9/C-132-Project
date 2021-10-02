status6 ="";

function nextslide6()
{
    window.location = "index.html";
}

function preload()
{
   img5 = loadImage('20210926_123203 (1).jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modeloaded);
    document.getElementById("up6").innerHTML = "Status : Detecting Objects";
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
    status6 = true;
    objectDetector.detect(img, gotResult);
}