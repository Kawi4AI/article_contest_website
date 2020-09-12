import React from 'react'

function OurPartners(){

    return(
        <section className="our_partners">
        <h1 data-aos="fade-up">Our Partner</h1>
        <div className="our_partners_main">
            <a href="https://web.facebook.com/Data-Science-and-Machine-Learning-Club-1040813982778915"
               style={{textDecoration:"none"}}>
            <img src="images/DataScienceAndMachineLearningClub.png" alt="Partners" data-aos="fade-right"/>
            </a>
            <h2 style={{textAlign:"center",fontSize:"25px"}} data-aos="fade-left">
                <a href="https://web.facebook.com/Data-Science-and-Machine-Learning-Club-1040813982778915" 
                   style={{textDecoration:"none"}}>
                Data Science And<br/> Machine Learning Club <br/>(UTYCC)
                </a>
            </h2>
        </div>
       </section>
    )
}

export default OurPartners