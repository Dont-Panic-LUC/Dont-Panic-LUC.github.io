import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      WELCOME TO
      LOYOLA UNIVERSITY
      CHICAGO'S CODING COMMUNITY
    </h1>
    <p>
      DON'T PANIC! was started in the Fall of 2018 with the goal of uniting students from all the disciplines in the Loyola coding community. Our aim since the beginning has been to create a community of people who have a passion and drive to learn and make friends. We aim to serve our community in a variety of ways; first being relaxed meetings where we get together and discuss important topics in the Computer Science field, second being events where we go out and interact with the larger Chicago coding community, and finally through our Discord channel, where we discuss anything and everything.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={require('../images/sonic.jpg')} alt="sonic is a hacker??"/>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
