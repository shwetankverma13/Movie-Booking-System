import axios from 'axios';
import {useSelector} from 'react-redux';

export function seatPostEpic() {
  const matrix = useSelector((store: any) => store.ChangeMovieData).MovieData;
  const url = 'http://localhost:9090/movies/matrix';

  axios
    .post(url, matrix)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
}
