import React from "react";
import { useGlobalContext } from "../context";

const Favorites = () => {
  const { favoriteMeals, removeFav, selectMeal } = useGlobalContext();
  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5> Favorites </h5>
        <div className="favs-container">
          {favoriteMeals.map((meal) => (
            <div className="single-fav">
              <img
                onClick={() => selectMeal(meal.idMeal, true)}
                src={meal.strMealThumb}
                className="fav-img img"
              />
              <a onClick={() => removeFav(meal.idMeal)}>remove</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
