import { motion } from "framer-motion"
import { styled } from "twin.macro"

export const Header = styled.header`
  background: green;
  position: relative;
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  z-index: 2;
`

export const Nav = styled(motion.nav)`
  background-color: #070707;
  height: 255px;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 10;
`

export const Link = styled(motion.li)`
  color: white;
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
`

export const SvgBox = styled(motion.div)``

export const HamburgerStyle = `
#nav-icon1 {
  width: 21px;
  height: 12px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}

#nav-icon1 span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: #c05328;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}

#nav-icon1 span:nth-child(1) {
  top: 0px;
}

#nav-icon1 span:nth-child(2),
#nav-icon1 span:nth-child(3) {
  top: 6px;
}

#nav-icon1 span:nth-child(4) {
  top: 12px;
}

#nav-icon1.openHamburgerButton span:nth-child(1) {
  top: 5px;
  width: 0%;
  left: 50%;
}

#nav-icon1.openHamburgerButton span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon1.openHamburgerButton span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon1.openHamburgerButton span:nth-child(4) {
  top: 5px;
  width: 0%;
  left: 50%;
}
`
