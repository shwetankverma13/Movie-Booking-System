import axios from 'axios';
import {useEffect} from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchMovies} from '../redux/action/fetchMovies';

function MoviesEpic() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get('http://localhost:9090/movies')
      .then(function (response) {
        response.data.map((x: any) => {
          dispatch(fetchMovies(x));
        });
      })
      .catch(function (error) {
        console.log(error.message);
        Alert.alert(error.message);
      })
      .finally(function () {
        console.log('Finally called');
      });
  }, []);
}
export default MoviesEpic;
