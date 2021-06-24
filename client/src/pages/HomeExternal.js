import React from 'react'
import HeaderExternal from '../components/HeaderExternal/HeaderExternal'
import FeatureSectionExternal from '../components/FeatureSectionExternal'
import TeamExternal from '../components/TeamExternal/TeamExternal'
import Footer from '../components/FooterExternal/Footer'
import CallToAction from '../components/CallToAction/CallToAction'

const HomeExternal = () => {
    return (
        <div>
           <HeaderExternal />
           <FeatureSectionExternal />
           <CallToAction />
           <TeamExternal />
           <Footer />
        </div>
    )
}

export default HomeExternal
