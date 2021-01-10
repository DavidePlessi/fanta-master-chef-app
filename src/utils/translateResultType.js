const translateResultType =  (key) => {
  switch (key) {
    case 'ParticipantInMysteryBoxPodium':
      return 'Concorrente tra i primi tre nella mystery box'
    case 'ParticipantWinnerOfMysteryBox':
      return 'Concorrente vincitore della mystery box'
    case 'ParticipantWinnerOfInventionTest':
      return "Concorrente vincitore dell'invention test"
    case 'ParticipantWinnerOfMysteryBoxAndInventionTest':
      return 'Concorrente vincitore sia della mystery che dell\'invention'
    case 'ParticipantInInventionTestWorst':
      return 'Concorrente tra i peggiori dell\'invention test'
    case 'ParticipantNotInABrigade':
      return 'Concorrente escluso dall\'esterna'
    case 'ParticipantHeadOfRedBrigade':
      return 'Concorrente capo brigata rossa'
    case 'ParticipantHeadOfBlueBrigade':
      return 'Concorrente capo brigata blu'
    case 'ParticipantInWinnerBrigade':
      return 'Concorrente nella brigata vincitrice'
    case 'ParticipantInPressureTest':
      return 'Concorrente al pressure test'
    case 'ParticipantEliminated':
      return 'Concorrente eliminato'
    default:
      return key;
  }
}

export default translateResultType;