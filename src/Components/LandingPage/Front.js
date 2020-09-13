import React from 'react'

import { connect } from 'react-redux'

const form_link = "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAASkcDdhUNjY2MjlOWllQWFdQN0lTWEhLWlRGQzg4NC4u"

function Front(props) {

    return (
        <section className="home">
            <svg className="home_wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#c4e8f7" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className="left_home" data-aos="fade-right">
                <img src="images/owl_for_home.svg" className=".owl_for_home " />
            </div>
            <div className="right_home">
                {props.lan === "en" ?
                    <h1 data-aos="fade-left" data-aos-delay="200" style={{marginBottom:"30px"}}>
                        2020 Myanmar Election <br /> Article Contest 
                    </h1> :
                    <h1 data-aos="fade-left" data-aos-delay="200" style={{marginBottom:"30px"}}>
                        ၂၀၂၀ မြန်မာ့ရွေးကောက်ပွဲ <br /> ဆိုင်ရာ ဆောင်းပါးပြိုင်ပွဲ 
            </h1>
                }
                
                {props.lan === "en" ?
                    <a href={form_link} style={{ textDecoration: "none", color: "inherit" }}>
                        <button class="home_button_desktop" data-aos="fade-up" data-aos-delay="700">Submit Application Form</button>
                        <button class="home_button_mobile">Submit Application Form</button>
                    </a> :
                    <a href={form_link} style={{ textDecoration: "none", color: "inherit" }}>
                    <button class="home_button_desktop" data-aos="fade-up" data-aos-delay="700">လျှောက်လွှာတင်ရန်</button>
                    <button class="home_button_mobile">လျှောက်လွှာတင်ရန်</button>
                </a>
                }
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        lan: state.lan
    }
}

export default connect(mapStateToProps)(Front)