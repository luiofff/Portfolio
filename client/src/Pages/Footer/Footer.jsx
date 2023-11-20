import React from 'react'

import styles from "./Footer.module.css"

export default function Footer() {


    return (
        <>
            <section className={styles.footer_block}>
                <h1 className={styles.footer_logo}>ILYA ULANOV</h1>
                <div className={styles.text_block}>
                    <span className={styles.contacts}>Контакты</span>
                    <span className={styles.contacts_titles}>+7 902 041 64 22</span>
                    <span className={styles.contacts_titles}>ilya.ylanov2016@gmail.com</span>
                    <span className={styles.contacts_titles}><a href="https://github.com/luiofff">GitHub</a></span>
                </div>
            </section>
        </>
    )
}
