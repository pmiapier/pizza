import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //   const style = {color: 'red',fontSize: '42px',textTransform: 'uppercase',};
  const style = {};
  return (
    <header className='header'>
      <h1 style={style}>fast react pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu </h2>

      <ul className='pizzas'>
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>

      {/* <Pizza
        name='Pizza Spinaci'
        ingredients='Tomato, mozarella, spinach,and ricotta cheese'
        photoName='pizzas/spinaci.jpg'
        price={10}
      />
      <Pizza
        name='Pizza Funghi'
        ingredients='Tomato, mozarella, mushrooms, and onion'
        photoName='pizzas/funghi.jpg'
        price={12}
      /> */}
    </main>
  );
}

function Pizza(props) {
  // console.log(props);
  return (
    <li className='pizza'>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>$CAD {props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  //   console.log(isOpen);

  //   if (hour >= openHour && hour <= closeHour) alert('We are currently open!');
  //   else alert('Sorry, We are closed!');
  return (
    <footer className='footer'>
      {' '}
      {new Date().toLocaleTimeString()}. We are currently open!
    </footer>
  );
  //   return React.createElement('footer', null, '© 2021 Fast React Pizza Co.');
}

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Strickmode renders things twice to check for side effects(bugs)
  <React.StrictMode>
    <App />
  </React.StrictMode>
);