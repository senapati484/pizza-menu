import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>First React Pizza Co.</h1>;
}

function Menu() {
  return (
    <>
      <h2>our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHower = 12;
  const closeHower = 22;

  const isOpen = hour >= openHower && hour <= closeHower;

  // if (hour >= openHower && hour <= closeHower) alert("we are currently open");
  // else alert("sorry we are closed");

  return <footer>{new Date().toLocaleDateString()} were currently open</footer>;
  // return React.createElement("footer", null, "we're currently open!");
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/focaccia.jpg" />
      <h1>pizza</h1>
      <p>Bread with italian olive oil and rosemary</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
