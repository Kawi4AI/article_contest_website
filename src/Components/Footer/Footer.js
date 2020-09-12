import React from 'react'
import { Link } from 'react-router-dom'

function Footer(){

    return(
        <footer>
        <div class="left_footer">
            <a class="footer_logo" href="./index.html"><img src="./images/logo.png" alt="Kawi - ကဝိ"/></a>
            <ul>
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
        </div>
        <div class="right_footer">
            <div class="icons">
                <a href="mailto:kawiis4all@gmail.com" style={{color:"white"}}>
                    <i class="far fa-envelope"></i>
                </a>
                <a href="tel:09951716847" style={{color:"white"}}>
                <i class="fas fa-phone-alt"></i>
                </a>
                <a href="https://www.facebook.com/datascienceandmachinelearning/" style={{color:"white"}}>
                <i class="fab fa-facebook-square"></i>
                </a>
                <a href="https://www.linkedin.com/company/kawi" style={{color:"white"}}>
                <i class="fab fa-linkedin"></i>
                </a>
            </div>
            <div class="copyright">
                <p>Copyright © 2020.<br class="line_break"/> All rights reserved.</p>
            </div>
        </div>
    </footer>
    )
}

export default Footer