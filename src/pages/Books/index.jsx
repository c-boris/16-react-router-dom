// pages/Books/index.jsx
import { Link } from 'react-router-dom';
import books from "../../data/books";

const Books = () => {
  return (
    <div>
      <h1>Books</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Aliquam quidem officia repellat velit ex odio quos alias pariatur ullam esse sint suscipit sunt perferendis, similique ad ipsa eos, dolores culpa.
      </p>
      <ul>
        {books.map((book) => (
          <li key={book.slug}>
            <Link to={`/books/${book.slug}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
