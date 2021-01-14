const translateResultType =  (key) => {
  switch (key) {
    case 'ParticipantInMysteryBoxPodium':
      return ' tra i primi tre nella mystery box'
    case 'ParticipantWinnerOfMysteryBox':
      return ' vincitore della mystery box'
    case 'ParticipantWinnerOfInventionTest':
      return " vincitore dell'invention test"
    case 'ParticipantWinnerOfMysteryBoxAndInventionTest':
      return ' vincitore sia della mystery che dell\'invention'
    case 'ParticipantInInventionTestWorst':
      return ' tra i peggiori dell\'invention test'
    case 'ParticipantNotInABrigade':
      return ' escluso dall\'esterna'
    case 'ParticipantHeadOfRedBrigade':
      return ' capo brigata rossa'
    case 'ParticipantHeadOfBlueBrigade':
      return ' capo brigata blu'
    case 'ParticipantInWinnerBrigade':
      return ' nella brigata vincitrice'
    case 'ParticipantInPressureTest':
      return ' al pressure test'
    case 'ParticipantEliminated':
      return ' eliminato'
    default:
      return key;
  }
}

export default translateResultType;