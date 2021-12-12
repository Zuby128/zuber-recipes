import React, { useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import { MainContainer, HomeImg, ImgDiv } from "./style";
import Header from "../header/Header";
import homeSvg from "../../assets/home.svg";

const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;


const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

const Main = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
      if (!result.data.more) {
        alert(`No food with such ${query}`);
      }
      console.log(result.data.hits);
      setRecipes(result.data.hits);
      setQuery("");
    } else {
      console.log("Please fill the form");
    }
  };

  return (
    <div>
      <Header
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
      {recipes ? (
        <MainContainer>
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Main;
