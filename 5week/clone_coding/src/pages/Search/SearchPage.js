import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import JobDetailCompany from '../JobDetail/JobDetailCompany';
import dummyForRecruitment from '../../db/JobList/recruitmentCompany.json';
import CategorySelections from '../JobList/CategorySelections';
import CategoryButtonSlider from '../JobList/CategoryButtonSlider';
import Recruit from '../JobList/Recruit';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchKeyword = searchParams.get('query');

  const company = dummyForRecruitment.companies.filter(
    (company) => company.companyName === searchKeyword
  );

  const searchedCompany = company[0];

  return (
    <>
      <div className="search-header">
        <h1 className="search-header__title">{searchKeyword}</h1>
      </div>
      <section className="search-body">
        <div className="search-content">
          <div className="search-content__companies">
            <h2 className="search-content__title">회사 {company.length}</h2>
            <JobDetailCompany pageId={1} />
          </div>
          <div className="search-content__positions">
            <h2 className="search-content__title">포지션 {company.length}</h2>
            <div className="search-content__categories">
              <CategorySelections />
              <hr />
              <div className="category-buttons">
                <CategoryButtonSlider />
              </div>
              <ul className="recruitments">
                <Link to={`/wd/${searchedCompany.id}`} key={searchedCompany.id}>
                  <Recruit
                    imgSrc={searchedCompany.imgSrc}
                    recruitTitle={searchedCompany.recruitTitle}
                    companyName={searchedCompany.companyName}
                    responseRate={searchedCompany.responseRate}
                    location={searchedCompany.responseRate}
                    incentive={searchedCompany.incentive}
                    key={searchedCompany.id}
                  />
                </Link>
              </ul>
            </div>
          </div>
          <div className="search-content__more-info">
            <h2 className="search-content__more-info-title">
              원티드 이외의 채용공고를 더 확인해 보세요
              <i class="fa-solid fa-circle-info" />
            </h2>
            <div className="search-content__empty">
              <h3 className="search-content__empty-title">
                아쉽지만 수집된 채용공고가 충분하지 않습니다.
                <br />
                <br />
                매치업에 등록하고 기업에게 먼저 면접제안을 받아보세요.
              </h3>
              <button className="search-content__register-matchup">
                매치업 등록하기
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchPage;
