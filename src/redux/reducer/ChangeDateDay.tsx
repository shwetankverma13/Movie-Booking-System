const dayArray = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const monthArray = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
let a: any[] = [];
let blur: number = 0;
let curr_date = new Date();
for (let i = 0; i < 5; i++) {
  let date = curr_date.getDate();
  let day = curr_date.getDay();
  let month = curr_date.getMonth();
  let did = i.toString();
  let mon = date + ' ' + monthArray[month];

  if (i == 0) {
    a = [
      ...a,
      {
        id: did,
        date: mon,
        day: 'TODAY',
        color: '#4A148C33',
        blur: blur,
      },
    ];
  } else if (i == 1) {
    a = [
      ...a,
      {
        id: did,
        date: mon,
        day: 'TOMO',
        color: 'black',
        blur: blur,
      },
    ];
  } else {
    if (i > 2) {
      blur = 1;
    }
    a = [
      ...a,
      {
        id: did,
        date: mon,
        day: dayArray[day],
        color: 'black',
        blur: blur,
      },
    ];
  }
  curr_date.setDate(curr_date.getDate() + 1);
}
console.log(a);
const InitialSetDate = a;
const ChangeDayDate = (state = InitialSetDate, action: any) => {
  switch (action.type) {
    case 'getDate': {
      state = InitialSetDate;
      return [state];
    }
    case 'getDateSuccess': {
      for (let i = 0; i < state.length; i++) {
        if (i == action.payload) {
          state[i].color = '#4A148C33';
        } else {
          state[i].color = 'black';
        }
      }
      return [...state];
    }
    default:
      return state;
  }
};
export {InitialSetDate, ChangeDayDate};
