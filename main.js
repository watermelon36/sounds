function startClassifacation(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/W2NbiOG-A/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(){
    console.log(gotResults);
}