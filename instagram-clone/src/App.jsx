import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeftSideBar from './Components/leftSideBar/leftSideBar';
import RightSideBar from './Components/rightSideBar/rightSideBar';
import Timeline from './Components/timeline/Timeline';
import SplashScreen from './Components/SplashScreen/SplashScreen';
import AuthPage from './Components/Auth/AuthPage'; 
import PrivateRoute from './Components/Auth/PrivateRoute';
import { useAuth } from './context/AuthContext';

function App() {
  const { loading } = useAuth();
  
  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <Routes>
        {/* Login / Signup Page */}
        <Route path="/" element={<AuthPage />} />

        {/* Home Page (Main Instagram Layout) */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
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
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;



