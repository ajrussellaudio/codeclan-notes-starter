import React from 'react'
import { rhythm } from '../utils/typography'
import Link from 'gatsby-link'

const LessonHeader = ({ frontmatter, fields }) => (
  <h3
    style={{
      marginBottom: rhythm(1 / 4),
    }}
  >
    <Link to={fields.slug}>{frontmatter.title || fields.slug}</Link>
  </h3>
)

export default LessonHeader
