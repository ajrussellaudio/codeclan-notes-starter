import React from 'react'

const Objectives = ({ objectives }) => (
  <ul>{objectives.map((objective, i) => <li key={i}>{objective}</li>)}</ul>
)

const LessonDescription = ({ frontmatter, excerpt }) => {
  if (frontmatter.objectives) {
    return <Objectives {...frontmatter} />
  } else {
    return <p>{excerpt}</p>
  }
}

export default LessonDescription
