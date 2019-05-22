
document.getElementById('calculate_btn').addEventListener('click', function() {
  $('.calculator_popup').show();

  bmiCalculate();
})

function bmiCalculate() {
  const height_ft = document.getElementById('height_in_ft').value;
  const height_in = document.getElementById('height_in_inches').value;
  const weight = document.getElementById('weight').value;
  let bmi_num = document.getElementById('bmi_number');

  let weight_cal = weight * 703
  let height_cal = height_ft * 12 + parseInt(height_in);
  let height_final = height_cal * height_cal;

  let result = weight_cal / height_final;

  bmi_num.innerHTML = 'Your BMI is ' + result;
}
