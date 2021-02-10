const translateMessage =  (key) => {
  switch (key) {
    case 'FME00000':
      return 'Errore server!'
    case 'FME00001':
      return 'Elemento non trovato'
    case 'FME00002':
      return 'Il campo nome è obbligatorio'
    case 'FME00003':
      return 'Il campo cognome è obbligatorio'
    case 'FME00004':
      return 'Il campo numero edizione è obbligatorio'
    case 'FME00005':
      return 'Il campo numero è obbligatorio'
    case 'FME00006':
      return 'Il campo partecipanti è obbligatorio'
    case 'FME00007':
      return 'Il numero dei partecipanti è obbligatorio'
    case 'FME00008':
      return 'Sessione di gioco non valida'
    case 'FME50002':
      return 'Email o password non valida'
    case 'FME50003':
      return 'Mail non valida!'
    case 'FME50004':
      return 'Specificare una password!'
    default:
      return key;
  }
}

export default translateMessage;