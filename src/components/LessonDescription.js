import React from 'react'

const Objectives = ({ objectives }) => (
  <ul>{objectives.map((objective, i) => <li key={i}>{objective}</li>)}</ul>
)

const LessonDescription = ({ frontmatter, excerpt }) => {
  if (frontmatter.description && frontmatter.objectives) {
    return (
      <div>
        <p>{frontmatter.description} After this lesson you will:</p>
        <Objectives {...frontmatter} />
      </div>
    )
  }

  if (frontmatter.objectives) {
    return <Objectives {...frontmatter} />
  } else {
    return <p dangerouslySetInnerHTML={{ __html: excerpt }} />
  }
}

export default LessonDescription
