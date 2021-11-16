import logo from '../assets/images/logo.svg';
import {Link} from 'react-router-dom'


function Navbar (){


      return (
              <div className={"navbar pt-5 p-1"}>

              <div className={"container flex flex-column justify-content-flex-end gap-5"}>
                  <div className={"nav-brand flex flex-column align-items-center"}>
                      <img src={logo} className={"logo"} alt="the logo" />
                      <h1 className={"slogan text-white"}>People Ops at Status</h1>
                  </div>
                  <nav className="flex justify-content-space-between h-100 w-100">
                      <ul className="list-style-type-none flex">
                          <li><Link to="#">DIRECT</Link></li>
                          <li><Link to="#">GET&nbsp;STARTED!</Link></li>
                          <li><Link to="#">PERKS</Link></li>
                          <li><Link to="#">WORKING&nbsp;HERE</Link></li>
                          <li><Link to="#">HEALTH</Link></li>
                          <li><Link to="#">TRAVEL</Link></li>
                          <li><Link to="#">HIRING</Link></li>
                          <li><Link to="#">TEAM&nbsp;LEAD&nbsp;MANUAL</Link></li>
                          <li><Link to="#">FINANCE</Link></li>
                      </ul>

                      <ul className="list-style-type-none flex ">
                              <li className=""><Link to="#" className="fab fa-facebook"></Link></li>
                              <li className=""><Link to="#" className="fab fa-github"></Link></li>
                              <li className=""><Link to="#" className="fas fa-wifi"></Link></li>


                      </ul>
                  </nav>
              </div>
              </div>
      )
}

export default Navbar