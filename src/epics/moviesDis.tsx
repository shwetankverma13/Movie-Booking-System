import axios from 'axios';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovies} from '../redux/action';

function MoviesEpic() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get('http://localhost:9090/movies')
      .then(function (response) {
        //changear(JSON.stringify(response.data));
        response.data.map((x: any) => {
          // console.log(x);
          // console.log('next');
          dispatch(fetchMovies(x));
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
export default MoviesEpic;
