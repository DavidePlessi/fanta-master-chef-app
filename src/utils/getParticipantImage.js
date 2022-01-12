
import Andrea from "../img/andrea.png";
import Andreal from "../img/andreal_.png";
import Anna from "../img/anna.png";
import Bruno from "../img/bruno.png";
import Carmine from "../img/carmine.png";
import Chri from "../img/chri.png";
import Dalia from "../img/dalia.png";
import Elena from "../img/elena.png";
import Fede from "../img/fede.png";
import Giulia from "../img/giulia.png";
import Lia from "../img/lia.png";
import Mery from "../img/mery.png";
import Mime from "../img/mime.png";
import Nick from "../img/nick.png";
import Nico_ from "../img/nico_.png";
import Pietro from "../img/pietro.png";
import Polone from "../img/polone.png";
import Rita from "../img/rita.png";
import Tina from "../img/tina.png";
import Tracy from "../img/tracy.png";

export default function getParticipantImage(key) {
  switch (key) {
    case 'andrea.png':
      return Andrea;
    case 'andreal_.png':
      return Andreal;
    case 'anna.png':
      return Anna;
    case 'bruno.png':
      return Bruno;
    case 'carmine.png':
      return Carmine;
    case 'chri.png':
      return Chri;
    case 'dalia.png':
      return Dalia;
    case 'elena.png':
      return Elena;
    case 'fede.png':
      return Fede;
    case 'giulia.png':
      return Giulia;
    case 'lia.png':
      return Lia;
    case 'mery.png':
      return Mery;
    case 'mime.png':
      return Mime;
    case 'nick.png':
      return Nick;
    case 'nico_.png':
      return Nico_;
    case 'pietro.png':
      return Pietro;
    case 'polone.png':
      return Polone;
    case 'rita.png':
      return Rita;
    case 'tina.png':
      return Tina;
    case 'tracy.png':
      return Tracy;
    default:
      return null
  }
}