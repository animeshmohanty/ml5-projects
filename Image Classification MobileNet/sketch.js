let mobilenet;

let puffin;

function modelReady() {
    console.log('Model is ready !!!!')
    mobilenet.predict(puffin, gotResults);
}
 //callback function gotResults and ml5 works with error-first callbacks,
 // when you write the callback, you always must include error as first argument, the library is forcing you to check
function gotResults(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        let label = results[0].label;
        let prob = results[0].confidence;
        
        fill(0);
        textSize(64);
        text(label, 10 , height-100);
        createP("It looks like a " + label);
        createP("The Probability is" + prob);
        createP("The confidence is " + prob*100 + "%")
    }
}

function imageReady() {
    image(puffin, 0, 0, width, height);    
}

function setup () {
    createCanvas(640, 480);
    background(0);
    puffin = createImg('images/puffin.jpg', imageReady);
    puffin.hide();
    background(0);
    mobilenet = ml5.imageClassifier('MobileNet', modelReady); 
    //basically telling ml5 that I wanna make an image classifier , 
    //the first argument is a string with the name of the model
    //ml5 library supports callbacks
}