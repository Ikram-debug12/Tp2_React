import { useState } from 'react';

function Notification() {
  const [texte, setTexte] = useState('Appuyez sur le bouton ci-dessous');

  const modifierTexte = () => {
    setTexte('Le bouton a été activé avec succès !');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p>{texte}</p>
      <button onClick={modifierTexte}>Activer</button>
    </div>
  );
}

export default Notification;