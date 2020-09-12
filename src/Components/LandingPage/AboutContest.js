import React from 'react'

function AboutContest(){

    return(
        <section className="about_the_contest">
        <h1 data-aos="fade-up">About The Contest</h1>
        <span className="bubble3"></span>
        <div className="about_the_contest_main">
            <div className="left_about_the_contest_main" data-aos="fade-right">
                <p>This is the contest about article writing. Everyone can participate and should be. We brought this to you to find out who is the most creative amidst the youths. We cannot wait to see who will be the winner. You?<br/>Then why not try
                    to play a role in the contest?</p>
                <a href="#">
                    <button>Make a Try</button>
                </a>
            </div>
            <img src="images/about_the_contest.svg" alt="About the Contest" className="about_the_contest_svg" data-aos="fade-left"/>
        </div>
    </section>
    )
}

export default AboutContest