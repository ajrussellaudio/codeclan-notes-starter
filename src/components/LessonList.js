import React from 'react'
import get from 'lodash/get'
import groupBy from 'lodash/groupBy'
import sortBy from 'lodash/sortBy'

import LessonHeader from './LessonHeader'
import LessonDescription from './LessonDescription'

const ListOfLessons = ({ lessons }) => {
  const lessonsInOrder = sortBy(lessons, ({ node }) => node.frontmatter.order)
  return (
    <div>
      {lessonsInOrder.map(({ node }) => (
        <div key={node.fields.slug}>
          <LessonHeader {...node} />
          <LessonDescription {...node} />
        </div>
      ))}
    </div>
  )
}

const ListOfDays = ({ lessons }) => {
  const days = groupBy(lessons, 'node.frontmatter.day')
  return (
    <div>
      {Object.keys(days).map(dayNumber => (
        <details className="lesson-list" key={dayNumber}>
          <summary>
            <h6>Day {dayNumber}</h6>
          </summary>
          <ListOfLessons lessons={days[dayNumber]} />
        </details>
      ))}
    </div>
  )
}

const ListOfWeeks = ({ lessons }) => {
  const weeks = groupBy(lessons, 'node.frontmatter.week')
  return (
    <div>
      {Object.keys(weeks).map(weekNumber => (
        <details className="lesson-list" key={weekNumber} open>
          <summary>
            <h6>Week {weekNumber}</h6>
          </summary>
          <ListOfDays lessons={weeks[weekNumber]} />
        </details>
      ))}
    </div>
  )
}

const LessonList = ({ lessons }) => {
  return <ListOfWeeks lessons={lessons} />
}

export default LessonList
