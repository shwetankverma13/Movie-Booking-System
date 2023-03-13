const fetchTheatre = (newTheatre: any) => {
  return {
    type: 'getTheatre',
    payload: newTheatre,
  };
};
export {fetchTheatre};
