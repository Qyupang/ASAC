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

  //   useEffect(() => {
  //     dummyForRecruitment.companies.filter((v, i) => i >= dataLen && i < dataLen + 4).map(setData((prev) => [...prev, ...r])
  //   }, [dataLen]);

  const hello = dummyForRecruitment.companies
    .filter((v, i) => i >= dataLen && i < dataLen + 4)
    .map((company) => setData(1));

  console.log(hello);
  console.log(data);

  useEffect(() => {
    window.addEventListener('scroll', handelScroll);

    return () => {
      window.removeEventListener('scroll', handelScroll);
    };
  }, []);

  return (
    <>
      {dummyForRecruitment.companies.map((company) => (
        <Link to={`/wd/${company.id}`} key={company.id}>
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
