import React from 'react'
import styled from 'styled-components'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

const Form = styled.form`
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
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
    border-radius: 4px;

    &:hover{
        box-shadow: 0px 0px 10px -3px rgba(150,150,150,1);
    }
`
const Button = styled.button`
    min-width: ${props => props.submit ? "120px" : "70px"};
    margin: auto;
    margin-top: 20px;
    display: block;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    box-shadow: 0px 0px 5px -3px rgba(150,150,150,1);
    padding: 10px;
    font-size: 16px;
    background: ${props => props.close ? "white" : "#F5B553"};
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
    padding-top: 130px;
    padding-bottom: 30px;
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
    margin-top: -350px;
	padding: 30px;
	background-color: white;
	border-radius: 4px;
	box-shadow: 0 0 50px rgba(black,0.5);
    z-index: 20;
    
    & > span{
        text-align: center;
        display: block;
    }
    & > div{
        display: flex;
    }
`

function TextDetection() {

    const [text, setText] = React.useState('');
    const [result, setResult] = React.useState();
    const [showModal, setShowModal] = React.useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setText(e.target.value);
    }

    const handleCheck = (e) => {
        e.preventDefault();

        let temp = text.replace(/[\s\[\]!,*)@#%(&$_?.^"။၊]/g, '')
            .match(/(([a-zA-Z0-9]+)|[က-အ|ဥ|ဦ](င်္|[က-အ][့း]*[်]|္[က-အ]|[ါ-ှ]){0,}|.)/g)

        console.log(temp)

        setResult(temp)
        setShowModal(true)
    }

    return (
        <div >
            <Navigation />

            <Form onSubmit={e => handleCheck(e)}>

                <Header>
                    Text-Detection
                </Header>

                <Label>
                    -Your article has to be written in Unicode format.
                    If not, you can convert here <a href="https://www.rabbit-converter.org/Rabbit/">Rabbit Converter</a>
                    <br />
                    -Copy and Paste your article below & Click Check Button
                </Label>

                <TextArea rows="10" placeholder="Text..." required
                    onChange={e => handleChange(e)} autoFocus />

                <Button type="submit" submit>
                    Check
                </Button>

                {result && showModal &&
                    <div>
                        <ModalOverlay onClick={e => setShowModal(false)} />
                        <Modal className="animate__animated animate__slideInDown animate__fast">
                            <span style={{ fontSize: "17px" }}>
                                Word count : {result.length}
                            </span>
                            <div>
                                <Button onClick={e => setShowModal(false)} close>OK</Button>

                                <Button>
                                    <a href="#" style={{ textDecoration: "none", color:"inherit" }}>
                                        Submit Article
                                    </a>
                                </Button>
                            </div>
                        </Modal>
                    </div>
                }
            </Form>
            <Footer />
        </div >
    )
}

export default TextDetection