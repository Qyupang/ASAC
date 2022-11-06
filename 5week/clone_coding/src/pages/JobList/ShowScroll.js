import React, { useEffect, useState, useRef } from 'react';
import dummyForRecruitment from '../../db/JobList/recruitmentCompany.json';
import Recruit from './Recruit';
import { Link } from 'react-router-dom';

const ShowScroll = () => {
  const [data, setData] = useState([]);
  const [dataLen, setDataLen] = useState(0);

  const handelScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setDataLen((prev) => prev + 4);
    }
  };

  useEffect(() => {
    const list = dummyForRecruitment.companies.filter(
      (company, i) => i < dataLen + 4
    );
    setData((prev) => [...list]);
    console.log('hello');
  }, [dataLen]);

  useEffect(() => {
    window.addEventListener('scroll', handelScroll);

    return () => {
      window.removeEventListener('scroll', handelScroll);
    };
  }, []);

  return (
    <>
      {data.map((company, idx) => (
        <Link to={`/wd/${company.id}`} key={idx}>
          <Recruit
            imgSrc={company.imgSrc}
            position={company.position}
            companyName={company.companyName}
            responseRate={company.responseRate}
            location={company.responseRate}
            incentive={company.incentive}
            key={company.id}
          />
        </Link>
      ))}
    </>
  );
};

export default ShowScroll;
