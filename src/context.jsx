import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  const getFavoritesFromLocalStorage = () => {
    let favs = localStorage.getItem("favorites");
    if (favs) favs = JSON.parse(localStorage.getItem("favorites"));
    else favs = [];
    return favs;
  };

  //use useState when there's a variable that will change after the website is loaded
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favoriteMeals, setFavoriteMeals] = useState(
    getFavoritesFromLocalStorage
  );

  //fetching meals database from another website
  const fetchMeals = async (url) => {
    setLoading(true);

    try {
      const { data } = await axios(url);
      if (data.meals) setMeals(data.meals);
      else setMeals([]);
    } catch (error) {
      console.log(error.response);
    }

    setLoading(false);
  };

  const fetchRandomMeal = () => fetchMeals(randomMealUrl);

  //updates selectedMeal to the one we just clicked and displays the recipe screen
  const selectMeal = (idMeal, favorite) => {
    let meal;
    if (favorite) {
      meal = favoriteMeals.find((meal) => meal.idMeal === idMeal);
    } else {
      meal = meals.find((meal) => meal.idMeal === idMeal);
    }

    setSelectedMeal(meal);
    setShowModal(true);
  };

  const closeModal = () => {
    if (showModal == true) setShowModal(false);
  };

  const add2Favs = (fav) => {
    if (favoriteMeals.find((meal) => meal.idMeal === fav.idMeal)) return;
    let temp = [...favoriteMeals, fav];
    setFavoriteMeals(temp);
    localStorage.setItem("favorites", JSON.stringify(temp));
  };

  const removeFav = (mealId) => {
    let temp = favoriteMeals.filter((meal) => meal.idMeal !== mealId);
    setFavoriteMeals(temp);
    localStorage.setItem("favorites", JSON.stringify(temp));
  };

  //use use effect whenever we have to fetch something from online
  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, []);

  //use use effect whenever we have to fetch something from online
  useEffect(() => {
    if (!searchTerm) return;
    fetchMeals(`${allMealsUrl}${searchTerm}`);
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        meals,
        loading,
        setSearchTerm,
        fetchRandomMeal,
        showModal,
        selectMeal,
        selectedMeal,
        closeModal,
        favoriteMeals,
        add2Favs,
        removeFav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
