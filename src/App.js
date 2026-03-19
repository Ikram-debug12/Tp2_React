import Calculateur from './Calculateur';
import Notification from './Notification';
import Saisie from './Saisie';
import CalculateurEffet from './CalculateurEffet';
import AffichageDynamique from './AffichageDynamique';
import Inscription from './Inscription';
import CompteurTitre from './CompteurTitre';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Application React</h1>
      <Calculateur />
      <Notification />
      <Saisie />
      <CalculateurEffet />
      <hr />
      <h2>Exercices</h2>
      <AffichageDynamique />
      <Inscription />
      <CompteurTitre />
    </div>
  );
}

export default App;