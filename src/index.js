import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>
        {/* <h1 style={{ margin: "auto", textAlign: "center", color: "red" }}> */}
        Fast React Pizza Co.
      </h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = []; // truthy val
  // console.log(pizzas);
  //
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {pizzas.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative idshes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <h1>We're still Working on our menu. Please come back later</h1>
      )}
      {/* {pizzas.length > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}
      {/* <ul className="pizzas">
        {pizzaData.map((pizza) => (
          // <Pizza
          //   key={pizza.name}
          //   name={pizza.name}
          //   photoName={pizza.photoName}
          //   ingredient={pizza.ingredients}
          //   price={pizza.price}
          // />
        ))}
      </ul> */}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`${pizzaObj.soldOut && "sold-out"} pizza`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <h1>{pizzaObj.name}</h1>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
    </li>
  );
}

// function Footer() {
//   const hour = new Date().toLocaleTimeString();
//   const openHour = 12;
//   const claoseHour = 22;
//   let state;
//   if (hour >= openHour && hour <= claoseHour) {
//     //alert("We're currently open")
//     state = "open";
//   } else {
//     //alert("Sorry We're close");
//     state = "close";
//   }
//   console.log(hour);
//   return (
//     <footer>
//       {hour}We're currently {state}
//     </footer>
//   );

//   //   return React.createElement("footer", null, "We`re currently open");
// }

function Footer() {
  const time = new Date().toLocaleTimeString();
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  let isOpen = hour > openHour && hour < closeHour;
  // {
  // }
  return (
    <footer className="footer">
      {isOpen ? (
        <Order /* state={isOpen} openHour={openHour} */ closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you berween {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ state, openHour, closeHour }) {
  return (
    <div className="order">
      <p>We're Open untill {closeHour}:00. come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
