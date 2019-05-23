
document.getElementById('calculate_btn').addEventListener('click', function() {
  bmiCalculate();
  checkEmptyFields();
})

document.getElementById('close').addEventListener('click', function () {
  $('.calculator_popup').hide();
  $('.overlay').hide();

  clearFields();
})

document.getElementById('tdee_popup').addEventListener('click', function() {
  $('.daily_calorie_calculator').show();
  $('.calculator_content').hide();
})

document.getElementById('bmi_popup').addEventListener('click', function() {
  $('.daily_calorie_calculator').hide();
  $('.calculator_content').show();
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

  bmi_num.innerHTML = 'Your BMI is ' + Math.round(result);
}

function checkEmptyFields() {
  const height_ft = document.getElementById('height_in_ft').value;
  const height_in = document.getElementById('height_in_inches').value;
  const weight = document.getElementById('weight').value;

  let maleRadio = document.getElementById('male_radio');
  let femaleRadio = document.getElementById('female_radio');

  if(height_ft.length < 1 || weight.length < 1 || height_in.length < 1) {
    alert('Please fill out missing fields');
  } else if (maleRadio.checked == true || femaleRadio.checked == true) {
    $('.calculator_popup').show();
    $('.overlay').show();
  } else {
    alert('Please fill out missing fields');
  }
}

function clearFields() {
  const height_ft = document.getElementById('height_in_ft').value = '';
  const height_in = document.getElementById('height_in_inches').value = '';
  const weight = document.getElementById('weight').value = '';
  let maleRadio = document.getElementById('male_radio').checked = false;
  let femaleRadio = document.getElementById('female_radio').checked = false;


}



































/* */
