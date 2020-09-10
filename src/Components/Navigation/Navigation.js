import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {

    React.useEffect(()=>{
        window.addEventListener("scroll", function() {
            document.querySelector(".header").classList.toggle("active", window.scrollY > 0);
            document.querySelector(".burger_nav_links").classList.remove("active", window.scrollY > 0);
            document.querySelector(".humbergur_menu").classList.remove("active", window.scrollY > 0);
            if (window.scrollY > 0) {
                document.querySelectorAll(".burger_nav_links li").forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = ``;
                    }
                });
            }
            //document.querySelector(".scroll_to_top").classList.toggle("active", window.scrollY > 300);
        });
        document.querySelector(".humbergur_menu").addEventListener("click", function() {
            document.querySelector(".burger_nav_links").classList.toggle("active");
            document.querySelector(".humbergur_menu").classList.toggle("active");
            document.querySelectorAll(".burger_nav_links li").forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ``;
                } else {
                    link.style.animation = `link_fade_in 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });
    },[])

    return (
        <nav className="header">
            <a href="#"><img src="./images/logo.png" alt="Kawi - ကဝိ" /></a>
            <ul className="nav_links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/Community">
                    <li>Community</li>
                </Link>
                <Link to="/Text Detection">
                    <li>Text-Detection</li>
                </Link>
            </ul>
            <div className="humbergur_menu">
                <div className="burger_line"></div>
                <div className="burger_line"></div>
                <div className="burger_line"></div>
            </div>
            <div className="switch"></div>
            <ul class="burger_nav_links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/Community">
                    <li>Community</li>
                </Link>
                <Link to="/Text Detection">
                    <li>Text-Detection</li>
                </Link>
                <div className="switch"></div>
            </ul>
        </nav>
    )
}

export default Navigation