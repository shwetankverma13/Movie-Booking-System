import axios from 'axios';
import {useEffect} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTOM} from '../redux/action/fetchTOM';

function tomEpic(movie_name: any) {
  const dispatch = useDispatch();
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
export default tomEpic;
