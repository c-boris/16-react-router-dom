import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import books from '../../data/books';

const Book = () => {
  const { bookSlug } = useParams();
  const [currentBook, setCurrentBook] = useState(undefined);

  useEffect(() => {
    const foundBook = books.find((book) => book.slug === bookSlug);
    setCurrentBook(foundBook);
  }, [bookSlug]);

  return (
    <div>
      {currentBook ? (
        <div>
          <h1>{currentBook.title}</h1>
          <p>Author : {currentBook.author}</p>
          <p>Description : {currentBook.description}</p>
        </div>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
};

export default Book;
