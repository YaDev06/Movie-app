import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Recipe from "./components/Recipe";
import getUrl from "./config";
import "./style/style.css";
const App = () => {
  // Needs

  const App_Id = "bd0b31f1";
  const App_Key = "122fa5701e9019569134a2c8c034db95";

  // States 

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("cocktail");
  // Others functions

  useEffect(() => {
    getRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      getUrl(query, App_Id, App_Key)
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
            placeholder='Searching  .  .  .'
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <div className="recipes">
          { recipes.length ? recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.calories}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              calories={recipe.recipe.calories}
              ingredients={recipe.recipe.ingredients}
            />
          )): <Loader />}
        </div>
      </div>
    </>
  );
};

export default App;
