import './App.css';
import Home from './sections/Home';
import About from './sections/About';
import SidebarNav from './components/SidebarNav';
import MySkills from './sections/MySkills';

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
            <section id='myskills-bookmark'>
              <MySkills/>
            </section>
        </div>
    </div>
  );
}

export default App;
