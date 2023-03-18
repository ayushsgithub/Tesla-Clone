import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
import logo from "../images/logo.svg"

function Header() {

  const [BurgerStatus, setBurgerStatus] = useState(false)
  const cars = useSelector(selectCars)


  return (
    <Container>
      <a href="#">
        <img src={logo} alt="error" />
      </a>
      <Menu>
        {cars && cars.map((car, index) => (
          <a key={index} href="#">{car}</a>
        ))}
        
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => setBurgerStatus(prev => !BurgerStatus)} />
      </RightMenu>
      <BurgerNav show={BurgerStatus}>
      <CloseWrapper>
        <CustomClose onClick={() => setBurgerStatus(prev => !BurgerStatus)} />
        </CloseWrapper>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Cyber Truck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Commercial Energy</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Find Us</a></li>
        <li><a href="#">Support</a></li>
        
        
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
z-index:1;
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding: 0 20px;
top:0;
left:0;
right:0;

`

const Menu = styled.div`
display:flex;
align-items:center;
flex:1;
justify-content:center;

a{
  font-weight:600;
  text-transform:uppercase;
  padding:0 10px;
  flex-wrap:no-wrap;
}
@media (max-width: 768px){
  display:none;
}

`

const RightMenu = styled.div`
display:flex;
align-items:center;
a{
  font-weight:600;
  text-transform:uppercase;
  margin-right:10px
}
`

const CustomMenu = styled(MenuIcon)`
cursor:pointer;
`
const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:100;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;

transform:${props => props.show ? `translateX(0)` : `translateX(100%)`};
transition:transform 0.2s ease-in;

  li{
    padding:15px 0;
    border-bottom:1px solid rgba(0, 0, 0, .3);

    a{
      font-weight:600;
    }
  }
`

const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
`

const CustomClose = styled(CloseIcon)`
cursor:pointer;
`