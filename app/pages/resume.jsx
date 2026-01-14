
import { assets } from '@/assets/assets'
import React from 'react'
import { useEffect } from "react";
import Image from 'next/image';

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <main className="resume-page">
            <header className="resume-header">
            <h1 className="resume-title">My Resume</h1>

            <div className="resume-actions">
                <a className="resume-btn" href="/resume.pdf" target="_blank" rel="noreferrer">
                Open in new tab
                </a>
                <a className="resume-btn" href="/resume.pdf" download>
                Download
                <Image src={assets.download_icon} alt='' className='download-image'/>
                </a>
            </div>
            </header>

            <section className="resume-pdf">
            <iframe src="/resume.pdf" title="Resume PDF" className="resume-iframe" />
            </section>

            <p className="resume-note">
            If the PDF doesn’t render on your device, use “Open in new tab” or “Download”.
            </p>
      </main>
    </div>
  )
}

export default Resume