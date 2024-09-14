'use client'

import React, { useEffect, useId, useState } from 'react'
import styles from './styles.module.scss'
import CardProject from './card-project/card-project'
import { StaticImageData } from 'next/image'
import dm from '../../../images/projects/project-dm.png'
import dw from '../../../images/projects/project-dw.png'
import p from '../../../images/projects/project-p.png'
import { SvgGithub, SvgWeb } from '@/svgs/icons'
import { useTranslations } from 'next-intl'

interface LinkProps {
    svg: JSX.Element
    link: string
}

export interface ProjectProps {
    cover: StaticImageData
    name: string
    description: string
    technologies: string[]
    links: LinkProps[]
}

export default function Projects() {
    const t = useTranslations('projects');
    const [showProjects, setShowProjects] = useState<boolean>(false)
    const projectsId = useId()

    const projects: ProjectProps[] = [
        {
            cover: dw,
            name: "Dummy Website",
            description: t('dw'),
            technologies: ['Next.js', 'React.js', 'Typescript', 'Sass'],
            links: [
                { link: "https://dummy-website-omega.vercel.app/", svg: <SvgWeb /> },
                { link: "https://github.com/william-rossi/dummy-website", svg: <SvgGithub /> }
            ]
        },
        {
            cover: dm,
            name: "Desktop Manager",
            description: t('dm'),
            technologies: ['Windows Forms', 'C#', 'SQLite'],
            links: [
                { link: "https://desktopmanager.netlify.app/", svg: <SvgWeb /> }
            ]
        },
        {
            cover: p,
            name: "My portfolio!",
            description: t('p'),
            technologies: ['Next.js', 'Typescript', 'Sass', 'i18n'],
            links: [
                { link: "https://github.com/william-rossi/my-portfolio", svg: <SvgGithub /> }
            ]
        }
    ]

    useEffect(() => {
        if (typeof document !== 'undefined') {
            const el = document.getElementById(projectsId)

            const observer = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting)
                    setShowProjects(true)
            }, {
                threshold: window.innerWidth < window.innerHeight ? 0.1 : 0.4,
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
            <div id={projectsId} className={styles.projects}>
                {
                    projects.map((item, index) => (
                        <CardProject
                            showProject={showProjects}
                            animationDuration={(index === 0 ? 0.5 : index) * 0.5}
                            project={item} key={index}
                        />
                    ))
                }
            </div>
        </section>
    )
}
