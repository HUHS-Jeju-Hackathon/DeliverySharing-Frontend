import { Route, Routes, BrowserRouter } from 'react-router-dom';
import JoinPage from './pages/JoinPage';
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import WritingPage from './pages/WritingPage';
import WritingViewPage from './pages/WritingViewPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ListPage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/writingView" element={<WritingViewPage />} />
        <Route path="/myInfo" element={<MyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
