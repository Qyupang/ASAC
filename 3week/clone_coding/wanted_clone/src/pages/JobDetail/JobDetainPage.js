import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import JobDetailMain from './JobDetailMain';
import JobDetailCategory from './JobDetailCategory';

const JobDetailPage = () => {
  return (
    <div className="root">
      <Header />
      <JobDetailCategory />
      <JobDetailMain />
      <Footer />
    </div>
  );
};

export default JobDetailPage;
