import React from 'react';
import chanelperf from './chanelperf.jpg';
import './App.css';


function App() {
  const handleClick = () => {
    alert("You clicked!");
  };


  return (
    <div>
      <div className="app-container">
<div className="Card-container">
        <header className="Thecard">

        </header>
        <div className="card-image">
            <img src={chanelperf} alt="Perfume" />
          </div>
        
      </div>
      <div className="Card-container">
        <header className="Thecard">

          <div className="card-info">
            <p className="card-category">Perfume</p>
            <h2 className="card-title">Gabrielle Essence Eau De Parfum</h2>
            <p className="card-description">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="card-prices">
              <span className="price">$149.99</span>
              <span className="old-price">$169.99</span>
            </div>
             <button className="add-to-cart" onClick={handleClick}>
              Add to Cart
            </button>
          </div>
        </header>
      </div>
    </div>
    </div>
  );
}
export default App;
