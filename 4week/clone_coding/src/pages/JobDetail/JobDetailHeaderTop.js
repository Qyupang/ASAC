import React from 'react';
import dummyForRecruitment from '../../db/JobList/recruitmentCompany.json';

const JobDetailHeaderTop = ({ pageId }) => {
  const company = dummyForRecruitment.companies.filter(
    (company) => company.id === pageId
  )[0];

  return (
    <div className="job-detail__header-top">
      <span className="job-detail__title">웹 프론트엔드 개발자(React)</span>
      <div className="job-detail__info">
        <span className="job-detail__name">{company.companyName}</span>
        <div className="job-detail__response">
          <span className="job-detail__response-rate">응답률 평균 이상</span>
        </div>
        <div className="job-detail__region">{company.location}</div>
      </div>
    </div>
  );
};

export default JobDetailHeaderTop;
