const CHECKBOOKS = 'CHECKBOOKS';
const initialState = [];

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CHECKBOOKS:
      return [action.text];
    default:
      return state;
  }
}

export function category() {
  return {
    type: CHECKBOOKS,
    text: 'Under construction',
  };
}
