import React from 'react'
import get from 'lodash/get'
import groupBy from 'lodash/groupBy'

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

const DailyList = ({ lessons }) => {
  const days = groupBy(lessons, 'node.frontmatter.day')
  return (
    <div>
      {Object.keys(days).map(dayNumber => (
        <details key={dayNumber}>
          <summary>Day {dayNumber}</summary>
          {days[dayNumber].map(({ node }) => (
            <div key={node.fields.slug}>
              <LessonHeader {...node} />
              <LessonDescription {...node} />
            </div>
          ))}
        </details>
      ))}
    </div>
  )
}

const WeeklyList = ({ lessons }) => {
  const weeks = groupBy(lessons, 'node.frontmatter.week')
  return (
    <div>
      {Object.keys(weeks).map(weekNumber => (
        <details key={weekNumber}>
          <summary>Week {weekNumber}</summary>
          <DailyList lessons={weeks[weekNumber]} />
        </details>
      ))}
    </div>
  )
}

const LessonList = ({ lessons, thisWeek, today }) => {
  return <WeeklyList lessons={lessons} />
}

export default LessonList
