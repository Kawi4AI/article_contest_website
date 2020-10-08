import React from 'react'
import Navigation from '../Navigation/Navigation'
import Front from './Front'
import AboutContest from './AboutContest'
import Overview from './Overview'
import JudgeSection from './JudgeSection'
import Footer from '../Footer/Footer'
import OurCommunity from './OurCommunity'
import OurPartners from './OurPartners'
import AboutUs from './AboutUs'
import Endorse from './Endorse'

function LandingPage() {

    return (
        <div>
            <Navigation />
            <Front />
            <AboutContest />
            <Overview />
            <JudgeSection />
            <OurCommunity />
            <Endorse />
            <OurPartners />
            <AboutUs />
            <Footer />
        </div>
    )
}

export default LandingPage