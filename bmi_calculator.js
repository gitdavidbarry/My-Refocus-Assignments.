

var height = 60;
var weight = 5.5;
var BMI =  height / weight * 2;

function x(BMI){
    
    if(BMI < 18.5){
        console.log(`Your BMI falls within the underweight range ${BMI}`);    
    }else if((BMI > 18.5) && (BMI < 24.9)){
        console.log(`Your BMI falls within the normal or healthy weight range ${BMI}`);
    }else if((BMI > 25) && (BMI < 29.9 )){0
        console.log(`Your BMI falls within the overweight range ${BMI}`);
    }else{
        console.log(`Your BMI falls within the obese range ${BMI}`);
    }
};

x(BMI);

