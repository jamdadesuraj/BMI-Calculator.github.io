function getBmiValue(){
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    height = height * 12;
    height = height * 0.025;

    var newbmi  =  weight / (height * height);


    newbmi = Math.round(newbmi)


    document.getElementById('bmivalue').value = newbmi;
}