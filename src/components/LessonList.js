import React from 'react'
import get from 'lodash/get'
import groupBy from 'lodash/groupBy'

import LessonHeader from './LessonHeader'
import LessonDescription from './LessonDescription'

const DailyList = ({ lessons }) => {
  const days = groupBy(lessons, 'node.frontmatter.day')
  return (
    <div>
      {Object.keys(days).map(dayNumber => (
        <details className="lesson-list" key={dayNumber}>
          <summary>
            <h6>Day {dayNumber}</h6>
          </summary>
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
        <details className="lesson-list" key={weekNumber}>
          <summary>
            <h6>Week {weekNumber}</h6>
          </summary>
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
