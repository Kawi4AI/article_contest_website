import React from 'react'
import { connect } from 'react-redux'

function JudgeSection(props) {

    return (
        <section className="judge_section">
            <h1 data-aos="fade-up">Judge Section</h1>
            {props.lan === "en"?
            <div className="judge_section_main">
                <div class="person_card" data-aos="fade-up">
                    <img src="images/DrHninAyeThant.jpg" alt="Person Info" />
                    <h2>Dr. Hnin Aye Thant</h2>
                    <p>Professor and Head (IST)</p>
                    <p>University of Technology (Yatanarpon Cyber City)</p>
                </div>
                <div class="person_card" data-aos="fade-up">
                    <img src="images/Htun Lin Kyaw.jpg" alt="Person Info" />
                    <h2>Dr. Htun Lin Kyaw</h2>
                    <p>Associate Professor (Myanmar Department)</p>
                    <p>University of Technology (Yatanarpon Cyber City)</p>
                </div>
                <div class="person_card" data-aos="fade-up">
                    <img src="images/DrHtweHtweNaing.jpg" alt="Person Info" />
                    <h2>Dr. Htwe Htwe Naing</h2>
                    <p>Associate Professor (Myanmar Department)</p>
                    <p>University of Technology (Yatanarpon Cyber City)</p>
                </div>
                <div class="person_card" data-aos="fade-up">
                    <img src="images/NYAN_LIN_HTET.jpg" alt="Person Info" />
                    <h2>Mr. Nyan Lin Htet</h2>
                    <p>Ministry of<br />foreign Affairs Myanmar</p>
                </div>
                <div class="person_card" data-aos="fade-up">
                    <img src="images/HtinKyawAye.jpeg" alt="Person Info" />
                    <h2>Mr. Htin Kyaw Aye</h2>
                    <p>Founder of Ananda Data</p>
                </div>
            </div> :
            <div class="judge_section_main">
                <div class="person_card" data-aos="fade-up" >
                    <img src="images/DrHninAyeThant.jpg" alt="Person Info" />
                    <h2>ဒေါက်တာ နှင်းအေးသန့်</h2>
                    <p>ဌာနမှုး(သတင်းအချက်အလက် နှင့်နည်းပညာဌာန)</p>
                    <p>နည်းပညာတက္ကသိုလ် (ရတနာပုံဆိုက်ဘာစီးတီး)</p>
                </div>
                <div class="person_card" data-aos="fade-up">
                    <img src="images/Htun Lin Kyaw.jpg" alt="Person Info" />
                    <h2>ဒေါက်တာထွန်းလင်းကျော်</h2>
                    <p>တွဲဖက်ပါမောက္ခ<br />(မြန်မာစာဌာန)</p>
                    <p>နည်းပညာတက္ကသိုလ်<br />(ရတနာပုံဆိုက်ဘာစီးတီး)</p>
                </div>
                <div class="person_card" data-aos="fade-up">
                    <img src="images/DrHtweHtweNaing.jpg" alt="Person Info" />
                    <h2>ဒေါက်တာ ထွေးထွေးနိုင်</h2>
                    <p>တွဲဖက်ပါမောက္ခ<br />(မြန်မာစာဌာန)</p>
                    <p>နည်းပညာတက္ကသိုလ်<br />(ရတနာပုံဆိုက်ဘာစီးတီး)</p>
                </div>
                <div class="person_card" data-aos="fade-up">
                    <img src="images/NYAN_LIN_HTET.jpg" alt="Person Info" />
                    <h2>ဦးဉာဏ်လင်းထက်</h2>
                    <p>နိုင်ငံခြားရေးဝန်ကြီးဌာန</p>
                </div>
                <div class="person_card" data-aos="fade-up">
                    <img src="images/HtinKyawAye.jpeg" alt="Person Info" />
                    <h2>ဦးထင်ကျော်အေး</h2>
                    <p>Ananda Data တည်ထောင်သူ</p>
                </div>
            </div>
            }
        </section>
    )
}

const mapStateToProps = state => {
    return {
        lan: state.lan
    }
}

export default connect(mapStateToProps)(JudgeSection)