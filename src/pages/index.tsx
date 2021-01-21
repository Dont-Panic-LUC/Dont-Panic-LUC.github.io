import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout
    header={
      <div
        style={{
          flex: 1,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundColor: "#191919",
            zIndex: -1,
            opacity: 0.9,
          }}
        />
        <img
          src={require("../images/sonic.jpg")}
          alt="sonic is a hacker??"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            zIndex: -2,
          }}
        />
        <p
          style={{
            fontSize: 36,
            color: "whitesmoke",
          }}
        >
          Welcome to the
        </p>
        <h1
          style={{
            fontSize: 72,
            color: "white",
          }}
        >
          Fire Erin Moriarty
        </h1>
        <p
          style={{
            fontSize: 36,
            color: "whitesmoke",
          }}
        >
          club!
        </p>
      </div>
    }
  >
    <SEO title="Home" />
    <h1>WELCOME TO LOYOLA UNIVERSITY CHICAGO'S CODING COMMUNITY</h1>
    <p>
      DON'T PANIC! was started in the Fall of 2018 with the goal of uniting
      students from all the disciplines in the Loyola coding community. Our aim
      since the beginning has been to create a community of people who have a
      passion and drive to learn and make friends. We aim to serve our community
      in a variety of ways; first being relaxed meetings where we get together
      and discuss important topics in the Computer Science field, second being
      events where we go out and interact with the larger Chicago coding
      community, and finally through our Discord channel, where we discuss
      anything and everything.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={require("../images/sonic.jpg")} alt="sonic is a hacker??" />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
