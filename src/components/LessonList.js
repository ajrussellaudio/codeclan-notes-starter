import React from 'react'
import get from 'lodash/get'

import LessonHeader from './LessonHeader'
import LessonDescription from './LessonDescription'

const LessonList = ({ lessons, weekNumber }) => {
  return (
    <div>
      {lessons
        .filter(({ node }) => {
          return get(node, 'frontmatter.week') <= weekNumber
        })
        .map(({ node }) => (
          <div key={node.fields.slug}>
            <LessonHeader {...node} />
            <LessonDescription {...node} />
          </div>
        ))}
    </div>
  )
}

export default LessonList
