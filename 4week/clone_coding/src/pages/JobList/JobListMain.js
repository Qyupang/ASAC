import React from 'react';
import { Link } from 'react-router-dom';
import Recruit from './Recruit';
import TopSectionCompany from './TopSectionCompany';
import dummyForTopSection from '../../db/JobList/topSectionCompany.json';
import dummyForRecruitment from '../../db/JobList/recruitmentCompany.json';

const JobListMain = ({ searchTerm, searched }) => {
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
              key={company.id}
            />
          ))}
        </div>
      </section>
      <section className="recruitment-announcement">
        <ul className="recruitments">
          {!searched
            ? dummyForRecruitment.companies.map((company) => (
                <Link to={`/wd/${company.id}`} key={company.id}>
                  <Recruit
                    imgSrc={company.imgSrc}
                    recruitTitle={company.recruitTitle}
                    companyName={company.companyName}
                    responseRate={company.responseRate}
                    location={company.responseRate}
                    incentive={company.incentive}
                    key={company.id}
                  />
                </Link>
              ))
            : dummyForRecruitment.companies.map((company) => (
                <Link to={`/wd/${company.id}`} key={company.id}>
                  <Recruit
                    // imgSrc={company.imgSrc}
                    recruitTitle={company.recruitTitle}
                    companyName={company.companyName}
                    responseRate={company.responseRate}
                    location={company.responseRate}
                    incentive={company.incentive}
                    key={company.id}
                  />
                </Link>
              ))}
        </ul>
      </section>
    </main>
  );
};

export default JobListMain;
