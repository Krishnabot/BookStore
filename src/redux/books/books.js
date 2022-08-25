const addingBooks = 'bookstore/books/addingBooks';
const removingBooks = 'bookstore/books/removingBooks';
const initialState = { bookList: [] };

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case addingBooks:
      return [
        ...state,
        {
          title: action.title,
          author: action.author,
          id: action.id,
        },
      ];
    case removingBooks:
      return state.bookList.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

export function addBook(Title, Author, Id) {
  return {
    type: addingBooks,
    title: Title,
    author: Author,
    id: Id,
  };
}

export function removeBook(Id) {
  return {
    type: removingBooks,
    id: Id,
  };
}
