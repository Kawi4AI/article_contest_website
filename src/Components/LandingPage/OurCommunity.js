import React from 'react'
import { Link } from 'react-router-dom'

function OurCommunity() {

    return (
        <section className="our_community">
        <img className="wave_3" src="images/wave_3.svg" alt="Wave"></img>
        <h1 data-aos="fade-up">Our Community</h1>
        <div className="our_community_main">
            <img className="our_community_main_left" src="images/our_community.svg" alt="Community Pic"/>
            <div className="our_community_main_right" data-aos="fade-left">
                <p>You can track us by following <br/><span className="facebook_page_name">Kawi Facebook Page</span><br/>to catch up things<br/><span className="up_to_date">up-to-date</span></p>
                <Link to="/Community">
                   <button data-aos-delay="200">Explore</button>
                </Link>
            </div>
        </div>
    </section>
    )
}

export default OurCommunity