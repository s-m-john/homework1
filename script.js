function calculateSum() {
    // Get the input values
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
  
    // Check if the input values are valid numbers
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      alert('Please enter valid numeric values.');
      return;
    }
  
    // Calculate the sum
    const sum = firstNumber + secondNumber;
  
    // Display the result
    document.getElementById('sumResult').textContent = sum;
  }
  