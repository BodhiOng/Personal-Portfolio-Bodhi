import './App.css';
import Home from './sections/Home';
import About from './sections/About';
import SidebarNav from './SidebarNav';

function App() {
  return (
    <div className="App">
        <SidebarNav className='sidebar-nav-app'/>
        <div className='content'> 
          <section id='home-bookmark'>
            <Home/>
          </section>
          <section id='about-bookmark'>
            <About/>
          </section>
        </div>
    </div>
  );
}

export default App;
