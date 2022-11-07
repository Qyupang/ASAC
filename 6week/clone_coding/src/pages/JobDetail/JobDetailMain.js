import React, { useState } from 'react';
import Recruit from '../JobList/Recruit';
import JobDetailSlider from './JobDetailSlider';
import HiddenDescript from './HiddenDescript';
import JobDetailHeader from './JobDetailHeader';
import StickyReward from './StickyReward';
import JobDetailTechStacks from './JobDetailTechStacks';
import dummyForRecruitment from '../../db/JobList/recruitmentCompany.json';
import JobDetailAnouncement from './JobDetailAnouncement';
import JobDetailCompany from './JobDetailCompany';
import JobDetailMainContent from './JobDetailMainContent';
import { Link } from 'react-router-dom';

const JobDetailMain = ({ pageId }) => {
  const [hidden, setHidden] = useState(true);
  const [newClassName, setNewClassName] = useState('job-detail');

  const toggleHidden = () => {
    if (hidden) {
      setHidden(false);
      setNewClassName('job-detail__hidden');
    } else {
      setHidden(true);
      setNewClassName('job-detail');
    }
  };

  return (
    <main className="main">
      <section className={newClassName}>
        <div className="job-detail__main">
          <div className="job-detail__images">
            <JobDetailSlider />
          </div>
          <JobDetailHeader pageId={pageId} />
          <section className="job-detail-description">
            <JobDetailMainContent />
            <JobDetailTechStacks pageId={pageId} />
          </section>
          <JobDetailAnouncement pageId={pageId} />
          <JobDetailCompany pageId={pageId} />
          <div className="job-detail__warning">
            <div className="job-deatil__warning-top">
              <i className="fa-solid fa-circle-exclamation"></i>
              <div className="job-detail__warning-right">
                <span>
                  본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할
                  수 없으며, 구직활동 이외의 <br />
                  용도로 사용할 수 없습니다.
                </span>
                <i
                  className="fa-solid fa-chevron-down"
                  onClick={toggleHidden}
                ></i>
              </div>
            </div>
            {!hidden && <HiddenDescript pageId={pageId} />}
          </div>
        </div>
        <StickyReward />
      </section>
      <section className="more-positions">
        <span className="more-positions__title">
          이 포지션을 찾고 계셨나요?
        </span>
        <section className="recruitment-announcement">
          <ul className="recruitments">
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
          </ul>
        </section>
      </section>
    </main>
  );
};

export default JobDetailMain;
