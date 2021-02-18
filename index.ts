type Meal ={
    //id : String
    calorie: number
}

function reciepieList(numberOfMeals: Number){
    let listOfMeals: [Meal]
    for (let i = 0; i < numberOfMeals; i++) {
        const minCalorie: number= 215
        const maxcalorie: number = 350
        const mealCalorie: number = Math.random() * (minCalorie - maxcalorie) + minCalorie

        //const mealId = "meal"+String(i)
        let meal: Meal = {
            calorie: mealCalorie
        }
        listOfMeals.push(meal)
    }
    return listOfMeals
}
function isLimitReached(totalCalorie: number, caloriesToAdd: number, calorielimit: number): boolean{
    let acutalTotal = totalCalorie+ caloriesToAdd
    if ((totalCalorie + caloriesToAdd) == calorielimit) {
        return true
    }
    if (acutalTotal - calorielimit <= 150 && acutalTotal - calorielimit >= -150) {
        return true
    }
    else{
        return false
    }
}

function MakePlan(availableRecipies: Meal[], totalCalories: number): [Meal]{
    //Go through all items in the list
    for (let i = 0; i < availableRecipies.length; i++) {
        //make new list without the selected item
        let currentMeal = availableRecipies[i]
        let currentCalorie = availableRecipies[i].calorie

        if (isLimitReached(totalCalories, currentCalorie+totalCalories, 1700)) {
            return [currentMeal]
        }
        else if(!isLimitReached(totalCalories, currentCalorie+totalCalories, 1700)) {
            //Try Mutation
            let newList: Meal[] = availableRecipies.splice(i, 1)
            let meal: [Meal] = MakePlan(newList, currentCalorie+totalCalories)
            //If mutations runs without returning from above
            let list = availableRecipies
            meal = MakePlan(list, currentCalorie+totalCalories)
            
            return meal
        }
    }
}

let testPlanner = MakePlan(reciepieList(100), 1700)

console.log(testPlanner)