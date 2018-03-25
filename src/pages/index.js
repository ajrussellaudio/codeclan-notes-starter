import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const weekNumber = get(this, 'props.data.site.siteMetadata.weekNumber')
    const description = ({ frontmatter, excerpt }) => {
      if (frontmatter.objectives) {
        return (
          <ul>
            {frontmatter.objectives.map((objective, i) => (
              <li key={i}>{objective}</li>
            ))}
          </ul>
        )
      } else {
        return <p dangerouslySetInnerHTML={{ __html: excerpt }} />
      }
    }

    return (
      <div>
        <Helmet title={siteTitle}>
          <link rel="icon" type="image/png" href="/favicon.png" />
        </Helmet>
        <Bio />
        {posts
          .filter(({ node }) => get(node, 'frontmatter.week') < weekNumber)
          .map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                {description(node)}
              </div>
            )
          })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        weekNumber
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___week] }, limit: 1000) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            duration
            objectives
            week
          }
        }
      }
    }
  }
`
