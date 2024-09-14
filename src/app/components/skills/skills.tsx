'use client'

import React, { useEffect, useId, useState } from 'react'
import styles from './styles.module.scss'
import { SvgAzure, SvgCss, SvgDotNet, SvgGit, SvgHtml, SvgJavascript, SvgNext, SvgReact, SvgSass, SvgTypescript } from '@/svgs/icons'
import { useTranslations } from 'next-intl'

interface SkillsProps {
    title: string
    svg: JSX.Element,
}

export default function Skills() {
    const t = useTranslations('skills');
    const [showSkills, setShowSkills] = useState<boolean>(false)
    const skillsId = useId()

    const skills: SkillsProps[] = [
        { title: "HTML5", svg: <SvgHtml /> },
        { title: "CSS3", svg: <SvgCss /> },
        { title: "Javascript", svg: <SvgJavascript /> },
        { title: "Typescript", svg: <SvgTypescript /> },
        { title: "React.js", svg: <SvgReact /> },
        { title: "Next.js", svg: <SvgNext /> },
        { title: "Sass", svg: <SvgSass /> },
        { title: ".NET", svg: <SvgDotNet /> },
        { title: "Git", svg: <SvgGit /> },
        { title: "Azure", svg: <SvgAzure /> }
    ];

    useEffect(() => {
        if (typeof document !== 'undefined') {
            const el = document.getElementById(skillsId)

            const observer = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting)
                    setShowSkills(true)
            }, {
                threshold: window.innerWidth < window.innerHeight ? 0.5 : 1,
            })

            if (el) {
                observer.observe(el)
                return () => {
                    observer.unobserve(el)
                }
            }
        }
    }, [])

    return (
        <section className={styles.container}>
            <div className={styles.titleArea}>
                <h2>{t('title')}</h2>
                <p>{t('description')}</p>
            </div>
            <div id={skillsId} className={styles.skills}>
                {
                    skills.map((item, index) => (
                        <div
                            style={{ animationDuration: (index === 0 ? 0.5 : index) * 0.07 + `s` }}
                            className={`${styles.skill} ${showSkills && styles.show}`}
                            title={item.title}
                            key={index}
                        >
                            {item.svg}
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
