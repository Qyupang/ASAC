import React from 'react';
import Footer from '../../components/Footer';
import JobDetailMain from './JobDetailMain';
import '../../styles/style.css';

const JobDetail = ({ PageId }) => {
  return (
    <div className="root">
      <JobDetailMain />
      <Footer />
    </div>
  );
};

export default JobDetail;
