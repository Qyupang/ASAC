import MainPage from './pages/Home/MainPage';
import Joblist from './pages/JobList/JobList';
import JobDetail from './pages/JobDetail/JobDetail';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/wdlist" element={<Joblist />}></Route>
          {/* <JobDetail /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
