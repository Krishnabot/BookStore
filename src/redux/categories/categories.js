const CHECKBOOKS = 'CHECKBOOKS';
const catList = [];

export default function categoryReducer(state = catList, action) {
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
