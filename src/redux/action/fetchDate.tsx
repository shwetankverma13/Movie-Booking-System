export const fetchDate = (newDate: any) => {
  return {
    type: 'getDate',
    payload: newDate,
  };
};
export const fetchDateSuccess = (newDate: any) => {
  return {
    type: 'getDateSuccess',
    payload: newDate,
  };
};
