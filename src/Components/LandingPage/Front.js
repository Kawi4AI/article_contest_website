import React from 'react'

function Front(){

    return(
        <section className="home">
        <span className="bubble2"></span>
        <div className="scroll_to_top" onclick="scrollToTop()"><i className="fas fa-arrow-up"></i></div>
        <svg className="home_wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#c4e8f7" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <div className="left_home" data-aos="fade-right">
           <img src="images/owl_for_home.svg"/>
        </div>
        <div className="right_home">
            <h1 data-aos="fade-left" data-aos-delay="200">Article Contest</h1>
            <p data-aos="fade-left" data-aos-delay="500">A new opportunity for youths to practice<br/> <small>has been <span>arrived</span></small></p>
            <a href="#" style={{textDecoration:"none",color:"inherit"}}>
             <button data-aos="fade-up" data-aos-delay="700">
                    Submit Application Form
            </button>
            </a>
        </div>
    </section>
    )
}

export default Front