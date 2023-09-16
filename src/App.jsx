import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import { Modal } from "./components/Modal";
import Search from "./components/Search";
import "./App.css";
import { useGlobalContext } from "./context";

function App() {
  const { showModal, favoriteMeals } = useGlobalContext();

  return (
    <>
      <Search />
      {favoriteMeals.length > 0 && <Favorites />}
      <Meals />
      {showModal && <Modal />}
    </>
  );
}

export default App;
