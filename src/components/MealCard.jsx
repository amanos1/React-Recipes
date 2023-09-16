import React from "react";
import { GoHeart } from "react-icons/go";
import { useGlobalContext } from "../context";

const MealCard = ({ mealInfo }) => {
  const { selectMeal, add2Favs } = useGlobalContext();

  return (
    <article className="meal-card">
      <img
        src={mealInfo.strMealThumb}
        className="img"
        onClick={() => selectMeal(mealInfo.idMeal, false)}
      ></img>
      <footer>
        <h5>{mealInfo.strMeal}</h5>
        <button className="like-btn" onClick={() => add2Favs(mealInfo)}>
          <GoHeart />
        </button>
      </footer>
    </article>
  );
};

export default MealCard;
