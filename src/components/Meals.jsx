import { useGlobalContext } from "../context";
import MealCard from "./MealCard";

const Meals = () => {
  const { meals, loading } = useGlobalContext();
  if (loading) {
    return (
      <section className="meals-sect">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (meals.length < 1) {
    return (
      <section className="meals-sect">
        <h3>No meals, sorry</h3>
      </section>
    );
  }
  return (
    <section className="meals-sect">
      {meals.map((item) => (
        <div className="col" key={item.idMeal}>
          <MealCard mealInfo={item}></MealCard>
        </div>
      ))}
    </section>
  );
  //console.log(meals);
  //return <h1>MEALS! MEALS! MEALS!</h1>;
};

export default Meals;
