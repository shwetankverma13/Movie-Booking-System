const selectLanguage = [
  {name: 'All', id: '1', color: '#4A148C33'},
  {name: 'English', id: '2', color: 'white'},
  {name: 'Hindi', id: '3', color: 'white'},
  {name: 'Tamil', id: '4', color: 'white'},
  {name: 'Telugu', id: '5', color: 'white'},
  {name: 'Marathi', id: '6', color: 'white'},
  {name: 'Bhojpuri', id: '7', color: 'white'},
  {name: 'Kannad', id: '8', color: 'white'},
];
const changeLanguage = (state = selectLanguage, action: any) => {
  if (action.type == 'setLanguage') {
    for (let i = 0; i < state.length; i++) {
      if (i == action.payload) {
        state[i].color = '#4A148C33';
      } else {
        state[i].color = 'white';
      }
    }
  }
  return [...state];
};
export {selectLanguage, changeLanguage};
