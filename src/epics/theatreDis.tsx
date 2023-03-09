import axios from 'axios';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovies, fetchTheatre} from '../redux/action';

function TheatreEpic() {
  const dispatch = useDispatch();

  //console.log('jhv', fetchMovies);

  useEffect(() => {
    axios
      .get('http://localhost:9090/theatres')
      .then(function (response) {
        //changear(JSON.stringify(response.data));
        response.data.map((x: any) => {
          // console.log(x);
          // console.log('next');
          dispatch(fetchTheatre(x));
          //  console.log(fetchMovies);
        });
      })
      .catch(function (error) {
        console.log(error.message);
      })
      .finally(function () {
        console.log('Finally called');
      });
  }, []);
}
export default TheatreEpic;
