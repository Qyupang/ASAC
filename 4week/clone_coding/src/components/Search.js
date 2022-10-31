import React from 'react';
import SearchModal from './SearchModal';

const Search = ({ setModalOpen, setSearched, setSearchTerm }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="modal">
      <SearchModal setSearchTerm={setSearchTerm} setSearched={setSearched} />
      <div className="modal-black" onClick={closeModal}></div>
    </div>
  );
};

export default Search;
