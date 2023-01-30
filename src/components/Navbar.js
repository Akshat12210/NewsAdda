import React from 'react'
import { Link, useLocation } from 'react-router-dom'
const Navbar = (props) => {

    const location = useLocation();
    const path=location.pathname;
    return (
        <div>
            <nav  className={`navbar fixed-top  navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
                <div className="container-fluid">
                    <Link className="navbar-brand" style={{ color: '#F05454' }} to="/">NewsAdda</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 me-auto">
                            <li className="nav-item">
                                <Link className={`nav-link ${path === '/'? 'fw-bold' : ''} text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${path === '/business'? 'fw-bold' : ''} text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${path === '/entertainment'? 'fw-bold' : ''} text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${path === '/general'? 'fw-bold' : ''} text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${path === 'health'? 'fw-bold' : ''} text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${path === '/science'? 'fw-bold' : ''} text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${path === '/sports'? 'fw-bold' : ''} text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${path === '/technology'? 'fw-bold' : ''} text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/technology">Technology</Link>
                            </li>
                        </ul>
                        {/* <form class="form my-2 my-lg-0 ms-auto">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="form btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form> */}
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={props.toggle} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked"> {props.mode === 'light' ? 'Enable ' : 'Disable'} Dark mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar