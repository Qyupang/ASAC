import React from 'react';
import dummyForRecruitment from '../../db/JobList/recruitmentCompany.json';

const JobDetailCompany = ({ pageId }) => {
  const company = dummyForRecruitment.companies.filter(
    (company) => company.id === pageId
  )[0];
  return (
    <section className="job-detail__company">
      <div className="job-detail__company__botton-left">
        <img
          src={company.companyImage}
          className="job-detail__company-image"
          alt=""
        />
        <div className="job-detail__company-info">
          <span className="job-detail__company-name">
            {company.companyName}
          </span>
          <span className="job-detail__company-type">
            {company.workCategory}
          </span>
        </div>
      </div>
      <button className="job-detail__company__button-right">팔로우</button>
    </section>
  );
};

export default JobDetailCompany;
