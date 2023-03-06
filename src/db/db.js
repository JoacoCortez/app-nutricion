const calPerProt = 4
const calPerCarb = 4
const calPerFat = 9

//Meals properties are calculated per gram ( 1gr of potato has these nutrients )
const potato = {
    meal: "papa",
    nutrients: {
        protein: 0.01,
        carbs: 0.24,
        fats: 0.02
    }
}

const egg = {
    meal: "huevo",
    nutrients: {
        protein: 0.12,
        carbs: 0.006,
        fats: 0.09
    }
}

const chicken = {
    meal: "pollo",
    nutrients: {
        protein: 0.23,
        carbs: 0,
        fats: 0.01
    }
}

const rice = {
    meal: "arroz",
    nutrients: {
        protein: 0.06,
        carbs: 0.76,
        fats: 0.008
    }
}

const milk = {
    meal: "leche",
    nutrients: {
        protein: 0.03,
        carbs: 0.04,
        fats: 0.03
    }
}

const noodles = {
    meal: "fideos",
    nutrients: {
        protein: 0.04,
        carbs: 0.25,
        fats: 0.02
    }
}

const beef = {
    meal: "churrasco",
    nutrients: {
        protein: 0.26,
        carbs: 0,
        fats: 0.2
    }
}


//-------------------------------- Calculate calories per gram

// function calculateCalories(){
    
//     const result = la comida en cuestion * los gramos introducidos 

//     return result

// }
