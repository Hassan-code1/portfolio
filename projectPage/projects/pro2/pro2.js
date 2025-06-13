function calculateBMI(weight, height) {
    if (height <= 0 || weight <= 0) {
        throw new Error("Height and weight must be positive numbers.");
    }
    let bmi = (weight*10000) / (height * height);
    document.getElementById("bmiResult").textContent = `Your BMI is ${bmi.toFixed(2)}`;
    if (bmi < 18.5) {
        document.getElementById("bmiCategory").textContent = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        document.getElementById("bmiCategory").textContent = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        document.getElementById("bmiCategory").textContent = "Overweight";
    } else {
        document.getElementById("bmiCategory").textContent = "Obesity";
    }
}
document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    try {
        calculateBMI(weight, height);
    } catch (error) {
        document.getElementById("bmiResult").textContent = error.message;
        document.getElementById("bmiCategory").textContent = "";
    }
});
