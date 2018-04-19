import React from 'react'
import get from 'lodash/get'

import Head from '../components/Head'
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
        <Head title={`${lesson.frontmatter.title} | ${siteTitle}`} />
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
      }
      tableOfContents
    }
  }
`
