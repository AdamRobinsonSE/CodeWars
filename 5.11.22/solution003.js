// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(bmi(80, 1.80), "Normal");
//     });
//   });
  
function bmi(weight, height) {
    let patientBMI = weight / (height * height)
    if (patientBMI <= 18.5){
      return 'Underweight'
    }else if (patientBMI <= 25){
      return 'Normal'
    }else if (patientBMI <= 30){
      return 'Overweight'
    }else if (patientBMI > 30){
      return 'Obese'
    }
  }