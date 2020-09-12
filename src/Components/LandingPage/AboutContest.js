import React from 'react'
import { connect } from 'react-redux'

function AboutContest(props) {

    return (
        <section className="about_the_contest">
            <h1 data-aos="fade-up">About The Contest</h1>
            <span className="bubble3"></span>
            <div className="about_the_contest_main">
                <div className="left_about_the_contest_main" data-aos="fade-right">
                    {props.lan === "en" ?
                        <p style={{width:"100%",wordWrap:"break-word"}}>
                            "Article contest 2020" held by ကဝိ-Kawi aims at gentle reminding the youth first voters not to be the preys of political hate speech spreading and perceiving the reliable information of electoral issues. This is a good opportunity to achieve the rewards and also, to mitigate the electoral hate speech and misinformation. The articles of the applicants will be examined by 'ကဝိ-Kawi Myanmar Hate Speech Detection Engine' in order to choose the best articles. Thus, as an independent platform which allows the young people's creative writing and strong attitudes on Myanmar political affairs, we are waiting for your genuine articles.
                        </p> :
                        <p style={{width:"100%",wordWrap:"break-word"}}>
                             ကဝိ(KaWi)မှပြုလုပ်ကျင်းပသော"၂၀၂၀ရွေးကောက်ပွဲဆိုင်ရာဆောင်းပါးပြိုင်ပွဲ"သည်လာမည့်၂၀၂၀အထွေထွေရွေးကောက်ပွဲတွင်အသက်၁၈နှစ်ပြည့်ပြီးနှင့်အထက်ပထမဆုံးအကြိမ်စတင်မဲပေးကြမည့်လူငယ်၅သန်းခန့်အားရွေးကောက်ပွဲဆိုင်ရာအမုန်းစကားဖြန့်ဝေသူများ၏သားကောင်မဖြစ်စေရန်နှင့်ရွေးကောက်ပွဲဆိုင်ရာသတင်းအချက်အလက်များမှန်ကန်စွာသိရှိနိုင်ရေးအတွက်ရည်ရွယ်၍ကျင်းပပေးခြင်းဖြစ်ပါသည်။ဝင်ရောက်ယှဉ်ပြိုင်လာသည့်မြန်မာဆောင်းပါးများအား'ကဝိ'မြန်မာစာအမုန်းစကားDetectionEngineဖြင့်လည်းစစ်ဆေးကာအကောင်းဆုံးဆောင်းပါးများကိုရွေးချယ်သွားမည်ဖြစ်သောကြောင့်ဆုကြေးအပြင်ရွေးကောက်ပွဲဆိုင်ရာအမုန်းစကားများ၊သတင်းအမှားများအားလျော့ချနိုင်မည့်အခွင့်ကောင်းတစ်ခုဖြစ်ပါသည်။လူငယ်များ၏ရွေးကောက်ပွဲအတွေးအမြင်နှင့်တီထွင်ရေးသားဖန်တီးနိုင်စွမ်းများကိုမျှဝေနိုင်မည့်နေရာတစ်ခုအဖြစ်သင့်ရဲ့ဆောင်းပါးများကိုစောင့်မျှော်နေပါသည်။
                        </p>
                    }
                    
                </div>
                <img src="images/about_the_contest.svg" alt="About the Contest" className="about_the_contest_svg" data-aos="fade-left" />
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        lan: state.lan
    }
}

export default connect(mapStateToProps)(AboutContest)

