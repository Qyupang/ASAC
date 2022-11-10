import React, { useEffect, useState, useRef } from 'react';
import dummyForRecruitment from '../../db/JobList/recruitmentCompany.json';
import Recruit from './Recruit';

const ShowScroll = () => {
  const [data, setData] = useState([]);
  const [dataLen, setDataLen] = useState(0);

  const handelScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
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
      {data.map((company) => (
        <Recruit company={company} key={company.id} />
      ))}
    </>
  );
};

export default ShowScroll;
