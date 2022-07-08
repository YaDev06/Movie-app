import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ title, image, calories, ingredients }) => {
  return (
    <div className={style.recipe} id="recipes">
      <h3>{title}</h3>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img className={style.image} src={image} alt="..." />
    </div>
  );
};

export default Recipe;
