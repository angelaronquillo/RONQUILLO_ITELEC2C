import Drinks from "./Drinks";
import { drinkData } from "./Drinks";

function Menu() {
  return (
    <div className="menu mb-5">
      <div className="container">
        <h1 className="title">DRINKS</h1>
        <div className="row row-cols-4">
          {drinkData.map((drink) => (
            <Drinks drinkObj={drink} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
