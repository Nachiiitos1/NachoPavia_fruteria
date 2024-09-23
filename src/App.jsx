import React, { useState } from 'react';
import './App.css'; 

const productes = [
  {
    "id": 1,
    "nom": "Plàtan",
    "preu": 0.5
  },
  {
    "id": 2,
    "nom": "Poma",
    "preu": 0.8
  },
  {
    "id": 3,
    "nom": "Pinya",
    "preu": 5
  },
  {
    "id": 4,
    "nom": "Meló",
    "preu": 6
  },
];

const Fruteria = () => {
  const [ticket, setTicket] = useState([]);

  const addProduct = (product) => {
    const exists = ticket.find(item => item.id === product.id);
    if (exists) {
      setTicket(ticket.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setTicket([...ticket, { ...product, quantity: 1 }]);
    }
  };

  const removeProduct = (product) => {
    setTicket(ticket.filter(item => item.id !== product.id));
  };

  const calculateTotal = () => {
    return ticket.reduce((acc, item) => acc + item.preu * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="fruteria-container">
      <h1 className="titulo">Fruteria</h1>
      <div className="main-content">
        <div className="product-list">
          {productes.map((product) => (
            <div key={product.id} className="product-box">
              <p>{product.nom}</p>
              <p>Precio: {product.preu}€</p>
              <button onClick={() => addProduct(product)}>Añadir</button>
            </div>
          ))}
        </div>

        <div className="ticket-list">
          {ticket.map((item) => (
            <div key={item.id} className="ticket-box">
              <p>{item.nom} - {item.quantity} x {item.preu}€</p>
              <button onClick={() => removeProduct(item)}>Quitar</button>
            </div>
          ))}
          <div className="total-box">
            <h3>Total: {calculateTotal()}€</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fruteria;
