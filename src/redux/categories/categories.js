const checkBooks = 'checkBooks';
const initialState = [];

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case checkBooks:
      return [action.text];
    default:
      return state;
  }
}

export function category() {
  return {
    type: checkBooks,
    text: 'Under construction',
  };
}
