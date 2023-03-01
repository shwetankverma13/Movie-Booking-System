// initial state
const InitialStateVisible = {
  isVisibleSuccess: 'false',
};
const ChangeVisible = (state = InitialStateVisible, action: any) => {
  switch (action.type) {
    case 'change_visible':
      return {
        ...state,
        isVisibleSuccess: action.payload,
      };
    default:
      return state;
  }
};

const InitialVarId = {
  varId: 0,
};
const ChangeVaribleId = (state = InitialVarId, action: any) => {
  switch (action.type) {
    case 'SetVarId':
      return {
        ...state,
        varId: action.payload,
      };
    default:
      return state;
  }
};
const InitialTimeId = {
  varTimeId: 0,
};
const ChangeVaribleTimeId = (state = InitialTimeId, action: any) => {
  switch (action.type) {
    case 'SetVarTimeId':
      return {
        ...state,
        varTimeId: action.payload,
      };
    default:
      return state;
  }
};
const movData = [
  {
    id: '1',
    title: 'Matrix',
    image: require('../images/matrix.png'),
    language: 'English',
    genre: 'Action/SciFi',
    description:
      "To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he's learned anything, it's that choice, while an illusion...",
    duration: '2h 28min',
    year: '2021',
    timings: ['2:00 PM', '5:30 PM', '7:00 PM', '9:30 PM'],
  },
  {
    id: '2',
    title: '83',
    image: require('../images/kd83.png'),
    language: 'Hindi',
    genre: 'Sports',
    description:
      "On June 25, 1983, the Lord's Cricket Ground witnessed 14 men beat the two times World Champions West Indies, putting India back onto the cricket world stage.",
    duration: '2h 40min',
    year: '2022',
    timings: ['2:00 PM', '5:30 PM', '7:00 PM'],
  },
  {
    id: '3',
    title: 'Sammayanaydu',
    image: require('../images/saamanyudu.png'),
    language: 'Telugu',
    genre: 'Action/Thriller',
    description:
      "A young man aspires to follow in his father's footsteps and become a police officer. However, when his sister is killed, he takes matters into his own hands to catch the culprits.",
    duration: '2h 50min',
    year: '2022',
    timings: ['2:00 PM', '5:30 PM', '7:00 PM'],
  },
  {
    id: '4',
    title: 'Pushpa',
    image: require('../images/Pushpa.png'),
    language: 'Telugu',
    genre: 'LoveStory/Drama',
    description:
      'A labourer named Pushpa makes enemies as he rises in the world of red sandalwood smuggling. However, violence erupts when the police attempt to bring down his illegal business.',
    duration: '2h 59min',
    year: '2022',
    timings: ['2:00 PM', '5:30 PM', '7:00 PM'],
  },
  {
    id: '5',
    title: 'Movie1',
    image: require('../images/no_img.png'),
    language: 'English',
    genre: 'Action/SciFi',
    description:
      "To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he's learned anything, it's that choice, while an illusion...",
    duration: '2h 28min',
    year: '2023',
    timings: ['2:00 PM', '5:30 PM', '7:00 PM', '9:30 PM'],
  },
];
const ChangeMovie = (state = movData, action: any) => state;
const theatre = [
  {
    id: '1',
    title: 'Urvashi Cin...',
    image: require('../images/Urvashi.png'),
    location: 'Shivaji Nagar',
    timings: [
      {time: '2:00 PM', num: 1},
      {time: '5:30 PM', num: 1},
      {time: '7:00 PM', num: 1},
      {time: '9:00 PM', num: 1},
    ],
  },
  {
    id: '2',
    title: 'Inox',
    image: require('../images/no_img.png'),
    location: '1mg Mall',
    timings: [
      {time: '2:00 PM', num: 2},
      {time: '5:30 PM', num: 2},
      {time: '9:00 PM', num: 2},
    ],
  },
  {
    id: '3',
    title: 'Cinepolis',
    image: require('../images/no_img.png'),
    location: 'Majestic Hebal',
    timings: [
      {time: '2:00 PM', num: 3},
      {time: '5:30 PM', num: 3},
      {time: '7:00 PM', num: 3},
    ],
  },
  {
    id: '4',
    title: 'PVR',
    image: require('../images/no_img.png'),
    location: 'Forum Mall',
    timings: [
      {time: '2:00 PM', num: 4},
      {time: '7:00 PM', num: 4},
      {time: '9:00 PM', num: 4},
    ],
  },
  {
    id: '5',
    title: 'Cinema Hall',
    image: require('../images/no_img.png'),
    location: 'xyz',
    timings: [
      {time: '2:00 PM', num: 5},
      {time: '5:30 PM', num: 5},
      {time: '7:00 PM', num: 5},
      {time: '9:00 PM', num: 5},
    ],
  },
  {
    id: '6',
    title: 'Cinema Hall',
    image: require('../images/no_img.png'),
    location: 'xyz',
    timings: [
      {time: '2:00 PM', num: 6},
      {time: '5:30 PM', num: 6},
      {time: '9:00 PM', num: 6},
    ],
  },
  {
    id: '7',
    title: 'Cinema Hall',
    image: require('../images/no_img.png'),
    location: 'xyz',
    timings: [
      {time: '7:00 PM', num: 7},
      {time: '9:00 PM', num: 7},
    ],
  },
  {
    id: '8',
    title: 'Cinema Hall',
    image: require('../images/no_img.png'),
    location: 'xyz',
    timings: [
      {time: '2:00 PM', num: 8},
      {time: '5:30 PM', num: 8},
      {time: '7:00 PM', num: 8},
      {time: '9:00 PM', num: 8},
    ],
  },
];
const ChangeTheatre = (state = theatre) => state;
export {
  ChangeVisible,
  InitialStateVisible,
  ChangeMovie,
  ChangeTheatre,
  movData,
  theatre,
  InitialVarId,
  ChangeVaribleId,
  InitialTimeId,
  ChangeVaribleTimeId,
};
