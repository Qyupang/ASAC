import React from 'react';
import Footer from '../../components/Footer';
import JobDetailMain from './JobDetailMain';
import '../../styles/style.css';
import { useParams } from 'react-router-dom';

const JobDetail = () => {
  const { id } = useParams();

  return (
    <div className="root">
      <JobDetailMain pageId={Number(id)} />
      <Footer />
    </div>
  );
};

export default JobDetail;
