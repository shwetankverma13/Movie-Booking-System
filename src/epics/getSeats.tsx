import axios from 'axios';
import {Alert} from 'react-native';
import {setSeats} from '../redux/action/setSeats';

function seatsEpic(
  movie_id: any,
  thname: any,
  time: any,
  dispatch: any,
  activeSeatId: any,
) {
  activeSeatId = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  axios
    .get(`http://localhost:9090/seats/${movie_id}/${thname}/${time}`)
    .then(function (response) {
      if (response.data == null) {
        dispatch(setSeats(activeSeatId));
      } else {
        response.data.map((x: any) => {
          // console.log(x.seatNum);

          let s = x.seatNum;
          let seat = s.split(', ');
          for (let i = 0; i < seat.length; i++) {
            let cs = seat[i];
            //  console.log(cs);
            let rid = Number(cs.charCodeAt(0) - 65);
            let cid = parseInt(cs.charAt(1));
            if (cid <= 6) cid -= 1;
            console.log(rid, cid);
            activeSeatId[rid][cid] = -1;
          }
        });
        dispatch(setSeats(activeSeatId));
      }
    })
    .catch(function (error) {
      console.log(error.message);
      Alert.alert(error.message);
    })
    .finally(function () {
      console.log('Finally called');
    });
}
export default seatsEpic;
