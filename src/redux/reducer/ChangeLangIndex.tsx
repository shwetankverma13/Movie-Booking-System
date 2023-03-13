const InitialLangClick = {
  langIndex: 0,
};
const ChangeLangIndex = (state = InitialLangClick, action: any) => {
  switch (action.type) {
    case 'langIndex':
      return {
        ...state,
        langIndex: action.payload,
      };
    default:
      return state;
  }
};
export {InitialLangClick, ChangeLangIndex};
