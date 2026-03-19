import { useState } from 'react';

function AffichageDynamique() {
  const [index, setIndex] = useState(0);

  const messages = [
    'Cliquez pour commencer',
    'Premier clic',
    'Deuxième clic',
    'Troisième clic'
  ];

  const suivant = () => {
    if (index < messages.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Affichage Dynamique</h2>
      <p>{messages[index]}</p>
      <button onClick={suivant}>Cliquer</button>
    </div>
  );
}

export default AffichageDynamique;