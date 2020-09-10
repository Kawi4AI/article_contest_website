import React from 'react'
import {Link} from 'react-router-dom'
import Post from '../Community/Post'

function OurCommunity(){

    return(
        <section className="our_community">
        <h1 data-aos="fade-up">Our Community</h1>
        <span className="bubble4"></span>
        <div className="our_community_main">
            <div className="sub_text" data-aos="fade-right">
                <p>Follow and See First<br/><span className="facebook_page_name">Kawi Facebook Page</span><br/>to know things<br/><span class="up_to_date">up-to-date</span></p>
            </div>
            <a href="#" style={{textDecoration:"none",color:"black"}} className="facebook_sample_post" data-aos="zoom-in">
                    <Post date="Aug 21"
                        content="Something about content Something about content Something about content Something about content Something about content"
                        image="images/logo.jpg"
                        likes={70}
                        comments={2}
                        shares={21}
                    />
            </a>
            <div className="explore_area" data-aos="fade-left">
                <Link to="/Community"><button>
                    Explore
                </button></Link>
            </div>
        </div>
    </section>
    )
}

export default OurCommunity