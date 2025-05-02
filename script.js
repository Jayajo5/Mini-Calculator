let calculation = '';
 
  let btn = document.querySelector('btn');
  let display = document.getElementById('display');
  display.value = calculation;

  function clearDisplay() {
    calculation = '';
    display.value = (`0 ${calculation}`);
  }

  function deleteDisplay() {
    calculation = calculation.slice(0, -1); //slice will remove the last character of the string
    display.value = calculation;
  }

  function updateValue(value) {
    calculation += value; 
    display.value = calculation;
  }

  function calculate() {
    if (calculation.trim() === '') {
      calculation = '0';
    } else {
      calculation = math.evaluate(calculation); //evaluates eval() a string as code, it is risk so, i used here a math.evaluate.
      display.value = calculation;
    }
  }