
import Alessandra from '../img/alessandra.jpg';
import Antonio from '../img/antonio.jpg';
import Azzurra from '../img/azzurra.jpg';
import Camilla from '../img/camilla.jpg';
import Cristiano from '../img/cristiano.jpg';
import Daiana from '../img/daiana.jpg';
import Eduard from '../img/eduard.jpg';
import Federica from '../img/federica.jpg';
import Francesco from '../img/francesco.jpg';
import Aquila from '../img/francesco-aquila.jpg';
import Giuseppe from '../img/giuseppe.jpg';
import Igor from '../img/igor.jpg';
import Ilda from '../img/ilda.jpg';
import Irene from '../img/irene.jpg';
import Irish from '../img/irish.jpg';
import JiaBi from '../img/jia-bi.jpg';
import Marco from '../img/marco.jpg';
import Maxwell from '../img/maxwell.jpg';
import Monir from '../img/monir.jpg';
import Sedighe from '../img/sedighe.jpg';
import Valeria from '../img/valeria.jpg';

export default function getParticipantImage(key) {
  switch (key) {
    case 'alessandra.jpg':
      return Alessandra;
    case 'antonio.jpg':
      return Antonio;
    case 'azzurra.jpg':
      return Azzurra;
    case 'camilla.jpg':
      return Camilla;
    case 'cristiano.jpg':
      return Cristiano;
    case 'daiana.jpg':
      return Daiana;
    case 'eduard.jpg':
      return Eduard;
    case 'federica.jpg':
      return Federica;
    case 'francesco.jpg':
      return Francesco;
    case 'francesco-aquila.jpg':
      return Aquila;
    case 'giuseppe.jpg':
      return Giuseppe;
    case 'igor.jpg':
      return Igor;
    case 'ilda.jpg':
      return Ilda;
    case 'irene.jpg':
      return Irene;
    case 'irish.jpg':
      return Irish;
    case 'jia-bi.jpg':
      return JiaBi;
    case 'marco.jpg':
      return Marco;
    case 'maxwell.jpg':
      return Maxwell;
    case 'monir.jpg':
      return Monir;
    case 'sedighe.jpg':
      return Sedighe;
    case 'valeria.jpg':
      return Valeria;
    default:
      return null
  }
}