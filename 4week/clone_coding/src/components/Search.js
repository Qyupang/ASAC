import React from 'react';
import SearchModal from './SearchModal';

const Search = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="modal" onClick={closeModal}>
      <SearchModal />
    </div>
  );
};

export default Search;
