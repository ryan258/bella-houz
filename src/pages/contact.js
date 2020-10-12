import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact Details" />
    <h1>Hi from the Contact page</h1>
    <p>Welcome to the future home of the contact details!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
