import React from 'react'
import styled from 'styled-components'
import Section from './Section'


function Home() {
  return (
    <Container>
        <Section 
        title="Model S"
        description="Leasing starting at $349/mo"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        backgroundImage="model-s.jpg"
        />
        <Section 
        title="Model Y"
        description="Online Order for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        backgroundImage="model-y.jpg"
        />
        <Section 
        title="Model 3"
        description="Online Order for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        backgroundImage="model-3.jpg"
        />
        <Section 
        title="Model X"
        description="Schedule a Demo Drive"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        backgroundImage="model-s.jpg"
        />
        <Section 
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImage="solar-panel.jpg"
        leftBtn="Order now"
        rightBtn="Learn more"
        />
        <Section 
        title="Solar for New Roofs"
        description="Solar Roofs Costs Less Than a New Roof Plus Solar Panels"
        backgroundImage="solar-roof.jpg"
        leftBtn="Order now"
        rightBtn="Learn more"
        />
        <Section 
        title="Accessories"
        description=""
        backgroundImage="accessories.jpg"
        leftBtn="Shop now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
height:100vh`
