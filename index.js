function reciepieList(numberOfMeals) {
    var listOfMeals = [];
    for (var i = 0; i < numberOfMeals; i++) {
        var minCalorie = 215;
        var maxcalorie = 350;
        var mealCalorie = Math.random() * (minCalorie - maxcalorie) + minCalorie;
        var mealCalorie = Math.floor(mealCalorie)
        //const mealId = "meal"+String(i)
        listOfMeals.push(mealCalorie);
    }
    return listOfMeals;
}
var MealList = []
function mealListCalorieTotal(){
    let total = 0
    if (MealList.length == null) {
        return 0
    }
    for (let i = 0; i < MealList.length; i++) {
        total += MealList[i]
    }
    return total
}
function MealListUnderLimit(){
    let total = 0
    if (MealList.length == null) {
        return true
    }
    for (let i = 0; i < MealList.length; i++) {
        total = MealList[i] + total
    }
    if (total <= 100) {
        return true
    }
    else{
        return false
    }
}
function MakePlan(availableRecipies, calorieTotal= 0) {
    //Go through all items in the list
    if (MealListUnderLimit()) {
        for (let i = 0; i < availableRecipies.length; i++) {     
            MealList.push(availableRecipies[i])
            availableRecipiesCopy = availableRecipies
            availableRecipies.splice(i,1)
            MakePlan(availableRecipies, mealListCalorieTotal)
            MealList.pop
            MakePlan(availableRecipiesCopy, mealListCalorieTotal)
        }
        return 
    }
}

function mealPlanner(availableRecipies, calorieTotal = 0){
    let max = 0
    for (let i = 0; i < availableRecipies.length; i++) {
        if (availableRecipies[i] > max) {
            max += availableRecipies[i]
        }
        let recipieCopy = availableRecipies
        recipieCopy.splice(i, 1)
        console.log()
        //let slicedList = availableRecipies.splice(i, 1)
        if (availableRecipies[i] + calorieTotal > 1700) {
            //pass
        }
        else if (mealPlanner(recipieCopy, calorieTotal+availableRecipies[i])>max) {
            return reciepie
        }
    }
}

let x = [500, 400, 300]
//var testPlanner = MakePlan(x, 0);
var test = mealPlanner(x, 0)
console.log(mealListCalorieTotal())

