import React from 'react'
import Navigation from '../Navigation/Navigation'
import Front from './Front'
import AboutContest from './AboutContest'
import Overview from './Overview'
import JudgeSection from './JudgeSection'
import Footer from '../Footer/Footer'
import OurCommunity from './OurCommunity'
import OurSponsors from './OurSponsors'
import AboutUs from './AboutUs'

function LandingPage() {

    return (
        <div>
            <Navigation />
            <Front />
            <AboutContest/>
            <Overview />
            <JudgeSection />
            <OurCommunity/>
            <OurSponsors/>
            <AboutUs/>
            <Footer/>
        </div>
    )
}

export default LandingPage