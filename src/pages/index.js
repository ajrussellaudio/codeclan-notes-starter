import React from 'react'
import get from 'lodash/get'

import Head from '../components/Head'
import Bio from '../components/Bio'
import LessonList from '../components/LessonList'

const LessonIndex = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')

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

  const lessonsBeforeToday = get(
    props,
    'data.allMarkdownRemark.edges',
    []
  ).filter(lesson => {
    const lessonWeek = get(lesson, 'node.frontmatter.week')
    const lessonDay = get(lesson, 'node.frontmatter.day')
    const thisWeek = get(props, 'data.site.siteMetadata.date.week', 1)
    const today = get(props, 'data.site.siteMetadata.date.day', 1)

    return (
      // lesson comes before this week, or
      // lesson comes THIS week, on or before today
      lessonWeek < thisWeek || (lessonWeek === thisWeek && lessonDay <= today)
    )
  })

  return (
    <div>
      <Head title={siteTitle} />
      <Bio />
      <LessonList lessons={lessonsBeforeToday} />
    </div>
  )
}

export default LessonIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        date {
          week
          day
        }
      }
    }
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            objectives
            week
            day
            order
          }
        }
      }
    }
  }
`
