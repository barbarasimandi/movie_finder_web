import React, { useRef } from 'react';

const SearchForm = ({ onSearch }) => {
  const queryRef = useRef();

  const formSubmissionHandler = event => {
    event.preventDefault();
    const enteredQuery = queryRef.current.value
    onSearch(enteredQuery);
    queryRef.current.value = ''
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <input
        type="text"
        placeholder="Search movies..."
        name="search"
        ref={queryRef}
      />
      <button
        type={"submit"}
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;