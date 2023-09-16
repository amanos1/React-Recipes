import React from "react";
import { useGlobalContext } from "../context";

export const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext();

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img
          className="img"
          src={selectedMeal.strMealThumb}
          alt={selectedMeal.strMeal}
        />
        <div className="modal-content">
          <h3>{selectedMeal.strMeal}</h3>
          <p>Cooking Instructions</p>
          <p>{selectedMeal.strInstructions}</p>
          <a href={selectedMeal.strSource} target="_blank">
            Original Source
          </a>
          <button className="btn btn-hipster close-btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </aside>
  );
};
