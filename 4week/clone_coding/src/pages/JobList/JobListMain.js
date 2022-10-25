import React from 'react';
import Recruit from './Recruit';
import TopSectionCompany from './TopSectionCompany';
import dummyForTopSection from '../../db/JobList/topSectionCompany.json';
import dummyForRecruitment from '../../db/JobList/recruitmentCompany.json';

const JobListMain = () => {
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
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default JobListMain;
