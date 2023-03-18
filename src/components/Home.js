import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import modelS from "../images/model-s.jpg"
import modelY from "../images/model-y.jpg"
import modelX from "../images/model-x.jpg"
import solarPanel from "../images/solar-panel.jpg"
import solarRoof from "../images/solar-roof.jpg"
import accessories from "../images/accessories.jpg"


function Home() {
  return (
    <Container>
        <Section 
        title="Model S"
        description="Leasing starting at $349/mo"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        backgroundImage={modelS}
        />
        <Section 
        title="Model Y"
        description="Online Order for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        // backgroundImage="model-y.jpg"
        backgroundImage={modelY}
        />
        <Section 
        title="Model 3"
        description="Online Order for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        // backgroundImage="model-3.jpg"
        backgroundImage={modelX}
        />
        <Section 
        title="Model X"
        description="Schedule a Demo Drive"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        // backgroundImage="model-s.jpg"
        backgroundImage={modelS}
        />
        <Section 
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        // backgroundImage="solar-panel.jpg"
        backgroundImage={solarPanel}
        leftBtn="Order now"
        rightBtn="Learn more"
        />
        <Section 
        title="Solar for New Roofs"
        description="Solar Roofs Costs Less Than a New Roof Plus Solar Panels"
        // backgroundImage="solar-roof.jpg"
        backgroundImage={solarRoof}
        leftBtn="Order now"
        rightBtn="Learn more"
        />
        <Section 
        title="Accessories"
        description=""
        // backgroundImage="accessories.jpg"
        backgroundImage={accessories}
        leftBtn="Shop now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
height:100vh`
