

//Task 1

let caloriesBurnedPerH = 450;

let hoursRunPerDay = 1;

let samDecidedRunHour = hoursRunPerDay * 0.5;

let samTotalDayRun = 15;

let totalCalorieBurnedDay = caloriesBurnedPerH * samDecidedRunHour;

let totalCalBurned = samTotalDayRun * totalCalorieBurnedDay;

console.log(`Good work, Sam! After ${samDecidedRunHour} hour/s of running every day for a week, you may lose a total of ${totalCalBurned} calories. `);


//Task 2 

let samWantToSave = 10000;

let alreadySaved = 7500;

let x = samWantToSave - alreadySaved;

let y = x / samWantToSave * 100;

console.log(`Thank you for your discipline and hardwork, Sam! You are now ${y}% away from your goal of saving ${samWantToSave}`)