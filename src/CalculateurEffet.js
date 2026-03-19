import { useState, useEffect } from 'react';

function CalculateurEffet() {
  const [valeur, setValeur] = useState(0);

  useEffect(() => {
    console.log(`La valeur actuelle est : ${valeur}`);
  }, [valeur]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p>Valeur : <strong>{valeur}</strong></p>
      <button onClick={() => setValeur(valeur + 1)}>
        Incrémenter avec effet
      </button>
    </div>
  );
}

export default CalculateurEffet;