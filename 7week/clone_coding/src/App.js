import Header from './components/Header';
import MainPage from './pages/Home/MainPage';
import Joblist from './pages/JobList/JobList';
import JobDetail from './pages/JobDetail/JobDetail';
import NotFound from './pages/NotFound/NotFound';
import SearchPage from './pages/Search/SearchPage';
import Bookmarks from './pages/Bookmark/Bookmarks';
import ScrollToTop from './ScrollToTop';
import './styles/style.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/wdlist" element={<Joblist />}></Route>
          <Route path="/wd/:id" element={<JobDetail />}></Route>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
