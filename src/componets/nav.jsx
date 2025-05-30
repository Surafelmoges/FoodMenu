import logo from '../assets/images/logo.jpg';

export default function Nav() {
    return (
        <>
          <nav className="Navi">
            <img 
            src={logo}
            alt="Logo"
            className='logo-image'
             />
             <h1 className='Logo-titlt'>Addis <span className='resto'>Restaurant</span></h1>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Orders</a></li>
            </ul>

          </nav>
        </>
    )
}
