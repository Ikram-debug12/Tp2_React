import { useState } from 'react';

function Saisie() {
  const [prenom, setPrenom] = useState('');

  const gererChangement = (e) => {
    setPrenom(e.target.value);
  };

  const gererSoumission = (e) => {
    e.preventDefault();
    alert(`Le prénom saisi est : ${prenom}`);
  };

  return (
    <form onSubmit={gererSoumission} style={{ textAlign: 'center', marginTop: '20px' }}>
      <label>
        Prénom :
        <input type="text" value={prenom} onChange={gererChangement} />
      </label>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default Saisie;