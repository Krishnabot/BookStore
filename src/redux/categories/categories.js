const checkBooks = 'bookstore/categories.js/checkBooks';
const initialState = {
  categoriesList: [],
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case checkBooks:
      return [action.text];
    default:
      return state;
  }
}

export function addbook() {
  return {
    type: checkBooks,
    text: 'Under construction',
  };
}
