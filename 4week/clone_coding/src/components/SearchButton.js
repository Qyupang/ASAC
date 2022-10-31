import React, { useState } from 'react';
import Search from './Search';

const SearchButton = ({ setSearched, setSearchTerm }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <i
        className="fa-solid fa-magnifying-glass cursor"
        onClick={showModal}
      ></i>
      {modalOpen && (
        <Search
          setModalOpen={setModalOpen}
          setSearchTerm={setSearchTerm}
          setSearched={setSearched}
        />
      )}
    </>
  );
};

export default SearchButton;
