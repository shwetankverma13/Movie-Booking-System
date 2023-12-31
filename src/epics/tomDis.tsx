import axios from 'axios';
import {useEffect} from 'react';
import {Alert} from 'react-native';
import {fetchTOM} from '../redux/action/fetchTOM';

function TomEpic(movie_name: any, dispatch: any) {
  console.log(movie_name);
  useEffect(() => {
    axios
      .get(`http://localhost:9090/toms/${movie_name}`)
      .then(function (response) {
        dispatch(fetchTOM(response.data));
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
export default TomEpic;
