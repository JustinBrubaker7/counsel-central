import React from 'react'
import HeaderExternal from '../components/HeaderExternal/HeaderExternal'
import FeatureSectionExternal from '../components/FeatureSectionExternal'
import TeamExternal from '../components/TeamExternal/TeamExternal'
import Pricing from '../components/Pricing/Pricing'
import Footer from '../components/FooterExternal/Footer'
import CallToAction from '../components/CallToAction/CallToAction'

const HomeExternal = () => {
    return (
        <div>
           <HeaderExternal />
           <FeatureSectionExternal />
           <CallToAction />
           <Pricing />
           <TeamExternal />
           <Footer />
        </div>
    )
}

export default HomeExternal
