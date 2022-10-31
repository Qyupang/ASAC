import MainPage from './pages/Home/MainPage';
import Joblist from './pages/JobList/JobList';
import JobDetail from './pages/JobDetail/JobDetail';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searched, setSearched] = useState(false);

  return (
    <div className="root">
      <BrowserRouter>
        <Header setSearchTerm={setSearchTerm} setSearched={setSearched} />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route
            path="/wdlist"
            element={<Joblist searchTerm={searchTerm} searched={searched} />}
          ></Route>
          <Route path="/wd/:id" element={<JobDetail />}></Route>
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
