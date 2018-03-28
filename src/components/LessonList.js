import React from 'react'
import get from 'lodash/get'

import LessonHeader from './LessonHeader'
import LessonDescription from './LessonDescription'

const lessonIsBeforeToday = (lesson, thisWeek, today) => {
  const lessonWeek = get(lesson, 'frontmatter.week')
  const lessonDay = get(lesson, 'frontmatter.day')
  return (
    // lesson comes before this week, or
    // lesson comes THIS week, on or before today
    lessonWeek < thisWeek || (lessonWeek === thisWeek && lessonDay <= today)
  )
}

const LessonList = ({ lessons, thisWeek, today }) => {
  return (
    <div>
      {lessons
        .filter(({ node }) => lessonIsBeforeToday(node, thisWeek, today))
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
