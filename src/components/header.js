import PropTypes from "prop-types"
import React from "react"
import HeaderImage from "../images/header.png"

const Header = ({ isHeaderFixed }) => (
  <header
    style={{
      backgroundImage: `url(${HeaderImage})`,
      backgroundSize: `cover`,
      backgroundColor: isHeaderFixed ? 'navy' : 'transparent',
      height: 50,
      position: `fixed`,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 99
    }}
  >
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
