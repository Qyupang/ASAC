import React from 'react';
import Header from '../../components/Header';
import JobListMain from './JobListMain';
import JobListCategory from './JobListCategory';
import '../../styles/style.css';

const JobList = () => {
  return (
    <div className="root">
      <Header />
      <JobListCategory />
      <JobListMain />
    </div>
  );
};

export default JobList;
