import './App.css';
import Home from './sections/Home';
import About from './sections/About';
import SidebarNav from './components/SidebarNav';
import MySkills from './sections/MySkills';
import Projects from './sections/Projects';

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
            <section id='projects-bookmark'>
              <Projects/>
            </section>
        </div>
    </div>
  );
}

export default App;
