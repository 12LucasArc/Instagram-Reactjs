import viteLogo from '/vite.svg'
import './App.css'
import LeftSideBar from './Components/leftSideBar/leftSideBar';
import RightSideBar from './Components/rightSideBar/rightSideBar';
import Timeline from './Components/timeline/Timeline';

function App() {
  return (
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
  )
}

export default App
