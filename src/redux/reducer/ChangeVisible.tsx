const InitialStateVisible = {
  isVisibleSuccess: 'false',
};
const ChangeVisible = (state = InitialStateVisible, action: any) => {
  switch (action.type) {
    case 'change_visible':
      return {
        ...state,
        isVisibleSuccess: action.payload,
      };
    default:
      return state;
  }
};
export {InitialStateVisible, ChangeVisible};
