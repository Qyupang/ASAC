import React from 'react';
import ShowScroll from './ShowScroll';
import TopSectionCompany from './TopSectionCompany';
import dummyForTopSection from '../../db/JobList/topSectionCompany.json';

const JobListMain = () => {
  return (
    <main className="job-list__main">
      <section className="top-section">
        <div className="bookmark">
          <i className="fa-solid fa-bookmark"></i>
          <span> 북마크 모아보기 &gt;</span>
        </div>
        <span className="top-section__title"> 적극 채용 중인 회사 </span>
        <div className="top-setion__companies">
          {dummyForTopSection.companies.map((company) => (
            <TopSectionCompany
              imgSrc={company.imgSrc}
              logoSrc={company.logoSrc}
              companyName={company.companyName}
              positionNum={company.positionNum}
              key={company.id}
            />
          ))}
        </div>
      </section>
      <section className="recruitment-announcement">
        <ul className="recruitments">
          <ShowScroll />
        </ul>
      </section>
    </main>
  );
};

export default JobListMain;
