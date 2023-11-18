import React from 'react'

import styles from './Projects.module.css'

export default function Projects() {
  return (
    <>
        <section className={styles.project_section}>
          <div className={styles.projects_header}>
            <span className={styles.projects_header_title}>Мои проекты</span>
          </div>
        </section>
    </>
  )
}
