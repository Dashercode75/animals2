//https://teachablemachine.withgoogle.com/models/0uoANJ6Mx/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0uoANJ6Mx/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}