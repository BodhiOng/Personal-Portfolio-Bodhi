import './SidebarNav.css';

function SidebarNav() {
    return (
        <div>
            <nav className='sidebar-nav'>
                <button>Home</button>
                <button>About</button>
                <button>My skills</button>
                <button>Portfolio</button>
                <button>Get in <br/>touch</button>
            </nav>
        </div>
    );
}

export default SidebarNav;