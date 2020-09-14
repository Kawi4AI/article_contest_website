import React from 'react'
import {connect} from 'react-redux'

function AboutUs(props) {

    return (
        <section className="about_us">
            <h1 data-aos="fade-up">About Us</h1>
            <img className="wave_2" src="images/wave_2.svg" alt="Wave 2" />
            {/* <div className="about_us_main">
                <div className="pic_showcase">
                    <img className="person_avatar" src="images/avatar.svg" alt="Avatar"/>
                    <img className="person_avatar" src="images/avatar.svg" alt="Avatar"/>
                    <img className="person_avatar" src="images/avatar.svg" alt="Avatar"/>
                    <img className="person_avatar" src="images/avatar.svg" alt="Avatar"/>
                    <img className="person_avatar" src="images/avatar.svg" alt="Avatar"/>
                    <img className="person_avatar" src="images/avatar.svg" alt="Avatar"/>
                </div>
                <div className="about_us_paragraph" style={{wordWrap:'break-word'}}>
                "ကဝိ"ဆိုတဲ့လူငယ်တွေနဲ့ဖွဲ့စည်းထားတဲ့အဖွဲ့အစည်းလေးဟာဆိုရင်ဇွန်လ၁၉ရက်နေ့၂၀၂၀ပြည့်နှစ်တွင်စတင်အကောင်ထည်ဖော်ခဲ့ပြီး 
                မြန်မာနိုင်ငံရဲ့(Artificial Intelligence)နဲ့(Data Science Startup)လေးတစ်ခုအဖြစ်ယနေ့တိုင်ရပ်တည်လျက်ရှိပါတယ်။ 
                ကဝိရဲ့ဦးတည်ချက်ဟာဆိုရင်လူငယ်တွေပေါင်းစပ်ပါဝင်ဖွဲ့စည်းထားတဲ့အဖွဲ့အစည်းတစ်ခုဖြစ်တဲ့အလျောက်မြန်မာ့လူငယ်တွေရဲ့AIနဲ့ပတ်သက်တဲ့ 
                စွမ်းဆောင်ရည်ကိုတိုးပွားစေဖို့နဲ့Myanmarနိုင်ငံIT Industryအတွက်အကောင်းဆုံးAI solutionတွေကိုဖြန့်ဝေသွားဖို့ရာဖြစ်တာမို့ 
                Kawi memberများကနေလည်းအကောင်းဆုံးလုပ်ဆောင်လျက်အကောင်ထည်ဖော်နေကြပါတယ်။
                "ကဝိ"ဟာ၁၈-၂၅နှစ်အတွင်းရှိတဲ့လူငယ်Employees(include Volunteers)၃၀ကျော်ဖြင့်လှုပ်ရှားနေသောStartupတစ်ခုလည်း
                 ဖြစ်တာမို့န‌ည်းပညာကိုစိတ်အားထက်သန်ပြီးအပြောင်းအလဲကိုလိုချင်နေတဲ့လူငယ်တွေကိုလက်တွဲခေါ်ဆောင်ဖို့ရာအမြဲဝဲလ်ကမ်းဖြစ်ပါတယ်။
                  ယခုဆိုရင်"ကဝိ"ကနေဦးစီးကျင်းပပေးမယ့်non-profit Article Contestလေးကလည်းလူငယ်တွေကြားရောက်လာပြီမို့ 
                  လူငယ်တွေအနေနဲ့လည်း"ကဝိ"နဲ့ ပူးပေါင်းပြီးDigitalခေတ်၊Informationခေတ်ကိုအတူတူလှမ်းကြဖို့ဖိတ်ခေါ်ပါတယ်။
                </div>
            </div> */}
            {props.lan === "en" ?
                <div style={{
                    margin: "auto", wordWrap: "break-word", width: "90%", textAlign: "center",
                    background: "linear-gradient(315deg, #e6e6e6, #ffffff)", padding: "15px", borderRadius: "15px", 
                    fontSize: "17px", backgroundColor: "#08f",color: "black", paddingTop: "30px", paddingBottom: "30px",
                     lineHeight: "1.8em", boxShadow: "0px 0px 10px -3px rgba(150,150,150,1)",minHeight:"300px",
                     maxWidth:"500px",position:"relative",marginBottom: "70px" }}
                    data-aos="fade-up">
                     Kawi, a Myanmar's Artificial Intelligence and Data Science startup, is established on 19 June 
                     of the year 2020.
                   <br/> We analyzed the best contributions we can make based on our passion and targeted 
                    onto that ideas: that is destined for giving the best AI solutions to our industries and 
                    encouraging the AI skills and capacities of Myanmar's youth.
               </div>:
                <div style={{
                    margin: "auto", wordWrap: "break-word", width: "90%", textAlign: "center",
                    background: "linear-gradient(315deg, #e6e6e6, #ffffff)", padding: "15px", borderRadius: "15px", 
                    fontSize: "17px", backgroundColor: "#08f", color: "black", paddingTop: "30px", paddingBottom: "30px",
                    lineHeight: "1.8em", boxShadow: "0px 0px 10px -3px rgba(150,150,150,1)",position:"relative",
                    marginBottom: "70px"}}
                    data-aos="fade-up">
                    "ကဝိ" ဆိုတဲ့ လူငယ်တွေနဲ့ ဖွဲ့စည်းထားတဲ့ အဖွဲ့အစည်းလေးဟာ ဆိုရင် ဇွန်လ ၁၉ ရက်နေ့ ၂၀၂၀ ပြည့်နှစ်တွင် စတင် အကောင်ထည်ဖော်ခဲ့ပြီး
                    မြန်မာနိုင်ငံရဲ့ Artificial Intelligence နဲ့ Data Science Startup လေးတစ်ခု အဖြစ် ယနေ့တိုင် ရပ်တည်လျက်ရှိပါတယ်။
                    ကဝိရဲ့ ဦးတည်ချက်ဟာ ဆိုရင် လူငယ်တွေ ပေါင်းစပ်ပါဝင် ဖွဲ့စည်းထားတဲ့ အဖွဲ့အစည်းတစ်ခု ဖြစ်တဲ့အလျောက် မြန်မာ့လူငယ်တွေရဲ့ 
                    AI နဲ့ ပတ်သက်တဲ့ စွမ်းဆောင်ရည်ကို တိုးပွားစေဖို့နဲ့ Myanmarနိုင်ငံ IT Industry အတွက်အကောင်းဆုံး AI solution တွေကို
                    ဖြန့်ဝေသွားဖို့ရာ ဖြစ်တာမို့ Kawi member များကနေလည်း အကောင်းဆုံး လုပ်ဆောင်လျက် အကောင်ထည်ဖော် နေကြပါတယ်။ 
                    "ကဝိ"ဟာ ၁၈-၂၅နှစ် အတွင်းရှိတဲ့ လူငယ် Employees(include Volunteers) ၃၀ကျော်ဖြင့် လှုပ်ရှားနေသော Startup
                    တစ်ခုလည်း ဖြစ်တာမို့ န‌ည်းပညာကို စိတ်အားထက်သန်ပြီး အပြောင်းအလဲကို လိုချင်နေတဲ့ လူငယ်တွေကို လက်တွဲခေါ်ဆောင်ဖို့ရာ
                    အမြဲဝဲလ်ကမ်း ဖြစ်ပါတယ်။ ယခုဆိုရင် "ကဝိ"ကနေ ဦးစီးကျင်းပပေးမယ့် non-profit Article Contest လေးကလည်း
                    လူငယ်တွေကြား ရောက်လာပြီမို့ လူငယ်တွေအနေနဲ့လည်း "ကဝိ" နဲ့ပူးပေါင်းပြီး Digitalခေတ်၊ Information ခေတ်ကို
                    အတူတူလှမ်းကြဖို့ ဖိတ်ခေါ်ပါတယ်။
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

export default connect(mapStateToProps)(AboutUs)