import React from 'react'
import styles from './styles.module.scss'
import { ProjectProps } from '../projects'
import Link from 'next/link'

interface CardProps {
    project: ProjectProps
    animationDuration: number
    showProject: boolean
}

export default function CardProject({ project, animationDuration, showProject }: CardProps) {
    return (
        <div style={{ animationDuration: animationDuration + 's' }} className={`${styles.container} ${showProject && styles.show}`}>
            <div className={styles.imageArea}>
                <img draggable={false} src={project.cover} alt={project.name} />
                <div className={styles.gradient} />
            </div>
            <div className={styles.description}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
            </div>
            <div className={styles.technologies}>
                {
                    project.technologies.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))
                }
            </div>
            <div className={styles.links}>
                {
                    project.links.map((item, index) => (
                        <Link target='_blank' key={index} href={item.link} className={styles.link}>
                            {item.svg}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
