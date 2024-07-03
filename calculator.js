function appendToResult(value) {
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculate() {
    var input = document.getElementById('result').value;
    
    // Check if the input ends with the percentage symbol
    if (input.endsWith('%')) {
      var number = parseFloat(input.slice(0, -1));
      var result = number / 100;
      document.getElementById('result').value = result;
    } else {
      var result = eval(input);
      document.getElementById('result').value = result;
    }
  }
  