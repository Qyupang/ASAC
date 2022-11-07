import React from 'react';
import JobDetailHeaderTop from './JobDetailHeaderTop';
import JobDetailTag from './JobDetailTag';
import dummyForRecruitment from '../../db/JobList/recruitmentCompany.json';

const JobDetailHeader = ({ pageId }) => {
  const tags = dummyForRecruitment.companies.filter(
    (company) => company.id === pageId
  )[0].tags;

  return (
    <div className="job-detail__header">
      <JobDetailHeaderTop pageId={pageId} />
      <div className="job-detail__tags">
        {tags.map((tag, idx) => (
          <JobDetailTag tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default JobDetailHeader;
