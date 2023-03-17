import axios from 'axios';
import {useEffect} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTOM} from '../redux/action/fetchTOM';

function tomEpic(movie_name: any) {
  const dispatch = useDispatch();
  const movDatas = useSelector((store: any) => store.ChangeMovieData).MovieData;
  const movieId = useSelector((store: any) => store.ChangeMovieId.movieId);
  //const movie_name = movDatas[movieId].title;
  console.log(movie_name);
  useEffect(() => {
    axios
      .get(`http://localhost:9090/toms/${movie_name}`)
      .then(function (response) {
        //changear(JSON.stringify(response.data));

        dispatch(fetchTOM(response.data));
        // console.log(x);
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
