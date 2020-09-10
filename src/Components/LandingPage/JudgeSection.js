import React from 'react'

function JudgeSection(){
   
    return(
        <section className="judge_section">
        <h1 data-aos="fade-up">Judge Section</h1>
        <div className="judge_section_main">
            <div className="person_card" data-aos="fade-up">
                <img src="images/google_ceo.png" alt="Person Info"/>
                <h2>Sundar Pichai</h2>
                <p>CEO of Alphabet</p>
            </div>
            <div className="person_card" data-aos="fade-up">
                <img src="images/apple_ceo.jpg" alt="Person Info"/>
                <h2>Tim Cook</h2>
                <p>CEO of Apple</p>
            </div>
            <div className="person_card" data-aos="fade-up">
                <img src="images/spacex_ceo.jpg" alt="Person Info"/>
                <h2>Elon Musk</h2>
                <p>CEO of SpaceX</p>
            </div>
            <div className="person_card" data-aos="fade-up">
                <img src="images/twitter_ceo.jpg" alt="Person Info"/>
                <h2>Jack Dorsey</h2>
                <p>CEO of Twitter</p>
            </div>
            <div className="person_card" data-aos="fade-up">
                <img src="images/microsoft_ceo.jpg" alt="Person Info"/>
                <h2>Satya Nadella</h2>
                <p>CEO of Microsoft</p>
            </div>
            <div className="person_card" data-aos="fade-up">
                <img src="images/facebook_ceo.jpg" alt="Person Info"/>
                <h2>Mark Zuckerberg</h2>
                <p>CEO of Facebook</p>
            </div>
        </div>
    </section>
    )
}

export default JudgeSection