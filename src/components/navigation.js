import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Navigation = ({ siteTitle }) => (
  <nav>
    <ul>
      <li style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
          }}
        >
          Home
        </Link>
      </li>
      <li style={{ margin: 0 }}>
        <Link
          to="/rooms"
          style={{
            color: `white`,
          }}
        >
          Rooms
        </Link>
      </li>
      <li style={{ margin: 0 }}>
        <Link
          to="/amenities"
          style={{
            color: `white`,
          }}
        >
          Amenities
        </Link>
      </li>
      <li style={{ margin: 0 }}>
        <Link
          to="/location"
          style={{
            color: `white`,
          }}
        >
          Location
        </Link>
      </li>
      <li style={{ margin: 0 }}>
        <Link
          to="/contact"
          style={{
            color: `white`,
          }}
        >
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

// Navigation.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Navigation.defaultProps = {
//   siteTitle: ``,
// }

export default Navigation
