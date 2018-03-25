import React from 'react'
import Link from 'gatsby-link'

import Bio from './Bio'
import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Link to="/">
          <h2 className="return">Return to Index</h2>
        </Link>
        <Bio />
      </footer>
    )
  }
}

export default Footer
