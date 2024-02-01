export const drinkData = [
  {
    name: "Coca-Cola",
    photoName: "./pics/coke.png",
  },
  {
    name: "Sprite",
    photoName: "./pics/sprite.png",
  },
  {
    name: "Coca-Cola ZERO",
    photoName: "./pics/coke-zero.png",
  },
  {
    name: "Royal",
    photoName: "./pics/royal.png",
    description: "Available in 2 Flavors:",
    flavors: ["Tru- Orange", "Tru- Grape"],
  },
  {
    name: "Bottled Water",
    photoName: "./pics/wilkins.png",
  },
];

function Drinks(props) {
  if (props.drinkObj.flavors && props.drinkObj.flavors.length > 0) {
    return (
      <div className="col">
        <img
          src={props.drinkObj.photoName}
          alt="Pizza"
          className="avatar mt-3"
        ></img>
        <div>
          <h3 className="product-name">{props.drinkObj.name}</h3>

          <div className="space mt-3">
            <span>{props.drinkObj.description}</span>
            {props.drinkObj.flavors.map((flavor) => {
              return <div>{flavor}</div>;
            })}
          </div>
        </div>
        <button className="more">MORE INFO</button>
      </div>
    );
  } else {
    return (
      <div className="col">
        <img
          src={props.drinkObj.photoName}
          alt="Pizza"
          className="avatar"
        ></img>
        <div>
          <h3 className="product-name">{props.drinkObj.name}</h3>
          <span>{props.drinkObj.description}</span>
          <div className="space"></div>
        </div>
        <button className="more">MORE INFO</button>
      </div>
    );
  }
}

export default Drinks;
