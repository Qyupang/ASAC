import React from 'react';
import JobListMain from './JobListMain';
import JobListCategory from './JobListCategory';
import '../../styles/style.css';

const JobList = () => {
  return (
    <>
      <JobListCategory />
      <JobListMain />
    </>
  );
};

export default JobList;
