import React from 'react';
import JobListMain from './JobListMain';
import JobListCategory from './JobListCategory';
import '../../styles/style.css';

const JobList = ({ searchTerm, searched }) => {
  return (
    <>
      <JobListCategory />
      <JobListMain searchTerm={searchTerm} searched={searched} />
    </>
  );
};

export default JobList;
