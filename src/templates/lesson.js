import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Footer from '../components/Footer'
import ContentsBox from '../components/ContentsBox'
import { rhythm, scale } from '../utils/typography'

class LessonTemplate extends React.Component {
  render() {
    const lesson = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <div>
        <Helmet title={`${lesson.frontmatter.title} | ${siteTitle}`}>
          <link rel="icon" type="image/png" href="/favicon.png" />
        </Helmet>
        <h1>{lesson.frontmatter.title}</h1>
        <ContentsBox html={lesson.tableOfContents} />
        <div dangerouslySetInnerHTML={{ __html: lesson.html }} />
        <Footer />
      </div>
    )
  }
}

export default LessonTemplate

export const pageQuery = graphql`
  query LessonBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        duration
      }
      tableOfContents
    }
  }
`
