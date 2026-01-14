import React from 'react'

import '../globals.css'

import { usePageContext } from '../context/PageContext'

// Each tile should include:
// - Project Title
// - Project Description (brief)
// - Skills/Domains
const ProjectTile = ({ title, description, skills, label }) => {
  const [{ page }, dispatch] = usePageContext()

  const goToProject = (label) => {
    dispatch({
      type: "SET_PROJECT",
      project: label
    })

    dispatch({
      type: "SET_PAGE",
      page: "project",
    })
  }

  return (
    <div className="project-tile" onClick={() => goToProject(label)}>
      <div className="project-tile-header">
        <h2>{title}</h2>
      </div>

      <div className="project-tile-body">
        <p className="project-description">{description}</p>

        <ul className="project-skills">
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProjectTile