const handleSearch = () => {
    const searchValue = document.getElementById('search-input').value;

    document.getElementById('search-input').value = '';

    searchMeals(searchValue);
}

const searchMeals = (meal) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    .then( res => res.json())
    .then(data => showMeals(data.meals))
}

const showMeals = (meals) => {
    const mealsContainer = document.getElementById('meals-container');

    

    meals.forEach((meal) => {
        
        meals.forEach((meal) => {
            const mealsDiv = document.createElement('div');

            mealsDiv.innerHTML = `
            <button class="btn" onClick="handleSingleMeal('${meal.idMeal}')">
            <img src="${meal.strMealThumb}"> </img>
            <h3>${meal.strMeal}</h3>
            </button>
            `
            mealsContainer.appendChild(mealsDiv);
        })
    })
    
}


const handleSingleMeal = (mealId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then( res => res.json())
    .then(data => showSingleMeal(data.meals[0]))
}
