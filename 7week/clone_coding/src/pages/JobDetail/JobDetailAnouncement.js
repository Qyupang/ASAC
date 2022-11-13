import React from 'react';
import KakaoMap from './KakaoMap';
import dummyForRecruitment from '../../db/JobList/recruitmentCompany.json';

const JobDetailAnouncement = ({ pageId }) => {
  const company = dummyForRecruitment.companies.filter(
    (company) => company.id === pageId
  )[0];

  return (
    <section className="job-detail__anouncement">
      <div className="job-detail__anouncement-header-date">
        <div className="job-detail__anouncement-header__title">마감일</div>
        <div className="job-detail__anouncement-header__content">
          {company.dueDate}
        </div>
      </div>
      <div className="job-detail__anouncement-header-location">
        <div className="job-detail__anouncement-header__title">근무지역</div>
        <div className="job-detail__anouncement-header__content">
          {company.detailLocation}
        </div>
      </div>
      <KakaoMap lat={company.lat} lng={company.lng} />
    </section>
  );
};

export default JobDetailAnouncement;
