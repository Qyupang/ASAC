import React from 'react';
import JobListMain from './JobListMain';
import JobListCategory from './JobListCategory';

const JobList = () => {
  return (
    <>
      <JobListCategory />
      <JobListMain />
    </>
  );
};

export default JobList;
