status5 ="";
function nextslide5()
{
    window.location = "index6.html";
}

function preload()
{
   img5 = loadImage('IMG-20210926-WA0002.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modeloaded);
    document.getElementById("up5").innerHTML = "Status : Detecting Objects";
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
    status5 = true;
    objectDetector.detect(img, gotResult);
}