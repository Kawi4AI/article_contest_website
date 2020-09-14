import React from 'react'
import { Link } from 'react-router-dom'
import Switch from 'react-switch'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'

function Navigation(props) {

    //const [language, setLanguage] = React.useState(props.lan)

    React.useEffect(() => {
        window.addEventListener("scroll", function () {
            document.querySelector(".header").classList.toggle("active", window.scrollY > 0);
            document.querySelector(".burger_nav_links").classList.remove("active", window.scrollY > 0);
            document.querySelector(".humbergur_menu").classList.remove("active", window.scrollY > 0);
            if (window.scrollY > 0) {
                document.querySelectorAll(".burger_nav_links li").forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = ``;
                    }
                });
            }
            //document.querySelector(".scroll_to_top").classList.toggle("active", window.scrollY > 300);
        });
        document.querySelector(".humbergur_menu").addEventListener("click", function () {
            document.querySelector(".burger_nav_links").classList.toggle("active");
            document.querySelector(".humbergur_menu").classList.toggle("active");
            document.querySelectorAll(".burger_nav_links li").forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ``;
                } else {
                    link.style.animation = `link_fade_in 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });


    }, [])

    

    // const handleLanguage = () => {
    //     language === "mm" ? setLanguage("en") : setLanguage("mm")
    //     props.onLanguageChange(language)
    // }

    return (<>
        <nav className="header">
            <a href="#"><img src="./images/logo.png" alt="Kawi - ကဝိ" /></a>
            <ul className="nav_links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/Community">
                    <li>Community</li>
                </Link>
                <Link to="/Text Detection">
                    <li>Text-Detection</li>
                </Link>
                <Switch
                    checked={props.lan === "en"}
                    onChange={() => props.onLanguageChange(props.lan)}
                    uncheckedIcon={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 15,
                                color: "white",
                                paddingRight: 5
                            }}
                        >MM</div>
                    }
                    checkedIcon={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 15,
                                color: "white",
                                paddingLeft: 5
                            }}
                        >ENG</div>
                    }
                    handleDiameter={28}
                    offColor="#08f"
                    onColor="#08f"
                    offHandleColor="#0ff"
                    onHandleColor="#0ff"
                    height={40}
                    width={80}
                />
            </ul>
            <div className="humbergur_menu">
                <div className="burger_line"></div>
                <div className="burger_line"></div>
                <div className="burger_line"></div>
            </div>
            {/* <div className="switch"></div> */}
        </nav>
        <ul className="burger_nav_links">
            <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/Community">
                    <li>Community</li>
                </Link>
                <Link to="/Text Detection">
                    <li>Text-Detection</li>
                </Link>
            <Switch
                checked={props.lan === "en"}
                onChange={() => props.onLanguageChange(props.lan)}
                uncheckedIcon={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 15,
                            color: "white",
                            paddingRight: 5
                        }}
                    >MM</div>
                }
                checkedIcon={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 15,
                            color: "white",
                            paddingLeft: 5
                        }}
                    >ENG</div>
                }
                handleDiameter={28}
                offColor="#08f"
                onColor="#08f"
                offHandleColor="#0ff"
                onHandleColor="#0ff"
                height={40}
                width={80}
            />
        </ul>
    </>)
}

const mapStateToProps = state => {
    return {
        lan: state.lan
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLanguageChange: (lan) => dispatch({ type: actionTypes.CHANGE_LANGUAGE, lan })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)