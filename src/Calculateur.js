import { useState } from 'react';

function Calculateur() {
  const [total, setTotal] = useState(0);

  const augmenter = () => {
    setTotal(prevTotal => prevTotal + 1);
  };

  const reinitialiser = () => {
    setTotal(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Mon Calculateur</h2>
      <p>Nombre de clics : <strong>{total}</strong></p>
      <button onClick={augmenter} style={{ marginRight: '10px' }}>
        + Ajouter
      </button>
      <button onClick={reinitialiser}>
        Réinitialiser
      </button>
    </div>
  );
}

export default Calculateur;