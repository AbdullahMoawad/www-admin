const initialState = [
  'transparent',
  'black',
  'white',
  'gray',
  'red',
  'yellow',
  'green',
  'blue',
  'whiteGreen',
  'darkGreen',
  'indigo',
  'purple',
  'pink',
];

export default function colors(state = initialState, action:any) {
  switch (action.type) {
    default:
      return state;
  }
}
