import './App.css';
import Home from './sections/Home';
import SidebarNav from './SidebarNav';

function App() {
  return (
    <div className="App">
        <SidebarNav/>
        <div>
          <Home/>
        </div>
    </div>
  );
}

export default App;
