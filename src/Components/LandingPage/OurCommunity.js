import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

function OurCommunity(props) {

    return (
        <section className="our_community">
        <img className="wave_3" src="images/wave_3.svg" alt="Wave"></img>
        <h1 data-aos="fade-up">Our Community</h1>
        <div className="our_community_main">
            <img className="our_community_main_left" src="images/our_community.svg" alt="Community Pic" data-aos="fade-right"/>
            <div className="our_community_main_right" data-aos="fade-left">
                {props.lan === "en"?
                <p>
                    Follow our <br/>
                    <a href="https://www.facebook.com/datascienceandmachinelearning/" className="facebook_page_name" style={{textDecoration:"none"}}>
                    Kawi Facebook Page</a><br/>to catch up our activities<br/><span className="up_to_date">up-to-date</span>
                </p>:
                <p>
                ကျွန်တော်တို့ရဲ့ activities တွေကို အမြဲလေ့လာ၊ စောင့်ကြည့်နိုင်ဖို့ <br/>
                <a href="https://www.facebook.com/datascienceandmachinelearning/" className="facebook_page_name" style={{textDecoration:"none"}}>
                Kawi Facebook Page</a><br/>လေးကို Follow လုပ်ထားလိုက်ပါ။<br/><span className="up_to_date"></span>
            </p>
                }
                <Link to="/Community">
                   <button data-aos-delay="200">Explore</button>
                </Link>
            </div>
        </div>
    </section>
    )
}

const mapStateToProps = state => {
    return {
        lan: state.lan
    }
}

export default connect(mapStateToProps)(OurCommunity)