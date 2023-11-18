import React from 'react'
import styles from "./Main.module.css"

import About from '../About/About'
import Projects from "../Projects/Projects"

export default function Main() {
  return (
    <>
        <div className={styles.header_title}>
            <h1>ILYA ULANOV</h1>
        </div>



        <About />
        <Projects />
    </>
  )
}
