import { useState, useEffect } from 'react';

function CompteurTitre() {
  const [clics, setClics] = useState(0);

  useEffect(() => {
    document.title = `Nombre de clics : ${clics}`;
  }, [clics]);

  const incrementer = () => {
    setClics(clics + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Compteur avec Titre</h2>
      <p>Nombre de clics : <strong>{clics}</strong></p>
      <button onClick={incrementer}>Cliquer</button>
    </div>
  );
}

export default CompteurTitre;