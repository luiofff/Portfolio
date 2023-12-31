import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import styles from './Main.module.css';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

export default function Main() {
  const [aboutVisible, setAboutVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust the scroll threshold as needed
   
      if (document.documentElement.clientWidth > 726) {
        var scrollThreshold = 1450;
      } else {
        var scrollThreshold = 2350;
      }
      

      if (scrollPosition > scrollThreshold) {
        setAboutVisible(false);
      } else {
        setAboutVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.header_title}>
        <h1>ILYA ULANOV</h1>
      </div>

      <Element name="about" id="about" className={aboutVisible ? "" : styles.invisible}>
        <About company />
      </Element>

      <Element name="projects" id="projects">
        <Projects />
      </Element>

      <Element  name="footer" id="footer">
        <Footer />
      </Element>
    </>
  );
}
