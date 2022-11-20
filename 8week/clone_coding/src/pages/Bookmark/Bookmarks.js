import React from 'react';
import dummyForRecruitment from '../../db/JobList/recruitmentCompany.json';
import { useSelector } from 'react-redux';
import Recruit from '../JobList/Recruit';

const Bookmarks = () => {
  const bList = useSelector((state) => state);

  const companyList = dummyForRecruitment.companies.filter((company) =>
    bList.bookmark.bookmarkList.includes(company.id)
  );

  return (
    <div className="bookmark-page">
      <div className="bookmark-page__header">
        <h1 className="bookmark-page__title">북마크</h1>
      </div>
      <div className="bookmark-page__body">
        <ul className="recruitments">
          {companyList.map((company) => (
            <Recruit company={company} key={company.id} bookmarked={true} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bookmarks;
