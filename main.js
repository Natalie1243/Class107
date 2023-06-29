function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = m15.soundClassifier('https://teachablemachine.withgoogle.com/models/J4t_v_CVX/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}