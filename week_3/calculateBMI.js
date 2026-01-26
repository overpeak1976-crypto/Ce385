function calculateBMI (weigh, height) {
    const BMI = weigh/(height*height)
    let category = "";
    const toFixed = BMI.toFixed(2)
    if (BMI < 18.5)
        category = 'ผอม';
    else if (BMI >= 18.5 && BMI < 25)
        category = 'ปกติ';
    else if (BMI >= 25 && BMI < 30)
        category = 'อ้วน';
    else 
        category = 'อ้วนมาก';

    return{
        bmi:toFixed , category: category
    }
};
console.log(calculateBMI(70, 1.75))
console.log(calculateBMI(50, 1.60))
console.log(calculateBMI(90, 1.70))