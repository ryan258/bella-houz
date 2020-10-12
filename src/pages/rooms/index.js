import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const RoomsPage = () => (
  <Layout>
    <SEO title="Rooms" />
    <h1>Hi from the Rooms page</h1>
    <p>
      Where you can browser over all the rooms and click on them for more
      information!
    </p>
    <ul>
      <li style={{ margin: 0 }}>
        <Link to="/rooms/king-1">King #1</Link>
      </li>
      <li style={{ margin: 0 }}>
        <Link to="/rooms/king-2">King #2</Link>
      </li>
      <li style={{ margin: 0 }}>
        <Link to="/rooms/queen">Queen</Link>
      </li>
      <li style={{ margin: 0 }}>
        <Link to="/twins">Twins</Link>
      </li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default RoomsPage
