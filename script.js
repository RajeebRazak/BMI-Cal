function calculate() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if ( weight == "" || height == "")
    {
       alert("please enter both weight and height")
       return;
    }
    if (isNaN(weight) || isNaN(height))
    {
      alert("please enter a valid number")
      return;
    }
    
    weight = parseFloat(weight);
    height = parseFloat(height) / 100;

    var bmi = weight  / (height  * height )

    // Display result
    const result = document.getElementById('result');
    result.innerHTML = "Your BMI is" + bmi.toFixed(2);

    const category = document.getElementById('category')
    if ( bmi < 18.5) {
        category.innerHTML = "You are UnderWeight";
    } else if (bmi >= 18.5 && bmi < 25 ) {
        category.innerHTML = "You have a normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        category.innerHTML = "Your  are a OverWeight"
    } else {
        category.innerHTML = "Your Obese"
    }

}