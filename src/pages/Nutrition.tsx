import React, { useState } from "react";
import Food from "../components/Food";
import Meal from "../components/Meal";
import { BsGraphUp, BsPlusLg } from "react-icons/bs";
import "./Nutrition.css";

function Nutrition() {
  const [showFood, setShowFood] = useState<boolean>(false);

  const [mealTitle, setMealTitle] = useState<string>("");

  const [macros, setMacros] = useState<number[]>([2000, 160, 50, 120, 8]);
  const [totals, setTotals] = useState<number[]>([3000, 130, 100, 600, 24]);

  const [meals, setMeals] = useState<string[]>(["Lunch", "Dinner", "Snack"]);
  const [currentMeal, setCurrentMeal] = useState<string>("");

  function handleClick() {
    const mealName: string = mealTitle || "Meal Name";
    if (meals.includes(mealName)) {
      let i: number;
      for (i = 1; meals.includes(mealName + ` (${i})`); i++) {}
      setMeals([...meals, mealName + ` (${i})`]);
      setCurrentMeal(mealName + ` (${i})`);
    } else {
      setMeals([...meals, mealName]);
      setCurrentMeal(mealName);
    }
    setShowFood(true);
  }

  return (
    <main className="nutrition">
      <header className="nutrition__top">
        <BsGraphUp className="nutrition__nav" />
        <h2 className="nutrition__heading">Nutrition</h2>
        <BsPlusLg
          className="nutrition__nav"
          onClick={() => setShowFood(true)}
        />
      </header>
      <div className="nutrition__scroll">
        <div className="nutrition__macros">
          <h3 className="nutrition__subheading">Macros</h3>
          <div className="nutrition__circles">
            <div
              className="nutrition__circle"
              style={
                macros[0] < totals[0]
                  ? {
                      background: `conic-gradient(#4499ee ${
                        (macros[0] / totals[0]) * 100
                      }%, #444 0)`,
                    }
                  : {
                      background: `conic-gradient(#4477ff ${
                        (macros[0] / totals[0]) * 100 - 100
                      }%, #4499ee 0)`,
                    }
              }
            >
              <div className="nutrition__mask"></div>
              <h2 className="nutrition__grams">{macros[0]}cal</h2>
              <h5 className="nutrition__total">/ {totals[0]}cal</h5>
              <p className="nutrition__label">Calories</p>
            </div>
            <div
              className="nutrition__circle"
              style={
                macros[1] < totals[1]
                  ? {
                      background: `conic-gradient(orange ${
                        (macros[1] / totals[1]) * 100
                      }%, #444 0)`,
                    }
                  : {
                      background: `conic-gradient(darkorange ${
                        (macros[1] / totals[1]) * 100 - 100
                      }%, orange 0)`,
                    }
              }
            >
              <div className="nutrition__mask"></div>
              <h2 className="nutrition__grams">{macros[1]}g</h2>
              <h5 className="nutrition__total">/ {totals[1]}g</h5>
              <p className="nutrition__label">Protein</p>
            </div>
            <div
              className="nutrition__circle"
              style={
                macros[2] < totals[2]
                  ? {
                      background: `conic-gradient(blue ${
                        (macros[2] / totals[2]) * 100
                      }%, #444 0)`,
                    }
                  : {
                      background: `conic-gradient(darkblue ${
                        (macros[2] / totals[2]) * 100 - 100
                      }%, blue 0)`,
                    }
              }
            >
              <div className="nutrition__mask"></div>
              <h2 className="nutrition__grams">{macros[2]}g</h2>
              <h5 className="nutrition__total">/ {totals[2]}g</h5>
              <p className="nutrition__label">Fat</p>
            </div>
            <div
              className="nutrition__circle"
              style={
                macros[3] < totals[3]
                  ? {
                      background: `conic-gradient(purple ${
                        (macros[3] / totals[3]) * 100
                      }%, #444 0)`,
                    }
                  : {
                      background: `conic-gradient(indigo ${
                        (macros[3] / totals[3]) * 100 - 100
                      }%, purple 0)`,
                    }
              }
            >
              <div className="nutrition__mask"></div>
              <h2 className="nutrition__grams">{macros[3]}g</h2>
              <h5 className="nutrition__total">/ {totals[3]}g</h5>
              <p className="nutrition__label">Carbs</p>
            </div>
            <div
              className="nutrition__circle"
              style={
                macros[4] < totals[4]
                  ? {
                      background: `conic-gradient(lightblue ${
                        (macros[4] / totals[4]) * 100
                      }%, #444 0)`,
                    }
                  : {
                      background: `conic-gradient(blue ${
                        (macros[4] / totals[4]) * 100 - 100
                      }%, lightblue 0)`,
                    }
              }
            >
              <div className="nutrition__mask"></div>
              <h2 className="nutrition__grams">{macros[4]}oz</h2>
              <h5 className="nutrition__total">/ {totals[4]}oz</h5>
              <p className="nutrition__label">Water</p>
            </div>
          </div>
        </div>
        <div className="nutrition__meals">
          <h3 className="nutrition__subheading">Meals</h3>
          <div className="nutrition__add">
            <input
              type="text"
              value={mealTitle}
              placeholder="Meal Title..."
              className="nutrition__input"
              onChange={(event) => setMealTitle(event.target.value)}
            />
            <button className="nutrition__button" onClick={handleClick}>
              Add Meal
            </button>
          </div>
          {meals.map((meal: string, i: number) => (
            <Meal
              key={i}
              title={meal}
              setCurrentMeal={setCurrentMeal}
              setShowFood={setShowFood}
            />
          ))}
        </div>
      </div>
      {showFood && (
        <Food
          meals={meals}
          setMeals={setMeals}
          currentMeal={currentMeal}
          setCurrentMeal={setCurrentMeal}
          setShowFood={setShowFood}
        />
      )}
    </main>
  );
}

export default Nutrition;
