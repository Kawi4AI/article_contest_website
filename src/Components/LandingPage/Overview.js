import React from 'react'
import { connect } from 'react-redux'

function Overview(props) {

    return (
        <section className="overview" data-aos="fade-in">
            <h1 >Overview</h1>
            {props.lan === "en" ?
                <div className="overview_main" data-aos="fade-in" style={{wordWrap:"break-word"}}>
                    <p ><span className="header_span">Awards</span>
                        <br/>
                        <ul style={{ marginLeft:"20px"}}>
                            <li> First Prize - 100,000KS </li>
                            <li> Second Prize - 70,000KS </li>
                            <li> Third Prize - 50,000KS</li>
                        </ul>
                    </p>
                    <p ><span className="header_span">Application Period</span> 
                        <br/>
                        <ul style={{ marginLeft:"20px"}}>
                            <li> 15th September, 2020 - 30th September 2020</li>
                        </ul>
                    </p>
                    <p ><span className="header_span">Qualification Requirements</span>
                        <br/>
                        <ul style={{ marginLeft:"20px"}}>
                            <li>Between 18 years and 25 years before 30th September 2020.</li>
                        </ul>
                    </p>
                    <p ><span className="header_span">Application Method</span>
                        <br /> 
                        <ul style={{ marginLeft:"20px"}}>
                            <li>Application from Kawi Facebook Page and Kawi official website</li>
                        </ul>
                    </p>
                    <p ><span className="header_span">Scoring Criteria</span>
                        <br /> 
                        <ul style={{ marginLeft:"20px"}}>
                             <li>Original creativity - It must be your own articles with own idea that no one has been created before.</li>
                             <li>Completion - Completion of the specified number of words.</li>
                             <li>Accuracy - Accuracy of information.</li>
                             <li>No hate speech.</li>
                        </ul>
                    </p>
                    <p ><span className="header_span">Result Announcement</span>
                        <br/> 
                        <ul style={{ marginLeft:"20px"}}>
                            <li>We will be announced at the virtual competition and award ceremony held on 25th October 2020.</li>
                        </ul>
                    </p>
                    <p ><span className="header_span">Rules and Restrictions</span>
                        <br/> 
                        <ul style={{ marginLeft:"20px"}}>
                            <li>An applied article must not be published before Kawi's article contest. It also must not be another person's article ( Article must be your article created with your own idea ).</li>
                            <li>It must not contain information about campaigning for political parties.</li>
                            <li>It must not contain Hate speech.</li>
                            <li>Only young people between the ages of 18 and 25 (boys, girls, and disabilities) can compete.</li>
                        </ul>
                    </p>
                </div> :
                <div className="overview_main" data-aos="fade-in" style={{wordWrap:"break-word"}} >
                    <p ><span className="header_span" >ဆုအမျိုးအစား</span> <br/>
                        <ul style={{marginLeft:"20px"}}>
                            <li > ပထမဆု-၁၀၀,၀၀၀ ကျပ် </li>
                            <li > ဒုတိယဆု-၇၀,၀၀၀ ကျပ် </li>
                            <li > တတိယဆု-၅၀,၀၀၀ ကျပ်</li>
                        </ul>
                    </p>
                    <p ><span className="header_span">ဆောင်းပါး တင်ရန်လက်ခံကာလ</span> <br/>
                    <ul style={{marginLeft:"20px"}}>
                        <li>စက်တင်ဘာလ ၊ ၁၅ရက် ၊ ၂၀၂၀ (အင်္ဂါနေ့) မှ စက်တင်ဘာလ ၊ ၃၀ရက် ၊ ၂၀၂၀ (ဗုဒ္ဓဟူးနေ့) အထိ။</li>
                    </ul>
                    </p>
                    <p ><span className="header_span">လိုအပ်ချက်များ </span>
                        <br /> 
                        <ul style={{marginLeft:"20px"}}>
                            <li>အသက် ၁၈ နှစ်မှ မှ ၂၅ နှစ်အတွင်း လူငယ်များသာ။</li>
                        </ul>
                    </p>
                    <p ><span className="header_span">ဆောင်းပါး တင်ရန် နည်းလမ်း</span>
                        <br /> 
                        <ul style={{marginLeft:"20px"}}>
                            <li>က၀ိ-KaWi Page ရှိ Application Form မှ တစ်ဆင့် မိမိ ဆောင်းပါး အား လျှောက်ထားနိုင်ပါသည်။</li>
                        </ul>
                    </p>
                    <p ><span className="header_span">ဆုရွေးချယ်မည့် ပုံစံ</span>
                        <br />
                        <ul style={{marginLeft:"20px"}}>
                            <li>ကိုယ်ပိုင်ဖန်တီးမှုစွမ်းရည်ရှိခြင်း။</li>
                            <li>သတ်မှတ်ထားသောစာလုံးအရေအတွက် ပြည့်မှီခြင်း။</li>
                            <li>သတင်းအချက်အလက်မှန်ကန်ခြင်း။</li>
                            <li>အမုန်းစကားများမပါဝင်ခြင်း။</li>
                            <li>အကြောင်းအရာစုံလင်ပြီး အကြောင်းပြချက်မှန်ကန်ခြင်း။</li>
                        </ul>
                        </p>
                    <p ><span className="header_span">Result ထုတ်ပြန်မည့်နေ့</span>
                        <br/> 
                        <ul style={{marginLeft:"20px"}}>
                            <li>၂၀၂၀ အောက်တိုဘာလ ၂၅ ရက်‌နေ့တွင် ကျင်းပမည့် Online Conference တွင် ဆုများကို ကြေငြာပေးသွားပါမည်။</li>
                        </ul>
                        </p>
                    <p ><span className="header_span">စည်းမျဉ်း စည်းကမ်းများနှင့် လိုက်နာရမည့် အချက်များ -</span>
                        <br/> 
                        <ul style={{marginLeft:"20px"}}>
                            <li>အခြား မည်သည့်နေရာများတွင်မှ အသုံးပြုထားခြင်း မရှိသော ဆောင်းပါးများ ဖြစ်ရပါမည်။ လျှောက်လွှာတင်ထားသော ဆောင်းပါးများသည် သင့်ကိုယ်ပိုင် အတွေးအခေါ်နှင့် သင့်ကိုယ်တိုင် ဖန်တီးမှု ဖြစ်ရပါမည်။</li>
                            <li>နိုင်ငံရေးပါတီများနှင့်ပါတ်သတ်၍မဲဆွယ်သည့်အကြောင်းမဖြစ်ရပါ။</li>
                            <li>အမုန်းစကားများဖြန့်၀ေသော ဆောင်းပါးများမဖြစ်ရပါ။</li>
                            <li>အသက် ၁၈ နှစ်မှ မှ ၂၅ နှစ်အတွင်း လူငယ်များ သာလျှင် ဝင်ရောက်ယှဉ်ပြိုင်နိုင်သည်။</li>
                        </ul>
                    </p>
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

export default connect(mapStateToProps)(Overview)