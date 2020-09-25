import React from 'react'
import styled from 'styled-components'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import {connect} from 'react-redux'

const max_count = 2500
const min_count = 1600
const form_link = "https://docs.google.com/forms/d/e/1FAIpQLSee8eOreVH-vwZfdqECSM0Ja655Wa1UC7NzEHSKfF_mVPzVgQ/viewform"

const Form = styled.form`
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
    min-height: 90vh;
    @media (max-width: 450px){
        width: 90%;
    }
`
const TextArea = styled.textarea`
    resize: vertical;
    padding: 10px;
    margin-top: 20px;
    border: 1px solid #e6e6e6;
    box-shadow: 0px 0px 5px -3px rgba(150,150,150,1);
    border-radius: 14px;

    &:hover{
        box-shadow: 0px 0px 10px -3px rgba(150,150,150,1);
    }
`
const Button = styled.button`
    min-width: ${props => props.submit ? "120px" : "100px"};
    margin: auto;
    margin-top: 20px;
    display: block;
    border: 1px solid #e6e6e6;
    border-radius: 14px;
    box-shadow: 0px 0px 5px -3px rgba(150,150,150,1);
    padding: 15px;
    font-size: 16px;
    background: ${props => props.close ? "linear-gradient(315deg, #e6e6e6, #ffffff)" : "#F5B553"};
    letter-spacing: 1px;

    &:hover{
        box-shadow: 0px 0px 10px -3px rgba(150,150,150,1);
    }
    &:active{
        position: relative;
        top: 1px;
    }
`
const Label = styled.label`
    font-size: 17px;
    margin-top: 10px;
    color: #404040;
`
const Header = styled.h1`
    text-align: center;
    padding-top: 100px;
    padding-bottom: 10px;
`
const ModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: black;
    opacity: 0.7;
`
const Modal = styled.div`
    position: relative;
	width: 300px;
	height: auto;
    margin: auto;
    margin-top: -370px;
    padding: 10px;
    padding-top: 30px;
    padding-bottom: 30px; 
	background-color: white;
	border-radius: 4px;
	box-shadow: 0 0 50px rgba(black,0.5);
    z-index: 20;
    
    & > span{
        text-align: center;
        display: block;
    }
    
`

function TextDetection(props) {

    const [text, setText] = React.useState('');
    const [result, setResult] = React.useState();
    const [showModal, setShowModal] = React.useState(false);

    React.useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const handleChange = (e) => {
        e.preventDefault();
        setText(e.target.value);
    }

    const handleCheck = (e) => {
        e.preventDefault();

        let temp = text.replace(/[\[\]•:;\/\->|{}+-]/g,'')
                        .replace(/[<!,"\'*)@#%(&$_?.^"။၊]/g,'')
                        .match(/(([a-zA-Z0-9]+)|[က-အ|ဥ|ဦ](င်္|[က-အ][့း]*[်]|္[က-အ]|[ါ-ှ]){0,}|.)/g)
                        .filter(char => char !== " ")
                        
        console.log(temp)

        setResult(temp)
        setShowModal(true)
    }

    return (
        <div >
            <Navigation />

            <Form onSubmit={e => handleCheck(e)}>

                <Header>
                    {props.lan === "en"? "Word Count" : "စာလုံးရေ စစ်ဆေးခြင်း"}
                </Header>

                {props.lan === "en"?
                <Label>
                    <span style={{color:"red"}}>*</span>Your article has to be written in Unicode format.
                    If not, you can convert here: <a href="https://www.rabbit-converter.org/Rabbit/">Rabbit Converter</a>
                </Label>:
                <Label>
                    <span style={{color:"red"}}>*</span>သင့်၏ဆောင်းပါးသည် Unicode စနစ်ဖြင့်ရေးသားထားရမည်ဖြစ်သည်။
                     Unicode ပြောင်းရန် :<a href="https://www.rabbit-converter.org/Rabbit/">Rabbit Converter</a>
                </Label>
                }

                <TextArea rows="10" placeholder="Text..." required
                    onChange={e => handleChange(e)} autoFocus />

                <Button type="submit" submit>
                    Check
                </Button>

                {result && showModal &&
                    <div>
                        <ModalOverlay onClick={e => setShowModal(false)} />
                        <Modal className="animate__animated animate__slideInDown animate__fast">
                            {props.lan === "en"?
                            <div style={{ fontSize: "15px",textAlign:"center" }}>
                                <span style={{fontWeight:"bold",fontSize:"16px"}}>
                                    Word Count : {result.length}
                                </span> <br/>
                                {
                                result.length>max_count?
                                 `Word count limit is over (${max_count})`:
                                result.length<min_count?
                                 `Word count should be at least ${min_count}`: 
                                 "Your word count is OK!"
                                }
                            </div>:
                            <div style={{ fontSize: "15px",textAlign:"center" }}>
                                <span style={{fontWeight:"bold",fontSize:"16px"}}>
                                    စာလုံးရေ {result.length} လုံး
                                </span><br/>
                                {
                                result.length>max_count?
                                 `စာလုံးရေအများဆုံး ${max_count}လုံးကို ကျော်နေသည်`:
                                result.length<min_count?
                                 `စာလုံးရေအနည်းဆုံး ${min_count}လုံး ပြည့်ရမည်`
                                 :"စာလုံးရေပြည့်သည်!"
                                }
                            </div>
                            }
                            <div style={{display:"flex"}}>
                                <Button onClick={e => setShowModal(false)} close>OK</Button>

                                {result.length <= max_count && result.length >= min_count &&
                                <Button>
                                    <a href={form_link} style={{ textDecoration: "none", color:"inherit" }}>
                                        {props.lan === "en"?
                                         "Next" : "ဆက်ရန်"
                                        }
                                    </a>
                                </Button>
                                 } 
                            </div>
                        </Modal>
                    </div>
                }
            </Form>
            <Footer />
        </div >
    )
}

const mapStateToProps = state => {
    return {
        lan: state.lan
    }
}

export default connect(mapStateToProps)(TextDetection)