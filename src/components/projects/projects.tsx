'use client'

import React, { useEffect, useId, useState } from 'react'
import styles from './styles.module.scss'
import CardProject from './card-project/card-project'
import { SvgGithub, SvgWeb } from '@/svgs/icons'
import { useTranslations } from 'next-intl'

interface LinkProps {
    svg: JSX.Element
    link: string
}

export interface ProjectProps {
    cover: string
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
            cover: '/images/projects/valspector.png',
            name: "VALSPECTOR",
            description: t('valspector'),
            technologies: ['Next.js', 'Typescript', 'Sass'],
            links: [
                { link: "https://valspector.vercel.app/", svg: <SvgWeb /> },
                { link: "https://github.com/william-rossi/valspector", svg: <SvgGithub /> }
            ]
        },
        {
            cover: '/images/projects/dummy-website.png',
            name: "Dummy Website",
            description: t('dummywebsite'),
            technologies: ['Next.js', 'Typescript', 'Sass'],
            links: [
                { link: "https://dummy-website-omega.vercel.app/", svg: <SvgWeb /> },
                { link: "https://github.com/william-rossi/dummy-website", svg: <SvgGithub /> }
            ]
        },
        {
            cover: '/images/projects/desktop-manager.png',
            name: "Desktop Manager",
            description: t('desktopmanager'),
            technologies: ['Windows Forms', 'C#', 'SQLite'],
            links: [
                { link: "https://desktopmanager.netlify.app/", svg: <SvgWeb /> }
            ]
        },
        {
            cover: '/images/projects/portfolio.png',
            name: "My portfolio!",
            description: t('portfolio'),
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
