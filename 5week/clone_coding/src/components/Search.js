import React from 'react';
import SearchModal from './SearchModal';

const Search = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="modal">
      <SearchModal />
      <div className="modal-black" onClick={closeModal}></div>
    </div>
  );
};

export default Search;
