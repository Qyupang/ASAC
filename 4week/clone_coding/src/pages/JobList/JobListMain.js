import React from 'react';
import Recruit from './Recruit';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import JobDetail from '../JobDetail/JobDetail';
import TopSectionCompany from './TopSectionCompany';
import dummyForTopSection from '../../db/JobList/topSectionCompany.json';
import dummyForRecruitment from '../../db/JobList/recruitmentCompany.json';

const JobListMain = () => {
  // const [pageId, setPageId] = useState(0);

  // const handlePageId = (id) => {
  //   setPageId(id);
  //   <Link to="/wd/:id">
  //     <JobDetail pageId={pageId} />
  //   </Link>;
  // };
  return (
    <main className="job-list__main">
      <section className="top-section">
        <div className="bookmark">
          <i className="fa-solid fa-bookmark"></i>
          북마크 모아보기 &gt;
        </div>
        <span className="top-section__title"> 적극 채용 중인 회사 </span>
        <div className="top-setion__companies">
          {dummyForTopSection.companies.map((company) => (
            <TopSectionCompany
              imgSrc={company.imgSrc}
              logoSrc={company.logoSrc}
              companyName={company.companyName}
              positionNum={company.positionNum}
            />
          ))}
        </div>
      </section>
      <section className="recruitment-announcement">
        <ul className="recruitments">
          {dummyForRecruitment.companies.map((company) => (
            <Recruit
              imgSrc={company.imgSrc}
              recruitTitle={company.recruitTitle}
              companyName={company.companyName}
              responseRate={company.responseRate}
              location={company.responseRate}
              incentive={company.incentive}
              // onClick={handlePageId(company.id)}
            />
          ))}
        </ul>
        <ul className="recruitments">
          {dummyForRecruitment.companies1.map((company) => (
            <Recruit
              imgSrc={company.imgSrc}
              recruitTitle={company.recruitTitle}
              companyName={company.companyName}
              responseRate={company.responseRate}
              location={company.responseRate}
              incentive={company.incentive}
              // onClick={handlePageId(company.id)}
            />
          ))}
        </ul>
        <ul className="recruitments">
          {dummyForRecruitment.companies2.map((company) => (
            <Recruit
              imgSrc={company.imgSrc}
              recruitTitle={company.recruitTitle}
              companyName={company.companyName}
              responseRate={company.responseRate}
              location={company.responseRate}
              incentive={company.incentive}
              // onClick={handlePageId(company.id)}
            />
          ))}
        </ul>
        <ul className="recruitments">
          {dummyForRecruitment.companies3.map((company) => (
            <Recruit
              imgSrc={company.imgSrc}
              recruitTitle={company.recruitTitle}
              companyName={company.companyName}
              responseRate={company.responseRate}
              location={company.responseRate}
              incentive={company.incentive}
              // onClick={handlePageId(company.id)}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default JobListMain;
