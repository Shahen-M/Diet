
document.getElementById('calculate_btn').addEventListener('click', function() {
  bmiCalculate();
  checkEmptyFields();
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

function checkEmptyFields() {
  const height_ft = document.getElementById('height_in_ft').value;
  const height_in = document.getElementById('height_in_inches').value;
  const weight = document.getElementById('weight').value;

  let maleRadio = document.getElementById('male_radio');
  let femaleRadio = document.getElementById('female_radio');

  if(height_ft.length < 1 && weight.length < 1) {
    alert('Please fill out missing fields');
  } else if (maleRadio.checked == true || femaleRadio.checked == true) {
    $('.calculator_popup').show();
  } else {
    alert('Please fill out missing fields');
  }
}



































/* */
