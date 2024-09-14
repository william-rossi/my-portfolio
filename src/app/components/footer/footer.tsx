'use client'

import React from 'react'
import styles from './styles.module.scss'
import { SvgGithub, SvgLinkedin, SvgEmail } from '@/svgs/icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface ContactProps {
    svg: JSX.Element
    link: string
}

export default function Footer() {
    const router = useRouter()

    const contacts: ContactProps[] = [
        {
            link: "https://www.linkedin.com/in/william-ruiz-550388296/",
            svg: <SvgLinkedin />
        },
        {
            link: "https://github.com/william-rossi",
            svg: <SvgGithub />
        }
    ]

    return (
        <footer className={styles.container}>
            <div className={styles.subContainer}>
                <small>© {new Date().getFullYear()} - Next.js</small>
                <div className={styles.contacts}>
                    {
                        contacts.map((item, index) => (
                            <Link key={index} target='_blank' href={item.link} className={styles.contact}>
                                {item.svg}
                            </Link>
                        ))
                    }
                    <div title='william.ruiz.work.br@gmail.com' onClick={() => router.push('mailto:william.ruiz.work.br@gmail.com')} className={styles.contact}>
                        <SvgEmail />
                    </div>
                </div>
            </div>
        </footer>
    )
}
