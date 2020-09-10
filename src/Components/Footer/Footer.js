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
                <i class="far fa-envelope"></i>
                <i class="fas fa-phone-alt"></i>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-linkedin"></i>
            </div>
            <div class="copyright">
                <p>Copyright © 2020.<br class="line_break"/> All rights reserved.</p>
            </div>
        </div>
    </footer>
    )
}

export default Footer