import { NavLink } from "react-router-dom";

export default function Navbar() {





    return (
        <>
            <nav className="custom_nav">
                <ul>
                    <NavLink to="/" className="nav_link" >Home</NavLink>
                    <NavLink to="/posts" className="nav_link" >Posts</NavLink>
                </ul>
            </nav>
        </>
    )
}