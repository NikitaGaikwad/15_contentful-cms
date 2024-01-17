import { useFetchProjects } from './fetchProjects'
import React from 'react'

import noimage from './assets/no-image.png'

const Projects = () => {
  const { loading, project } = useFetchProjects()
  console.log(loading, project);

  if (loading) {
    return <section className='projects'>
      <div className="title">
        <h2>Loading</h2>
      </div>
    </section>
  }
  return (
    <section className='projects'>
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {project.map((p)=>{
          const {id, img, url, title} = p;
          return (
            <a 
            key={id}
            href={url}
            target='_blank'
            rel='nonreferrer'
            className='project'>
              <img src={noimage} alt={title} className='img' />
              <h5>{title}</h5>
            </a>
          )
        })}
      </div>
      
    </section>
  )
}

export default Projects
