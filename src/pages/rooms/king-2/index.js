import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const KingTwo = () => (
  <Layout>
    <SEO title="Rooms" />
    <h1>Hi from the King #2 Room</h1>
    <p>Welcome to page 2</p>
    <p>
      <Link to="/rooms">Go back to the Rooms Overview page</Link>
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default KingTwo
