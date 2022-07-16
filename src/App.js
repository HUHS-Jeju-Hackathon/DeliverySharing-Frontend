import { Route, Routes, BrowserRouter } from 'react-router-dom';
import JoinPage from './pages/JoinPage';
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import WritingPage from './pages/WritingPage';
import WritingViewPage from './pages/WritingViewPage';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/writingView" element={<WritingViewPage />} />
        <Route path="/myInfo" element={<MyPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
