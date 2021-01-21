import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

interface Props {
  siteTitle?: string
}

const Header = ({ siteTitle = "" }: Props) => (
  <header
    style={{
      background: `black`,
      // marginBottom: `1.45rem`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <div
          style={{
            maxWidth: `2rem`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={require("../images/dplogo.png")}
            alt="Don't Panic logo"
            style={{ marginBottom: 0 }}
          />
        </div>
      </Link>
    </div>
  </header>
)

export default Header
