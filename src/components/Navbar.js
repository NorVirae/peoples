import logo from '../assets/images/logo.svg';



function Navbar (){


      return (
            <nav>
              <div className={"nav-brand"}>
                <img src={logo} className={"logo"} alt="the logo" />
                <p className={"slogan"}>People Ops at Status</p>
              </div>

              <div className={"navbar"}>
                <ul className="">
                  <li>DIRECT</li>
                  <li>GET STARTED!</li>
                  <li>PERKS</li>
                  <li>WORKING HERE</li>
                  <li>HEALTH</li>
                  <li>TRAVEL</li>
                  <li>HIRING</li>
                  <li>TEAM LEAD MANUAL</li>
                  <li>FINANCE</li>

                </ul>

              </div>
            </nav>)
}

export default Navbar