import {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {setBookingStatus} from '../redux/action/setBookingStatus';
import Book_ticket from '../views/Ticket_booked';

export default function modalSeats(props: any, row: any) {
  const movDatas = useSelector((store: any) => store.ChangeMovieData).MovieData;
  const movTheatre = useSelector(
    (store: any) => store.ChangeTheatreData,
  ).TheatreData;
  const varId = useSelector((store: any) => store.ChangeVaribleId.varId);
  const varTimeId = useSelector(
    (store: any) => store.ChangeVaribleTimeId.varTimeId,
  );
  const movieId = useSelector((store: any) => store.ChangeMovieId.movieId);
  const dispatch = useDispatch();
  const [visible, SetVisible] = useState(false);

  const toggleModal = () => {
    SetVisible(!visible);
  };

  const arr = useSelector((store: any) => store.ChangeSeatId);
  let activeSeatId = arr.clickSeat;
  const costID = useSelector((store: any) => store.ChangeTotalCost.costID);
  const movieStatus = useSelector(
    (store: any) => store.ChangeBookingStatus.isBookingSuccess,
  );
  return (
    <Modal
      style={{width: '100%', marginBottom: 0, marginLeft: 0}}
      onBackdropPress={() => SetVisible(false)}
      onBackButtonPress={() => SetVisible(false)}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={toggleModal}
      animationIn="bounceInUp"
      animationOut="bounceOutDown"
      animationInTiming={900}
      animationOutTiming={500}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={500}>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: 623,
          backgroundColor: 'white',
          width: '100%',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}>
        <Text
          style={{
            width: 600,
            height: 20,
            marginLeft: 16,
            marginTop: 24,
            fontSize: 16,
          }}>
          {movTheatre[varId].title} , {movTheatre[varId].location}
        </Text>
        <View
          style={{
            marginLeft: 16,
            flexDirection: 'row',
            marginTop: 4,
          }}>
          <Text style={{fontSize: 12, fontWeight: '400'}}>
            {movDatas[movieId].title} • {movDatas[movieId].language} •{' '}
            {movTheatre[varId].timings[varTimeId]}
          </Text>
          <TouchableOpacity style={{marginLeft: 4, marginTop: 3}}>
            <FontAwesome name="chevron-down" color={'#444'} size={8} />
          </TouchableOpacity>
        </View>

        <View>
          <Text
            style={{
              marginTop: 60,
              marginLeft: 140,
              color: '#D7DCE0',
            }}>
            SCREEN THIS WAY
          </Text>
        </View>
        <View
          style={{
            width: 260,
            height: 14,
            borderWidth: 1,
            margin: 5,
            backgroundColor: '#F7F9FA',
            marginLeft: 60,
            borderColor: '#D7DCE0',
          }}></View>
        <View style={{marginLeft: 5, marginTop: 40}}>{row}</View>
        <TouchableOpacity
          onPress={() => {
            dispatch(setBookingStatus(true));
            console.log(movieStatus);
            props.navigation.navigate('Book_ticket');
            SetVisible(!visible);
          }}
          style={{
            marginBottom: 0,
            marginTop: 20,
            marginLeft: '10%',
            borderRadius: 8,
            backgroundColor: 'purple',
            width: '80%',
            height: 38,
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              marginTop: 8,
              textTransform: 'capitalize',
              fontWeight: '600',
            }}>
            BOOK ₹ {costID}
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
