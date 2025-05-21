import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeftSideBar from './Components/leftSideBar/leftSideBar';
import RightSideBar from './Components/rightSideBar/rightSideBar';
import Timeline from './Components/timeline/Timeline';
import AuthPage from './Components/Auth/AuthPage'; // adjust path if needed

function App() {
  return (
    <Router>
      <Routes>
        {/* Login / Signup Page */}
        <Route path="/" element={<AuthPage />} />

        {/* Home Page (Main Instagram Layout) */}
        <Route
          path="/home"
          element={
            <div className="App">
              <div className="left-sidebar">
                <LeftSideBar />
              </div>
              <div className="timeline">
                <Timeline />
              </div>
              <div className="right-sidebar">
                <RightSideBar />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;



