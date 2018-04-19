import React from 'react'
import Helmet from 'react-helmet'

const Head = ({ title }) => (
  <Helmet title={title}>
    <link
      rel="icon"
      type="image/png"
      href="https://codeclan.com/wp-content/uploads/2016/03/favicon.png"
    />
  </Helmet>
)

export default Head
