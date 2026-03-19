import { useState } from 'react';

function Inscription() {
  const [donnees, setDonnees] = useState({
    prenom: '',
    email: ''
  });

  const gererChangement = (e) => {
    setDonnees({ ...donnees, [e.target.name]: e.target.value });
  };

  const gererSoumission = (e) => {
    e.preventDefault();
    alert(`Prénom : ${donnees.prenom}\nEmail : ${donnees.email}`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Formulaire d'Inscription</h2>
      <form onSubmit={gererSoumission}>
        <div>
          <label>Prénom : </label>
          <input
            type="text"
            name="prenom"
            value={donnees.prenom}
            onChange={gererChangement}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Email : </label>
          <input
            type="email"
            name="email"
            value={donnees.email}
            onChange={gererChangement}
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default Inscription;