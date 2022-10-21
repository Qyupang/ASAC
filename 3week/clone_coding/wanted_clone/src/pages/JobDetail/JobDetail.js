import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import JobDetailMain from './JobDetailMain';
import '../../styles/style.css';

const JobDetail = () => {
  return (
    <div>
      <Header />
      <JobDetailMain />
      <Footer />
    </div>
  );
};

export default JobDetail;
