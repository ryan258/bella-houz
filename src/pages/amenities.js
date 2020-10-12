import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Amenities page" />
    <h1>Hi from the Amenities page</h1>
    <p>Welcome to the future home of amenity details!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
