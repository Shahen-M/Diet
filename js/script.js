
document.getElementById('calculate_btn').addEventListener('click', function() {
  bmiCalculate();
  checkBmiEmptyFields();
})

document.getElementById('close').addEventListener('click', function () {
  $('.calculator_popup').hide();
  $('.tdee_calculation_popup').hide();
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

document.getElementById('daily_calorie_btn').addEventListener('click', function() {
  calculateTdee();
  checkTdeeEmptyFeilds();
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

function checkBmiEmptyFields() {
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

  const dailyHeight = document.getElementById('daily_calorie_height').value = '';
  const dailyWeight = document.getElementById('daily_calorie_weight').value = '';
  const dailyAge = document.getElementById('daily_calorie_age').value = '';
  const activity = document.getElementById('activity_level').value = 1;
  let dailyMaleRadio = document.getElementById('daily_male_radio').checked = false;
  let dailyFemaleRadio = document.getElementById('daily_female_radio').checked = false;
}

function calculateTdee() {
  const height = document.getElementById('daily_calorie_height').value;
  const weight = document.getElementById('daily_calorie_weight').value;
  const age = document.getElementById('daily_calorie_age').value;
  const activity = document.getElementById('activity_level').value;
  const tdeePerDayValue = document.getElementById('tdee_day_value');
  const tdeePerWeekValue = document.getElementById('tdee_week_value');

  let maleRadio = document.getElementById('daily_male_radio');
  let femaleRadio = document.getElementById('daily_female_radio');


  let female_bmr = (height * 6.25) + (weight * 9.99) - (age * 4.92) - 161;
  let male_bmr = (height * 6.25) + (weight * 9.99) - (age * 4.92) + 5;

  if(femaleRadio.checked == true) {
    if(activity == 1) {
        var sedentary = female_bmr * 1.1;
      } else if (activity == 2) {
        var light = female_bmr * 1.275;
      } else if (activity == 3) {
        var moderate = female_bmr * 1.35;
      } else if (activity == 4) {
        var heavy = female_bmr * 1.525;
      }
  }

  if(maleRadio.checked == true) {
    if(activity == 1) {
        var sedentary = male_bmr * 1.2;

        tdeePerDayValue.innerHTML = Math.round(sedentary) + ' calories per day';
        tdeePerWeekValue.innerHTML = Math.round(sedentary) * 7 + ' calories per week';
      } else if (activity == 2) {
        var light = male_bmr * 1.375;

        tdeePerDayValue.innerHTML = Math.round(light) + ' calories per day';
        tdeePerWeekValue.innerHTML = Math.round(light) * 7 + ' calories per week';

      } else if (activity == 3) {
        var moderate = male_bmr * 1.55;

        tdeePerDayValue.innerHTML = Math.round(moderate) + ' calories per day';
        tdeePerWeekValue.innerHTML = Math.round(moderate) * 7 + ' calories per week';
      } else if (activity == 4) {
        var heavy = male_bmr * 1.725;

        tdeePerDayValue.innerHTML = Math.round(heavy) + ' calories per day';
        tdeePerWeekValue.innerHTML = Math.round(heavy) * 7 + ' calories per week';
      }
  }



}

function checkTdeeEmptyFeilds() {
  const height = document.getElementById('daily_calorie_height').value;
  const weight = document.getElementById('daily_calorie_weight').value;
  const age = document.getElementById('daily_calorie_age').value;

  let maleRadio = document.getElementById('daily_male_radio');
  let femaleRadio = document.getElementById('daily_female_radio');

  if(height.length < 1 || weight.length < 1 || age.length < 1) {
    alert('Please fill out missing fields');
  } else if (maleRadio.checked == true || femaleRadio.checked == true) {
    $('.tdee_calculation_popup').show();
    $('.overlay').show();
  } else {
    alert('Please fill out missing fields');
  }
}
























/* */
