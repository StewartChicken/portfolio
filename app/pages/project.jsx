
import React from 'react'
import Image from 'next/image'

import { projectPageData } from '../data/project_pages'
import { usePageContext } from '../context/PageContext'
import { useEffect } from "react";


// This is a general project page. Each project will be formatted in the same way 
// with elements passed as arguments to this page
const Project = () => {
    const [{ project }, dispatch] = usePageContext()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const data = project ? projectPageData[project] : null

    return (
        <main className="project-page">
      <div className="project-container">
        {/* Header */}
        <header className="project-header">
          <h1 className="project-title">{data.title}</h1>
          <p className="project-desc">{data.description}</p>
        </header>

        {/* Meta row: duration + skills */}
        <section className="project-meta">
            <div className="project-meta-skills">
                <span className="meta-inline">
                    <strong>Skills:</strong>
                </span>

                <div className="skill-chips">
                    {data.skills?.map((skill) => (
                    <span key={skill} className="skill-chip">
                        {skill}
                    </span>
                    ))}
                </div>
            </div>

            <div className="project-duration">
                <span className="meta-inline">
                <strong>Duration:</strong> {data.duration}
                </span>
            </div>
        </section>

        {/* Long description */}
        {data.description_verbose && (
          <section className="project-body">
            <h2 className="section-title">Overview</h2>
            <p className="project-verbose">{data.description_verbose}</p>
          </section>
        )}

        {/* Images last (scalable) */}
        {Array.isArray(data.images) && data.images.length > 0 && (
          <section className="project-gallery">
            <h2 className="section-title">Gallery</h2>

            <div className="gallery-grid">
              {data.images.map((img, idx) => (
                <figure className="gallery-item" key={`${img.src}-${idx}`}>
                  {/* If you want Next Image optimization, keep width/height consistent */}
                  <div className="gallery-image">
                    <Image
                      //src={img.src}
                      src='/project_images/riscv/EX.png'
                      alt={img.description || `${data.title} image ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 800px"
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  {img.description && (
                    <figcaption className="gallery-caption">{img.description}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
    )
}

export default Project