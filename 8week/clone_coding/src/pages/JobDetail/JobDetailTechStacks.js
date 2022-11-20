import React from 'react';
import JobDetailTechStack from './JobDetailTechStack';
import dummyForRecruitment from '../../db/JobList/recruitmentCompany.json';

const JobDetailTechStacks = ({ pageId }) => {
  const stacks = dummyForRecruitment.companies.filter(
    (company) => company.id === pageId
  )[0].techStack;
  return (
    <>
      <h6 className="job-detail__tech-title">기술스택 ・ 툴</h6>
      <div className="job-detail__tech-stacks">
        {stacks.map((stack, idx) => (
          <JobDetailTechStack stack={stack} />
        ))}
      </div>
    </>
  );
};

export default JobDetailTechStacks;
