const addingBooks = 'addingBooks';
const removingBooks = 'removingBooks';
const bookList = [
  {
    title: 'Harry Potter and Half Blood Prince',
    author: 'J.K Rowling',
    id: 0,
  },
  {
    title: 'Lord Of the Rings The Fellowship of the Ring',
    author: 'J. R. R. Tolkien',
    id: 1,
  },
  {
    title: 'Lord Of the Rings The Two Towers',
    author: 'J. R. R. Tolkien',
    id: 2,
  },
  {
    title: 'Lord Of the Rings The Return of the King',
    author: 'J. R. R. Tolkien',
    id: 3,
  },
  {
    title: 'Harry Potter and Philosphers Stone ',
    author: 'J.K Rowling',
    id: 4,
  },
];

export default function bookReducer(state = bookList, action) {
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
      return state.filter((book) => (book.id !== action.id));
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
