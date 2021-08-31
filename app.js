const handleSearch = () => {
    const searchValue = document.getElementById('search-input').value;

    document.getElementById('search-input').value = '';

    searchMeals(searchValue);
}

const searchMeals = (meal) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    .then( res => res.json())
    .then(data => showMeals(data.meals))
    .catch(error =>handleError()) //handle api error
}

const showMeals = (meals) => {
    document.getElementById('error-message').innerText ='';

    const mealsContainer = document.getElementById('meals-container');

    mealsContainer.innerText = ''; //empty previous search result

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

const showSingleMeal = (meal) => {
    document.getElementById('meals-container').style.display = 'none';
    
    const singleMeal = document.getElementById('single-meal-container');

    console.log(meal);

    singleMeal.innerHTML = `
    <img class="single-image" src="${meal.strMealThumb}"> <img>
    <h1>${meal.strMeal}</h1>
    <h3>Ingredients</h3>
        <p>
        &bull; ${meal.strIngredient1} ${meal.strMeasure1}
        </p>
        <p>
        &bull; ${meal.strIngredient2} ${meal.strMeasure2}
        </p>
        <p>
        &bull; ${meal.strIngredient3} ${meal.strMeasure3}
        </p>
        <p>
        &bull; ${meal.strIngredient4} ${meal.strMeasure4}
        </p>
        <p>
        &bull; ${meal.strIngredient5} ${meal.strMeasure5}
        </p>
    `
}

const handleError = () => {
    document.getElementById('error-message').innerText = "Try another meal"
}